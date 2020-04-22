import useSWR from "swr";
import fetcher from "../utils/fetcher";
import Layout from "../components/layout/Layout";
import MainHeading from "../components/typography/MainHeading";
import MainData from "../components/data/MainData";
import Loader from "../components/data/Loader";
import Selector from "../components/data/Selector";
import CountryData from "../components/data/CountryData";

const Home = () => {
  const { data, error } = useSWR(
    "https://api.covid19api.com/summary",
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  if (error) return <Loader>Error</Loader>;

  return (
    <Layout>
      <MainHeading
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        COVID-19 Tracker
      </MainHeading>

      {data ? (
        <>
          <MainData data={data} />
          <Selector data={data} />
        </>
      ) : (
        <Loader initial={{ y: 100 }} animate={{ y: 0 }}>
          Loading
        </Loader>
      )}
    </Layout>
  );
};

export default Home;
