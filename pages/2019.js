import s from "../styles/years.module.css";
import Head from "next/head";

import Image from "next/image";

import california from "../public/assets/california-nostradamus.webp";
import estromboli from "../public/assets/estromboli-nostradamus.webp";

export default function dosdiecinueve() {
  return (
    <>
      <Head>
        <title>Nostradamus para 2019</title>
        <meta
          name="description"
          content="¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2019? Entonces no te puedes perder nuestra página"
        />
        <meta property="og:title" content="Predicciones de Nostradamus 2019" />
        <meta
          property="og:description"
          content="¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2019?"
        />
        <meta property="og:site_name" content="Nostradamus para 2019" />
      </Head>
      <h1 className={s.h}>Predicciones para 2019</h1>
      <div className={s.cont}>
        <ol>
          <li>
            En su libro, que incluye diez siglos y 942 cuartetos, Nostradamus
            supuestamente predijo que la Tercera Guerra Mundial se librará entre
            dos superpotencias a partir de 2019, y podría durar 27 años
            <span className={s.amb}></span>
          </li>
          <li>
            El astrólogo francés también predijo el aumento del terrorismo en
            Europa y del extremismo religioso en el Medio Oriente.
            <span className={s.noact}></span>
          </li>
          <li>
            Y aunque los líderes políticos llegarán a acuerdos para encontrar
            soluciones para el cambio climático, eso no podrá detener un
            terremoto destructivo que afectará a California y la isla de
            Vancouver en Canadá.
            <span className={s.noact}></span>
          </li>
          <li>
            la erupción del Vesubio, uno de los volcanes dormidos más
            importantes del mundo, transformarían por completo el planeta, con
            unas catástrofes que afectarían a toda la Tierra, según Nostradamus.
            <span className={s.noact}></span>
          </li>
          <li>
            Un desastre natural que afectará a la Tierra vendrá del espacio
            exterior, con una lluvia de meteoritos que impactará en el planeta
            provocando terremotos y tsunamis.
            <span className={s.noact}></span>
          </li>
          <li>
            &quot;Los cerdos se convertirán en hermanos del hombre&quot;.Puede
            que Nostradamus se refería aquí más al auge del movimiento vegano
            que a platicar con el ganado porcino o la animalada en general, pero
            si algún experto afirma esto, así sea, ya hay quien le da un beso en
            la frente y se despide de sus mascotas antes de irse a dormir
            <span className={s.amb}></span>
          </li>
        </ol>
      </div>
      <h2 className={s.h}>Noticias destacadas y relacionadas</h2>
      <div className={s.cont}>
        <ul>
          <li>
            <b>Perseidas 2019: lluvia de estrellas en verano</b>Las Perseidas
            son la lluvia de estrellas favorita de los aficionados a la
            astronomía, ya que se produce durante los días de verano, cuando el
            clima y las vacaciones hacen que sea más fácil observarlas. Fieles a
            su cita, las Perseidas nos traerán gran cantidad de estrellas
            fugaces durante las noches del 9 al 15 de agosto. Pero no hace falta
            esperar hasta esa fecha, las Perseidas 2019 comienzan a dejarse ver
            desde mediados de julio y hasta finales de agosto.
            <br />
            <b>
              Gemínidas 2019: cuándo ver la última gran lluvia de estrellas del
              año
            </b>
            Las noches del 13 y 14 de diciembre se podrá disfrutar al máximo de
            la lluvia de estrellas de las Gemínidas, un evento que será
            retransmitido en directo desde el Observatorio del Teide a través
            del canal sky-live.tv, con la colaboración del proyecto europeo
            EELabs, según ha informado el Instituto de Astrofísica de Canarias
            (IAC). EL PAÍS también ofrecerá esta señal en directo.Las Gemínidas
            son, junto a las Perseidas, las mayores lluvias de estrellas del
            año. De hecho, la actividad de los últimos diez años siempre ha
            superado 100 meteoros por hora, colocándola en el primer puesto del
            ranking anual de lluvias de estrellas.
          </li>
          <li>
            <div>
              <Image
                src={california}
                width={600}
                height={337}
                alt="Un fuerte terremoto de magnitud 7,1 vuelve a sacudir el sur de
                California"
                layout="responsive"
                placeholder="blur"
              />
            </div>
            <b>
              Un fuerte terremoto de magnitud 7,1 vuelve a sacudir el sur de
              California
            </b>
            La sacudida forma parte de la secuencia iniciada el jueves y se ha
            sentido con fuerza en Los Ángeles y Las Vegas. Es el mayor terremoto
            en la región en 20 años
          </li>
          <li>
            <div>
              <Image
                src={estromboli}
                width={449}
                height={220}
                alt="La erupción del volcán Estrómboli"
                layout="responsive"
                placeholder="blur"
              />
            </div>
            <b>La erupción del volcán Estrómboli</b>Además un volcán situado en
            el oriente de Rusia, y que se creía extinto hasta hace poco, ha
            despertado. Se trata del Bolshaya Udina, que según los expertos
            amenaza ahora con producir una erupción similar a la ocurrida en
            Pompeya con el Monte Vesubio en el 79 a. C. Más cerca de este
            último, a menos de 300 en línea recta, este miércoles por la tarde
            se produjeron también en Italia una serie de violentas explosiones
            en el volcán Estrómboli , situado en la isla del mismo nombre, al
            nordeste de Sicilia. La columna de humo y cenizas alcanzó los dos
            kilómetros de altura, con lapilli o pequeñas piedras de diversos
            tamaños en su interior, produciendo nube ardiente que, al caer sobre
            la tierra, causó diversos incendios, un muerto y varios heridos.
          </li>
          <li>
            <b>El terrorismo en cifras en 2019</b>El número total de muertes por
            terrorismo ha caído en el último año. Por primera vez desde 2013,
            Daesh no es el grupo terrorista más letal. MENA es la región con más
            muertes por terrorismo, aunque desciende el número en Irak y aumenta
            en Afganistán{" "}
          </li>
          <li>
            <b>
              Millones de personas en el este de Ucrania sufren las heridas
              invisibles de la guerra
            </b>
            Tras cinco años de conflicto, los organismos de socorro se esfuerzan
            por atender las necesidades de salud mental de las personas
            afectadas.Desde el año 2014 se libra un conflicto en el Este de
            Ucrania. Desde esa fecha se crearon dos repúblicas separatistas, dos
            entidades prorrusas que en la actualidad cuentan con instituciones
            políticas y un Ejército. Volodímir Zelenski, el electo presidente de
            Ucrania, se ha comprometido con ponerle fin a la guerra. Sin
            embargo, en la autoproclamada república de Donetsk el discurso
            prorruso y antiucraniano busca impactar a los jóvenes
          </li>
        </ul>
      </div>
    </>
  );
}
