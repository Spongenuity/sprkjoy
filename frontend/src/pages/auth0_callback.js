import React, { useEffect } from "react"
import { BarLoader } from "react-spinners"

import Auth from "../auth"
import Layout from "../components/layout"

const Auth0CallbackPage = () => {
  useEffect(() => {
    const auth = new Auth()
    auth.handleAuthentication()
  },[])

  return (
    <Layout>
      <h1>
        This is the auth callback page, you should be redirected immediately.
      </h1>
      <BarLoader sizeUnit={"px"} size={60} color={"#000000"} />
    </Layout>
  )
}

export default Auth0CallbackPage
