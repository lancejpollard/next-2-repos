
import React from 'react'

export default () => {
  return <style jsx global>{`
body {
  --default-font: "Helvetica Neue";
  background: var(--default-color);
  font-family: var(--default-font);
}

body:before {
  content: '';
}
  `}</style>
}
