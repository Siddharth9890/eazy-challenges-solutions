import type { NextPage } from "next";
import Charts from "../components/Charts";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Charts />
      <Footer />
    </>
  );
};

export default Home;
