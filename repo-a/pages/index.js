
import 'babel-polyfill'
import React from 'react'
import Layout  from 'repo-b'

export default class HomePage extends React.Component {
  render () {
    return (
      <Layout color="red" title="Home page">
        Hello World
      </Layout>
    )
  }
}
