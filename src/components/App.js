import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name="Marco Amador" city="Whittier, CA" color="firebrick"/>
      <About bio="Dedicated, passionate, and team-oriented problem-solver." github="https://github.com/marcoamador214" linkedin="https://www.linkedin.com/in/marco-amador-995601234/"/>
    </div>
  );
}

export default App;
