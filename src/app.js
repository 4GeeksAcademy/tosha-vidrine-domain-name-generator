/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "my"];
  let adj = ["hairy", "spiked"];
  let noun = ["creature", "monster"];
  let domainNameList = [];
  console.log(pronoun);
  let element = document.querySelector(".list");
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domainNameList.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  for (let i = 0; i < domainNameList.length; i++) {
    element.innerHTML += "<div>" + domainNameList[i] + "</div>";
  }
};
