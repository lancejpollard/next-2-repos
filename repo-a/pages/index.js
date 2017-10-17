
import 'babel-polyfill'
import React from 'react'
import Layout  from 'repo-b'

export default class HomePage extends React.Component {
  render () {
    return (
      <div>
        <style jsx global>{`
body {
  --default-font: "Helvetica Neue";
  background: var(--default-color);
  font-family: var(--default-font);
}

body:before {
  content: '';
}
  `}</style>
        Hello World
      </div>
    )
  }
}
