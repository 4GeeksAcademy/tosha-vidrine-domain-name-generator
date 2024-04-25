/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "my"];
  let adj = ["hairy", "spiked"];
  let noun = ["creature", "monster"];

  console.log(pronoun);

  for (let i = 0; i < pronoun.length; i++) {
    console.log(pronoun[i]);
  }

  for (let j = 0; j < adj.length; j++) {
    console.log(adj[j]);
  }
  for (let k = 0; k < noun.length; k++) {
    console.log(noun[k]);
  }
};
console.log(` index i : ${i} \n index j : ${j} \n index k : ${k}`);

