import type { NextPage } from "next";
import { Charts } from "../components/Charts";
import { Container } from "../components/Container";

const Home: NextPage = () => {
  return (
    <>
      <Container />
      <Charts showButtons={true} />
    </>
  );
};

export default Home;
