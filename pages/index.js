import fetch from "isomorphic-unfetch";

import Layout from "../components/layout/Layout";
import MainHeading from "../components/typography/MainHeading";
import MainDisplay from "../components/layout/MainDisplay";
import DisplayHeading from "../components/typography/DisplayHeading";
import MainData from "../components/data/MainData";

const Home = ({ data }) => {
  return (
    <Layout>
      <MainHeading
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        COVID-19 Tracker
      </MainHeading>
      <MainData data={data} />
    </Layout>
  );
};

Home.getInitialProps = async (context) => {
  const res = await fetch("https://api.covid19api.com/summary");
  const data = await res.json();
  return { data };
};

export default Home;
