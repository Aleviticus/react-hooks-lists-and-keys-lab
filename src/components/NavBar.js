import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksElement = links.map((links) => {
    return <a href={{links}}>{links}</a>
  })

  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
    </nav>
  )
}

export default NavBar;
