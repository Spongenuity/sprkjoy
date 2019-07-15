import React, { useEffect } from "react"
import { useApolloClient } from "react-apollo-hooks"

import { CentralColumn } from "../components/styles"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Heading } from "../components/styles"

import { WIDGET_QUERY } from "../queries"

async function getWidget({ widgetId, apolloClient }) {
  const result = await apolloClient.query({
    query: WIDGET_QUERY,
    variables: {
      widgetId: widgetId,
    },
  })

  return result.data.widget
}

const WidgetPage = ({ pageContext }) => {
  const apolloClient = useApolloClient()
  const { widgetId } = pageContext

  useEffect(() => {
    getWidget({ widgetId, apolloClient })
  }, [])

  return (
    <Layout>
      <SEO title="Thank You" />
      <CentralColumn style={{ paddingTop: "2em" }}>
        <Heading>Did "foo" spark joy</Heading>
      </CentralColumn>
    </Layout>
  )
}

export default WidgetPage
