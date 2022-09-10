import s from '../styles/years.module.css';
import Head from 'next/head';

export default function dosdieciocho() {
  return (
    <>
      <Head>
        <title>Nostradamus para 2018</title>
        <meta
          name="description"
          content="¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2018? Entonces no te puedes perder nuestra página"
        />
        <meta property="og:title" content="Predicciones de Nostradamus 2018" />
        <meta
          property="og:description"
          content="¿Quieres saber todas las predicciones que acertó y falló Nostradamus para el año 2018?"
        />
        <meta property="og:site_name" content="Nostradamus para 2018" />
      </Head>
      <h1 className={s.h}>Predicciones para 2018</h1>
      <div className={s.cont}>
        <ol>
          <li>
            “Sol veinte de Tauro tan fuerte tierra tiembla./ El gran teatro
            repleto arruinará./ El aire, cielo y tierra, oscurecidos y
            perturbados,/ cuando al infiel, Dios y santos, arrollarán”. Según
            los estudiosos, este fragmento haría referencia a un supuesto
            terremoto que tendría lugar en Estados Unidos.
            <span className={s.noact}></span>
          </li>
          <li>
            En la décima centuria de Nostradamus, publicada en el año 1568, se
            lee lo siguiente: “Clero Romano el año mil seiscientos y nueve,/ en
            la cumbre del año se hará elección:/ De un gris y negro de la
            Compañía salido,/ que nunca fue tan maligno”. Algunos han
            interpretado que un “rey negro” en el trono del Vaticano sería el
            último antes de que el mundo sucumba frente al Apocalipsis: “Al
            principio habrá enfermedades mortales como advertencia; luego habrá
            plagas, morirán muchos animales, habrá catástrofes, cambios
            climáticos y finalmente empezarán las guerras e invasiones del rey
            negro”. Esta profecía fue actualizada por los expertos debido al
            origen de Francisco I, de nombre secular Jorge Mario Bergoglio, pues
            el Papa, como ya se mencionó, es miembro de la Compañía de Jesús,
            más conocidos en el mundo como Jesuitas. Y desde los siglos XVI y
            XVII se ha conocido al Padre General de esta orden religiosa como el
            papa negro, debido al color de las sobrias sotanas que visten todos
            sus miembros, en contraste con la vestimenta blanca del Papa.
            <span className={s.noact}></span>
          </li>
          <li>
            Otra de las predicciones tendría qué ver con el papel de Estados
            Unidos en la política mundial como consecuencia de la ascensión de
            Donald Trump al poder. Nostradamus pronosticó una “escleroris de
            superpotencia” que, se cree, sería provocada por la corrupción
            política y las crecientes desigualdades sociales en ese país
            norteamericano
            <span className={s.noact}></span>
          </li>
          <li>
            “Una ciudad desmayada de miedo”, habría predicho que un líder
            político -“el gran aullador, sinverguenza y audaz”, tal como lo
            define en la cuarteta 81 de la Centuria III- desencadenaría una
            nueva guerra mundial que duraría 27 años. “Entrará villano,
            amenazador infame./ Tiranizando la Mesopotamia./ Todos amigos de
            adulteria dama,/ Tierra horrible, negra fisonomía”,
            <span className={s.noact}></span>
          </li>
          <li>
            Algunos investigadores de la obra de Nostradamus, finalmente, creen
            que el año 2018 también podría suponer el descubrimiento de curas
            para varias enfermedades, gracias a importantes avances en la
            medicina. Se cree que la tecnología permitiría erradicar algunos
            tipos de cánceres o incluso enfermedades incurables como el sida.
            <span className={s.amb}></span>
          </li>
        </ol>
      </div>
      <h2 className={s.h}>Noticias destacadas y relacionadas</h2>
      <div className={s.cont}>
        <ul>
          <li>
            <b>Terremoto de magnitud 7,9 sacudió el Golfo de Alaska</b>En las
            primeras horas de la mañana del martes las alarmas de emergencia
            despertaron a la comunidad de la isla de Kodiak, tras registrarse un
            sismo a 250 kilómetros de la costa de Alaska.De acuerdo con el
            Servicio Geológico de Estados Unido, el movimiento telúrico,
            inicialmente fue registrado con una magnitud de 8.2, y ocurrió a
            unos 250 km al sureste de Chiniak, Alaska, a una profundidad de 10
            km
          </li>
          <li>
            <b>
              Estados Unidos exhibió su peor nivel de corrupción en los últimos
              siete años
            </b>
            Bajo la presidencia de Donald Trump, EE.UU. cayó seis lugares hasta
            el puesto 22 a nivel mundial en el índice de percepción de la
            corrupción de 2018 que publicó Transparency International, con sede
            en Berlín. Dinamarca ocupó el primer lugar, al igual que Nueva
            Zelanda, considerados los menos corruptos en 2017.
          </li>
          <li>
            <b>La inmunoterapia del cáncer gana el Nobel de Medicina</b>La
            inmunoterapia del cáncer que ha revolucionado el tratamiento y
            mejorado el pronóstico de múltiples tumores en los últimos cinco
            años ha sido reconocida con el premio Nobel de Medicina de 2018. El
            galardón ha recaído en el estadounidense James Allison, del hospital
            M.D. Anderson de Texas, y el japonés Tasuku Honjo, de la Universidad
            de Kioto.Las investigaciones de Allison y Honjo, ambos inmunólogos,
            han abierto la vía a dirigir células inmunitarias del cuerpo humano
            contra las células tumorales. Esta estrategia ha cambiado el
            pronóstico de cánceres para los que no había tratamiento posible
            como el melanoma metastásico y, en menor medida, de cánceres renales
            y de pulmón, entre otros.
          </li>
        </ul>
      </div>
    </>
  );
}
