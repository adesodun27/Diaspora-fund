import React from "react";
import {
  Hero,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  Footer,
} from "../sections/Page1";
import Nav from "../components/Nav";

const Home = () => (
  <main className="relative fontFamily overflow-hidden">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b max-container">
      <Hero />
    </section>
    <section className="padding-x">
      <Frame1 />
    </section>
    <section className="padding-x padding-y">
      <Frame2 />
    </section>
    <section className="padding-b padding-x">
      <Frame3 />
    </section>
    <section className="padding-l padding-r padding-y">
      <Frame4 />
    </section>
    <section className="padding-t">
      <Footer />
    </section>
  </main>
);

export default Home;
