import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>COVID-19 Tracker</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>{props.children}</div>
      <style global jsx>
        {`
          body,
          html {
            box-sizing: border-box;
            --red: #bb1542;
            --shade: #eb5f5d;
            --yellow: #fabc74;
            --blue: #239f95;
            background-color: var(--yellow);
          }
          body > * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
