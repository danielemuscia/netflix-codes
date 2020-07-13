import React from "react";
import Hero from "../components/Hero";
import manPopcorn from '../assets/manPopcorn.svg'
import ChipsList from "../components/ChipsList";
import CategoriesList from '../components/CategoriesList'

export default function Homepage() {
  return (
    <div>
      <Hero
        title={<h1>Unlock the Hidden <br></br> Categories on Netflix</h1>}
        subtitle={<p>In this website you will find all the categories available on Netflix.<br></br> Just click on the codes and discover a new way to watch it</p>}
        buttonText="show me the codes"
        image={manPopcorn}
      />
      <ChipsList />
      <CategoriesList />
    </div>
  );
}
