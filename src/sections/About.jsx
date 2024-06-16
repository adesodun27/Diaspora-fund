import React from "react";
import { Hero } from "../sections/Page2";
import { Frame4, Footer } from "./Page1";
import Nav from "../components/Nav";

const Home = () => (
    <main className="relative fontFamily overflow-hidden">
        <Nav />
    <section>
      <Hero />
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
