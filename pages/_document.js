import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:800|Source+Sans+Pro:400,700" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body style={{ padding: 0, margin: 0, fontFamily: '"Source Sans Pro", Helvetica, sans-serif'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
