import { useState, useEffect } from "react";
import DisplayHeading from "../typography/DisplayHeading";
import CountrySelector from "../layout/CountrySelector";
import CountryData from "./CountryData";

const Selector = ({ data }) => {
  const [option, setOption] = useState("australia");
  const [countryData, setCountryData] = useState(
    data.Countries.filter((country) => country.Slug === option)[0]
  );
  useEffect(() => {
    setCountryData(
      data.Countries.filter((country) => country.Slug === option)[0]
    );
  }, [option]);
  return (
    <>
      <CountrySelector
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <DisplayHeading>Select Country:</DisplayHeading>
        <select
          name="countries"
          onChange={(e) => setOption(e.target.value)}
          value={option}
        >
          {data.Countries.map((country) => (
            <option key={country.Slug} value={country.Slug}>
              {country.Country}
            </option>
          ))}
        </select>
      </CountrySelector>
      <CountryData data={countryData} />
    </>
  );
};

export default Selector;
