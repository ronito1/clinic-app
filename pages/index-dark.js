import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import About from "../src/components/About";
import Home from "../src/components/Home";
import Process from "../src/components/Process";
import Layout from "../src/layout/Layout";


const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <Layout dark>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      <Home dark />
      {/* HERO */}
      {/* PROCESS */}
      <Process dark />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About dark />
      {/* /ABOUT */}
        {/* PORTFOLIO */}
        <Portfolio />
      {/* /PORTFOLIO */}
   
    
    </Layout>
  );
};
export default Index;
