import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>COVID-19 Tracker</title>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
