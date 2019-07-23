import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { CentralColumn } from "../components/styles"
import Auth from "../auth"
import { Button } from "rebass"

import WidgetList from "../components/WidgetList"
import WidgetBuilder from "../components/WidgetBuilder"

const auth = new Auth()

//Move to actual Component
const Login = () => {
  const { isAuthenticated } = auth

  if (isAuthenticated()) {
    console.log(auth.getUser())
    return <Button bg="primary" onClick={auth.logout}>Logout {auth.getUserName()}</Button>
  } else {
    return <Button bg="primary" onClick={auth.login}>Login</Button>
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CentralColumn style={{ paddingTop: "2em" }}>
      <p>Did your thing spark joy? Ask the fans and get some feedback!</p>
      <p>Fill out the widget, export to HTML, insert anywhere. </p>
      <Login />
      {auth.isAuthenticated() ? (
        <>
          <WidgetBuilder />
          <WidgetList />
        </>
      ) : null}
    </CentralColumn>
  </Layout>
)

export default IndexPage
