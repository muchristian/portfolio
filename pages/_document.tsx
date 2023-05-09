import Document, { Html, Head, Main, NextScript } from "next/document";

import { AppConfig } from "../utils/AppConfig";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale} className="dark">
        <Head />
        <body className="font-[Roboto] font-normal text-primary-2/80">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
