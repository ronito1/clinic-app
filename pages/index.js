import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Process from "../src/components/Process";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});


const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      <Home />
      {/* HERO */}
      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
    {/* PORTFOLIO */}
    <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
     
    </Layout>
  );
};
export default Index;
