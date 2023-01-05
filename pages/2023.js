import s from '../styles/years.module.css'
import Head from 'next/head'

// import Image from "next/image";

export default function dosveintitres () {
  return (
    <>
      <Head>
        <title>Nostradamus para 2023</title>
        <meta
          name='description'
          content='¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2023? Entonces no te puedes perder nuestra web'
        />
        <meta property='og:title' content='Predicciones de Nostradamus 2023' />
        <meta
          property='og:description'
          content='¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2023?'
        />
        <meta property='og:site_name' content='Nostradamus para 2023' />
      </Head>
      <h1 className={s.h}>Predicciones para 2023</h1>
      <div className={s.cont}>
        <ol>
          <li>
            "No abades, monjes, novicios para aprender; La miel costará mucho más que
            la cera de las velas. Tan alto el precio del trigo, ese hombre está agitado.
            Su prójimo para comer en su desesperación". Esta frase aventura que la crisis
            de inflación seguirá vigente durante el año, aunque la referencia al canibalismo
            puede indicar que se puede agudizar.
            <span className={s.amb} />
          </li>
          <li>
            "Siete meses de gran guerra, gente muerta por el mal. Rouen, Evreux no caerá ante el Rey"
            <span className={s.amb} />
          </li>
          <li>
            “fuego celestial cuando se apagaran las luces de Marte”
            <span className={s.amb} />
          </li>
          <li>
            "La tierra seca se resecará más y habrá grandes inundaciones cuando se vea el arco iris.
            Durante cuarenta años no aparecerá el arco iris. Durante cuarenta años se verá todos los
            días. La tierra seca se volverá más seca y se verán grandes inundaciones"
            <span className={s.amb} />
          </li>
          <li>
            Inestabilidad y conflictos sociales en Estados Unidos,
            en un año en el que se produciría un “nuevo orden mundial”, en el que un hombre y una
            mujer trabajarían juntos para mejorar la situación del planeta.
            <span className={s.amb} />
          </li>
          <li>
            Podría ser el año en el que el Papa Francisco dejara el cargo y que sería
            sustituido por un personaje oscuro y peligroso, que podría provocar una
            guerra religiosa que afectaría al mundo entero.
            <span className={s.amb} />
          </li>
        </ol>
      </div>
      <h2 className={s.h}>Noticias destacadas y relacionadas</h2>
      <div className={s.cont}>
        <ul />
      </div>
    </>
  )
}
