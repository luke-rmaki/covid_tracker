import { useState, useEffect } from "react";

const About = () => {
  // const [test, setTest] = useState();
  // useEffect(() => {
  //   setTest("This is a test");
  // }, []);
  const test = useTest();

  return (
    <>
      <h1>Test</h1>
      <p>{test}</p>
    </>
  );
};

export default About;

const useTest = () => {
  const [test, setTest] = useState();
  useEffect(() => {
    setTest("This is a test");
  }, []);
  return test;
};
