
import React from 'react'
import Head from 'next/head'
import Styles from './styles'

export default class Layout extends React.Component {
  render() {
    let { color, title } = this.props

    return <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
      </Head>
      <style jsx global>{`
:root {
  --default-color: red;
}
      `}</style>
      <Styles color={color}/>
      {this.props.children}
    </div>
  }
}
