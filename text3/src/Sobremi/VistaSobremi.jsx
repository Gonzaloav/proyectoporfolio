import React from "react";
import BarrabotonesPrincipal from "../Barrabotonesprincipal";
import Sobremi from "./Sobremi";
import Yo from "./yo.jpg";
import Yop from "./yop.jpg";
import YoPeru from "./yoperu.jpg";

const VistaSobremi = () => {
  return (
    <>
      <header>
        <img src={Yo} />
        <img src={Yop} />
        <img src={YoPeru} />
      </header>
      <nav>
        <BarrabotonesPrincipal />
      </nav>
      <main>
        <Sobremi />
      </main>
    </>
  );
};

export default VistaSobremi;
