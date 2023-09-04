import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newLInks = links.map((link) =>(
    <a key={link} href={"#" + link}>{link}</a>
  ))
  return <nav>
    {newLInks}
  </nav>;
}

export default NavBar;
