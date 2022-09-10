import s from '../styles/years.module.css';
import Head from 'next/head';

export default function dosveintidos() {
  return (
    <>
      <Head>
        <title>Nostradamus para 2022</title>
        <meta
          name="description"
          content="¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el 2022? Entonces no te puedes perder nuestra página"
        />
        <meta property="og:title" content="Predicciones de Nostradamus 2022" />
        <meta
          property="og:description"
          content="¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el 2022?"
        />
        <meta property="og:site_name" content="Nostradamus para 2022" />
      </Head>
      <h1 className={s.h}>Predicciones para 2022</h1>
      <div className={s.cont}>
        <ol>
          <li>
            {' '}
            «Templos sagrados del tiempo romano rechazarán los cimientos de su
            fundación»
            <span className={s.act}></span>
          </li>
          <li>
            “La muerte repentina del primer personaje, será cambiado y pondrán a
            otro en su reino”
            <span className={s.act}></span>
          </li>
          <li>
            “Como el sol, la cabeza sellará el mar resplandeciente, los peces
            vivos del Mar Negro casi hervirán”
            <span className={s.amb}></span>
          </li>
          <li>
            “Bajo el clima babilónico opuesto, grande será sin derramamiento”
            &quot;Por 40 años no se verá el arcoíris; por 40 años será visto
            todos los días; la tierra seca se volverá más árida; y habrá grandes
            inundaciones donde se vean&quot;. Los intérpretes de los textos de
            Nostradamus han llegado a la conclusión de que esta frase se refiere
            a uno de los grandes problemas del mundo en los últimos años: el
            cambio climático, que provocará desastres naturales, hambre, escasez
            de agua y hará estallar una guerra entre dos países por lograr su
            supervivencia.
            <span className={s.act}></span>
          </li>
          <li>
            “Alrededor de la Gran Ciudad, habrá soldados alojados en campos y
            suburbios”
            <span className={s.act}></span>
          </li>
          <li>
            &quot;La miel costará mucho más que la cera de las velas; tan alto
            el precio del trigo&quot;
            <span className={s.act}></span>
          </li>
        </ol>
      </div>
      <h2 className={s.h}>Noticias destacadas y relacionadas</h2>
      <div className={s.cont}>
        <ul>
          <li>
            <b>Muere la reina Isabel II de Inglaterra</b>La reina Isabel II
            murió ayer 8 de septiembre de 2022 a los 96 años de edad y después
            de 70 ejerciendo como monarca regente
          </li>
          <li>
            <b>
              Rusa invade Ucrania: el asedio ruso a Kiev y Járkiv, las dos
              ciudades más grandes de Ucrania
            </b>
            La invasión de Rusia ha llegado a las principales ciudades
            ucranianas. Los bombardeos nocturnos sobre Kiev y otras ciudades
            importantes ha dado paso a los primeros intentos de las tropas rusas
            de tomar los centros urbanos.La ofensiva rusa llegó a Járkiv, la
            segunda ciudad más grande del país, este domingo. Sin embargo, el
            gobernador de la región aclaró que habían recuperado el control de
            la ciudad.
          </li>
          <li>
            <b>
              El precio del trigo se dispara por una decisión de la India y
              provoca una conmoción mundial
            </b>
            India, segundo mayor productor mundial de trigo, prohibe la
            exportación del grano y se auguran nuevas subidas del precio de la
            pasta y el pan.La cotización del trigo, disparada desde la guerra en
            Ucrania, volvió a batir un récord este lunes en el mercado europeo,
            tras el anuncio de India de suspender sus exportaciones de este
            cereal. La tonelada de trigo para panificación alcanzó los 438,25
            euros por tonelada al cierre del Euronext el lunes, un récord para
            este grano que se negocia ya a precio de oro en el mercado mundial.
            En la apertura había llegado hasta 435 euros.
          </li>
          <li>
            <b>
              El impacto de las sequías y las inundaciones sigue aumentando
              trágicamente en todo el mundo
            </b>
            La gestión del riesgo ha reducido la vulnerabilidad a las
            inundaciones y las sequías a escala mundial, pero su impacto aún
            está en aumento en todo el planeta, según un estudio publicado en la
            revista Nature (3 de agosto) en el que ha participado la
            investigadora María del Carmen Llasat, catedrática de Física de la
            Atmósfera en la Facultad de Física y miembro del Instituto de
            Investigación del Agua (IdRA) de la Universidad de Barcelona
            (UB).Esta intensificación del impacto de los fenómenos naturales es
            particularmente notable cuando el segundo episodio -lluvias,
            inundaciones o sequía- que afecta a una misma región presenta un
            mayor grado de peligrosidad -más intensidad y magnitud- que el
            primer caso registrado anteriormente
          </li>
          <li>
            <b>
              Ucrania se niega a &quot;rendirse&quot; ante Putin mientras la
              crisis humanitaria en Mariúpol se vuelve dramática
            </b>
            Fracasa la negociación entre Rusia y Ucrania en Turquía: &quot;Nos
            piden la rendición y eso no es aceptable&quot;.Vladimir Putin parece
            tener claro su plan y nadie le va a sacar de él. O al menos eso
            parece. La vía diplomática con Rusia está completamente estancada y
            así se vio este jueves en el encuentro de alto nivel entre el
            ministro de Exteriores ruso, Sergei Lavrov, y su homólogo ucraniano,
            Dymitro Kuleba, en Turquía. Se resolvió sin avances porque Ucrania
            se niega a &quot;firmar una rendición&quot; y Moscú sigue viviendo
            en un universo paralelo en el que, en palabras de Lavrov, no está
            &quot;invadiendo&quot; el país vecino.
          </li>
        </ul>
      </div>
    </>
  );
}
