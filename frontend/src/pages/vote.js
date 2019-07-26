import React, { useEffect, useState } from "react"
import { useApolloClient } from "react-apollo-hooks"
import styled from "styled-components"
import { Heading } from "rebass"
import uuidv4 from "uuid/v4"

import Image from "../components/image"
import SEO from "../components/seo"

import { WIDGET_VOTE_QUERY, SAVE_WIDGET_FEEDBACK_QUERY } from "../queries"
import { FullScreenForm } from "../components/FullScreenForm"
import { Footer } from "../components/styles"

const FullScreen = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px 1fr;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`

async function saveVote({ widgetId, voteType, apolloClient }) {
  return await apolloClient.mutate({
    mutation: WIDGET_VOTE_QUERY,
    variables: {
      widgetId: widgetId,
      thumbsup: voteType === "thumbsup",
      thumbsdown: voteType === "thumbsdown",
    },
  })
}

const VoteTypeHeading = ({ voteType, name }) =>
  voteType === "thumbsup" ? (
    <Heading fontSize={[5, 6, 7]}>You enjoy this {name}! 👍</Heading>
  ) : (
    <Heading fontSize={[5, 6, 7]}>You didn't enjoy this {name}! 👎 </Heading>
  )

const ThankYouView = () => (
  <>
    <div />
    <div>
      <img src="https://media.giphy.com/media/4EF5xIO5yiivWh4gGn/giphy.gif" />
      <Heading fontSize={[3, 4, 5]}>Thank You! ❤️ </Heading>
    </div>
  </>
)

const FormView = ({ voteType, onSubmit, followupQuestions, name }) => (
  <>
    <VoteTypeHeading voteType={voteType} name={name} />
    <FullScreenForm onSubmit={onSubmit} followupQuestions={followupQuestions} />
  </>
)

const VotePage = ({ pageContext }) => {
  const apolloClient = useApolloClient()
  const { widgetId, voteType, followupQuestions, name } = pageContext
  const [showThankYou, setShowThankYou] = useState(false)
  const [voteId, setVoteId] = useState(uuidv4())

  useEffect(() => {
    ;(async function() {
      const result = await saveVote({ widgetId, voteType, apolloClient })
      setVoteId(result.data.widgetVote.voteId)
    })()
  }, [])

  async function onSubmit(answers) {
    if (Object.values(answers).length >= followupQuestions.length) {
      setShowThankYou(true)
    }

    await apolloClient.mutate({
      mutation: SAVE_WIDGET_FEEDBACK_QUERY,
      variables: {
        widgetId,
        voteId,
        voteType,
        answers: JSON.stringify(answers),
      },
    })
  }

  return (
    <FullScreen>
      <SEO title="Thank You" />
      {showThankYou ? (
        <ThankYouView />
      ) : (
        <FormView
          voteType={voteType}
          onSubmit={onSubmit}
          followupQuestions={followupQuestions}
          name={name}
        />
      )}
      <Footer>
        © {new Date().getFullYear()}, Built with ❤️ on the internet
      </Footer>
    </FullScreen>
  )
}

export default VotePage
