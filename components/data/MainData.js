import MainDisplay from "../layout/MainDisplay";
import DisplayHeading from "../typography/DisplayHeading";
import Data from "../typography/Data";

const MainData = ({ data }) => {
  return (
    <MainDisplay>
      <DisplayHeading
        transition={{ delay: 0.5 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        Total Confirmed Cases:
      </DisplayHeading>
      <DisplayHeading
        transition={{ delay: 0.8 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        Total Confirmed Deaths:
      </DisplayHeading>
      <DisplayHeading
        transition={{ delay: 1 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        Total Confirmed Recovered:
      </DisplayHeading>
      <Data
        transition={{ delay: 1.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {data.Global.TotalConfirmed}
      </Data>
      <Data
        transition={{ delay: 1.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {data.Global.TotalDeaths}
      </Data>
      <Data
        transition={{ delay: 1.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {data.Global.TotalRecovered}
      </Data>
    </MainDisplay>
  );
};

export default MainData;
