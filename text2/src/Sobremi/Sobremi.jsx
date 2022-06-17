import React from "react";
import styled from "styled-components";
import Yo from "./yo.jpg";
import Yop from "./yop.jpg";
import YoPeru from "./yoperu.jpg";

const General = styled.body`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 98%;
  text-align: justify;
  background-color: #b5b0b0;
`;

const Foto1 = styled.img`
width: 20%;
border-radius: 5px;
margin: 45px;
`;
const Foto2 = styled.img`
width: 17%;border-radius: 5px;
margin: 45px;
`;
const Fotos3 = styled.img`
width: 35%;
border-radius: 5px;
margin:45px;
`;
const Texto = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;

const Sobremi = () => {
  return (
    <>
      <General>
      <header>
        <Foto1 src={Yo} />
        <Fotos3 src={YoPeru} />
        <Foto2 src={Yop} />
      </header>
      <Texto> 
      <article>
          <h1> Mi Relación con la fotografía </h1>
          <p>
            En mi opinión, el respeto por la naturaleza es algo que debe
            prevalecer sobre cualquier actividad que realicemos. Nuestra
            relación con ella debe ser sutil, intuitiva, amable. Por ello
            entiendo que muchos de los códigos éticos que circulan en nuestros
            ámbitos fotográficos y conservacionistas abordan posiciones
            evidentes y, desde luego, básicas.
          </p>
          <p>
            El respeto por la vida debe guiar nuestros pasos. Debemos ser
            sensitivos ante seres con los que compartimos el espacio vital y que
            tienen tanto derecho como nosotros a ocuparlo. Desde luego que la
            ética es algo muy personal y debemos estar absolutamente convencidos
            de cuanto hacemos, nadie es quien para decirnos lo que está bien o
            mal, especialmente en un mundo en el que el respeto por la
            naturaleza se ve continuamente vulnerado por intereses económicos.
            Sin embargo, las posiciones personales son fundamentales para ser
            contrapuestas a aquellas que nos superan.
          </p>
          <p>
            Creo que nuestros posicionamientos éticos deben ser maduros,
            comprensivos, aunque firmes en nuestros propios actos. Somos parte
            de la naturaleza, una especie más que interactúa a niveles de
            depredación, molestias, transformación del hábitat, etc, con las
            demás, sólo que nuestra percepción es mucho mayor que la de otros
            seres vivos, así como nuestro poder tecnológico. Por ello debemos
            ser responsables de nuestros actos y velar por el mundo que nos
            rodea.
          </p>
        </article>
        <article>
          <h2> Ética </h2>
          <p>
            En mi opinión, el respeto por la naturaleza es algo que debe
            prevalecer sobre cualquier actividad que realicemos. Nuestra
            relación con ella debe ser sutil, intuitiva, amable. Por ello
            entiendo que muchos de los códigos éticos que circulan en nuestros
            ámbitos fotográficos y conservacionistas abordan posiciones
            evidentes y, desde luego, básicas.
          </p>

          <p>
            El respeto por la vida debe guiar nuestros pasos. Debemos ser
            sensitivos ante seres con los que compartimos el espacio vital y que
            tienen tanto derecho como nosotros a ocuparlo. Desde luego que la
            ética es algo muy personal y debemos estar absolutamente convencidos
            de cuanto hacemos, nadie es quien para decirnos lo que está bien o
            mal, especialmente en un mundo en el que el respeto por la
            naturaleza se ve continuamente vulnerado por intereses económicos.
            Sin embargo, las posiciones personales son fundamentales para ser
            contrapuestas a aquellas que nos superan.
          </p>

          <p>
            Creo que nuestros posicionamientos éticos deben ser maduros,
            comprensivos, aunque firmes en nuestros propios actos. Somos parte
            de la naturaleza, una especie más que interactúa a niveles de
            depredación, molestias, transformación del hábitat, etc, con las
            demás, sólo que nuestra percepción es mucho mayor que la de otros
            seres vivos, así como nuestro poder tecnológico. Por ello debemos
            ser responsables de nuestros actos y velar por el mundo que nos
            rodea.
          </p>

          <p>
            La Asociación de Fotógrafos de Naturaleza (AEFONA), sintetiza en
            quince puntos un código ético que cuenta con el apoyo de entidades
            conservacionistas como WWF, Greenpeace, SEO/BirdLife, CODA y APIA.
          </p>
        </article>
        <article>
          <h2> Código Ético </h2>
          <p>
            1-El fotógrafo de la naturaleza debe reflejar fielmente las
            situaciones naturales y evitar sufrimientos, perturbaciones o
            interferencias en el comportamiento de los seres vivos, teniendo
            como principal lema que la seguridad del sujeto debe primar sobre la
            obtención de una imagen. En el caso de fotografiar especies animales
            en cautividad, privadas temporalmente de libertad, manejadas o
            cultivadas, en caso de plantas, debe especificarlo.
          </p>

          <p>
            2-El conocimiento amortigua los impactos. El fotógrafo de naturaleza
            no solo debe aprender las técnicas necesarias, sino que debiera
            esforzarse por documentarse y conocer el comportamiento, biología y
            requerimientos de la especie. Buscar el apoyo de personas
            experimentadas y perfeccionarse en este conocimiento debiera ser
            vocación de todo fotógrafo de la naturaleza.
          </p>

          <p>
            3-Debemos dar ejemplo con nuestras actitudes. El fotógrafo debe
            obtener los permisos pertinentes, especialmente en el caso de
            especies protegidas, y conocer la normativa de los espacios
            naturales, especialmente en las áreas protegidas donde se desarrolle
            nuestra actividad. Asimismo resulta recomendable colaborar con la
            guardería local.
          </p>

          <p>
            4-El respeto y la conservación de la integridad del paisaje y su
            valores patrimoniales (patrimonio arqueológico, formaciones
            geológicas, elementos minerales, etc) debe prevalecer sobre la
            práctica de la fotografía. Se evitará cualquier alteración o
            manipulación irreversible. No debemos dejar ningún tipo de residuo
            en la naturaleza. Las plantas también son seres vivos, que merecen
            toda nuestra consideración. Siempre es mejor apartar o sujetar
            ramas, que cortarlas o arrancarlas, aunque se trate de especies
            comunes. La vida es tan valiosa en especies escasas como en especies
            comunes. La ocultación de escondites y observatorios debe hacerse
            con ramas secas, balas de paja, materiales inorgánicos…
          </p>

          <p>
            5-Una perturbación específica a evitar es la excesiva proximidad al
            sujeto, que produce estrés, intimidación, modificaciones de la
            actividad y, sobre todo, habituación a la presencia humana. El uso
            de reclamos sonoros con cantos de aves está especialmente
            desaconsejado en época de cría, por el impacto negativo que tiene
            sobre la avifauna. El fotógrafo experimentado debe aprender a
            reconocer los indicios de estrés y evitarlos.
          </p>

          <p>
            6-Hay que prestar una especial atención en las circunstancias en las
            que los seres vivos pueden ser más vulnerables, como en época de
            nidificación, de muda del plumaje o ante condiciones meteorológicas
            desfavorables. Se desaconseja la fotografía de aves en sus nidos. La
            alteración del entorno de un nido y la presencia visible del
            fotógrafo o su equipo puede llamar la atención de otras personas o
            depredadores sobre el sujeto y debe evitarse.
          </p>

          <p>
            7-No es aconsejable alimentar a la fauna salvaje para la realización
            de actividades fotográficas, ya que puede crear notables
            alteraciones en individuos y poblaciones, introducir enfermedades y
            ocasionar accidentes o comportamientos no naturales. El uso de
            animales utilizados como cebos vivos, con su capacidad de escape
            limitada, es una práctica considerada como poco ética y que debe ser
            informada por el autor en la imagen.
          </p>

          <p>
            8-No es práctica recomendable extraer ejemplares de su hábitat o
            trasladarlos del lugar o circunstancias en las que se encuentren
            para tomar imágenes en otro lugar despejado o, incluso en estudio o
            terrario, ya que se produce estrés, se pone en peligro al animal y,
            además, no se documentan debidamente las circunstancias naturales en
            las que habita.
          </p>

          <p>
            9-Los centros especiales donde se mantienen especies animales en
            cautividad tienen una normativa precisa para los visitantes que
            debemos conocer y cumplir. Algunas iniciativas priorizan la
            actividad económica sobre su inherente función educativa o el
            bienestar de los animales; si acudimos a ellos estamos fomentando su
            explotación. En el caso de seres vivos, el autor debe expresar
            claramente en qué condiciones y contexto obtuvo la imagen y si ésta
            procede de animales en cautividad o con su libertad restringida en
            algún modo.
          </p>

          <p>
            10-La postura de los fotógrafos de naturaleza, de respeto y no
            intromisión en cualquier manifestación de la naturaleza, ha de estar
            argumentada y debiera ser objeto de divulgación a través de nuestras
            herramientas: reportajes, exposiciones, audiovisuales… Ante
            cualquier infracción o situación indeseable, incluidas las
            actuaciones al margen de la legalidad vigente que pudieran realizar
            otros fotógrafos, debemos informar a las autoridades.
          </p>

          <p>
            11-Estas son nuestras recomendaciones genéricas para nuestros
            asociados y la postura oficial de AEFONA ante las cuestiones éticas
            de nuestro trabajo en la naturaleza.
          </p>
        </article>
        </Texto>
      </General>
    </>
  );
};

export default Sobremi;
