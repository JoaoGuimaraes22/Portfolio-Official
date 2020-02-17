import React from "react";
import Head from "next/head";
import Landing from "../components/landing";
import "../css/index.css";
import Projects from "../components/projects";
import About from "../components/about";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Contact from "../components/contact";

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
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </div>
);

export default Home;
