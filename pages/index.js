import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Process from "../src/components/Process";
import Layout from "../src/layout/Layout";



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
   
      {/* SKILLS */}
     
    </Layout>
  );
};
export default Index;
