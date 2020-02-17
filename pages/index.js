import React from "react";
import Head from "next/head";
import Landing from "../components/landing";
import "../css/index.css";
import Projects from "../components/projects";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Landing />
    <Projects />
  </div>
);

export default Home;
