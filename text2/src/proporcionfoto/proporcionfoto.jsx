import React, { useEffect, useState } from "react";
// ------------------3 : 4 -------------------
import uno34 from "./imagenes/34/1.jpg";
import dos34 from "./imagenes/34/2.jpg";
import tres34 from "./imagenes/34/3.jpg";
import cuatro34 from "./imagenes/34/4.jpg";
// --------------- 4: 3 ------------------------
import cinco43 from "./imagenes/43/5.jpg";
import seis43 from "./imagenes/43/6.jpg";
import siete43 from "./imagenes/43/7.jpg";
import ocho43 from "./imagenes/43/8.jpg";

/** 
suma.addEventLinstener (
  "click", ()=>{
mostrador.value= parseInt(mostrador.value)+1;
}
);*/


function Proporcionfoto() {
  const [new34W, setNew34W] = useState();
  const [new43W, setNew43W] = useState();
  const [newH, setNewH] = useState();

  let imagen134 = new Image();
  imagen134.src = uno34;
  console.log("url img imagen134.src:  ", imagen134.src);

  let imagen443 = new Image();
  imagen443.src = "./imagenes/43/4.jpg";
  console.log(" url imagen443.src: ", imagen134.src);

  useEffect(() => {
    const valores = () => {
      let anchoWeightPage = window.screen.width;
      let n = 4;
      /** let new34W = (16/9)* imagen134.naturalWidth;*/
      let _new43W = (16 / 25) * (anchoWeightPage / n);
      let _newH = (3 / 4) * _new34W;
      let _new34W = (3 / 4) * _newH;
      setNewH(_newH);
      setNew43W(_new43W);
      setNew34W(_new34W);
      console.log(
        " anchura: ",
        anchoWeightPage,
        imagen134.naturalHeight,
        imagen134.naturalWidth
      );
      console.log(
        "Nova medida new43W: ",
        _new43W,
        "Nova medida newH",
        _newH,
        "Nova medida new34W: ",
        _new34W
      );
      // console.log ('Medida para 4/3: ', imagen443.naturalwidth, imagen443.naturallHeight);
    };
    valores();
  }, []);

  return (
    <div className="proba">
      <img src={uno34} height={newH} width={new34W} />;
      <img src={dos34} height={newH} width={new34W} />;
      <img src={tres34} height={newH} width={new34W} />;
      <img src={cuatro34} height={newH} width={new34W} />;
      <img src={cinco43} height={newH} width={new43W} />;
      <img src={seis43} height={newH} width={new43W} />;
      <img src={siete43} height={newH} width={new43W} />;
      <img src={ocho43} height={newH} width={new43W} />;
    </div>
  );
}
export default Proporcionfoto;

