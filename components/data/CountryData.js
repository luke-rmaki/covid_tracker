import Country from "../layout/Country";
import DisplayHeading from "../typography/DisplayHeading";
import Data from "../typography/Data";

const CountryData = ({ data }) => {
  console.log(data);
  return (
    <Country
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
    >
      <div>
        <DisplayHeading>Country:</DisplayHeading>
        <DisplayHeading>{data.Country}</DisplayHeading>
      </div>
      <div>
        <DisplayHeading>Total confirmed:</DisplayHeading>
        <Data>{data.TotalConfirmed}</Data>
      </div>
      <div>
        <DisplayHeading>Total deaths:</DisplayHeading>
        <Data>{data.TotalDeaths}</Data>
      </div>
      <div>
        <DisplayHeading>Total recovered:</DisplayHeading>
        <Data>{data.TotalRecovered}</Data>
      </div>
    </Country>
  );
};

export default CountryData;
