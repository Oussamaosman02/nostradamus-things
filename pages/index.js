import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nostradamus</title>
        <meta
          name="description"
          content="¿Quieres saber quien es y que predicciones hizo Nostradamus para cada año?Entonces no te puedes perder nuestra página"
        />
        <meta property="og:title" content="Predicciones de Nostradamus" />
        <meta
          property="og:description"
          content="¿Quieres saber que predicciones hizo Nostradamus para cada año?"
        />
        <meta property="og:site_name" content="Nostradamus" />
      </Head>
      <h1>Predicciones para cada Año</h1>
      <ul>
        <li>
          <Link href="/2015">
            <a>2015</a>
          </Link>
        </li>
        <li>
          <Link href="/2016">
            <a>2016</a>
          </Link>
        </li>
        <li>
          <Link href="/2017">
            <a>2017</a>
          </Link>
        </li>
        <li>
          <Link href="/2018">
            <a>2018</a>
          </Link>
        </li>
        <li>
          <Link href="/2019">
            <a>2019</a>
          </Link>
        </li>
        <li>
          <Link href="/2020">
            <a>2020</a>
          </Link>
        </li>
        <li>
          <Link href="/2021">
            <a>2021</a>
          </Link>
        </li>
        <li>
          <Link href="/2022">
            <a>2022</a>
          </Link>
        </li>
      </ul>
      <h2>¿Quién?</h2>
      <p>
        Michel de Nôtre-Dame(1566) también llamado Michel Nostradame, usualmente
        latinizado como Nostradamus, fue un boticario francés y supuesto
        adivino, más conocido por su libro Les Prophéties (en español, Las
        Profecías), una colección de 942 cuartetas poéticas que supuestamente
        predicen eventos futuros. El libro se publicó por primera vez en 1555.
      </p>
      <h2>Las profecías</h2>
      <p>
        Hubo biografías de Nostradamus que afirman que temía ser perseguido de
        herejía por la Inquisición, ya que muchos otros, quienes habían
        publicado ideas polémicas en aquellos tiempos, habían sido llevados a
        juicio. Según algunos «intérpretes» de Nostradamus, por esta razón
        decidió volver sus cuartetas extremadamente crípticas, con omisiones de
        palabras clarificadoras que tal vez servían para respetar la métrica de
        la poesía, con alusiones, con autorreferencia a otras partes de la
        profecía, con frases enigmáticas, con apócopes, metátesis y breves
        anagramas. Las cuartetas están cargadas de metáforas y de palabras
        griegas y latinas empleadas en un modo muy particular de Nostradamus.
        Probablemente debido a la oscuridad de sus cuartetas proféticas, estas
        han perdurado por siglos y han sido a menudo interpretadas de manera
        distinta por diferentes escritores a lo largo de los años. Muchos libros
        han sido escritos basándose en estas varias interpretaciones, a pesar de
        que las diversas «lecturas» de su material han variado de una
        publicación a otra.
      </p>
      <h2>Técnica</h2>
      <p>
        Usó una técnica de Branchus, el profeta délfico de Grecia, que consistía
        en sentarse sobre un trípode de bronce y contemplar el interior de un
        cuenco de bronce lleno con agua, varios aceites y especias.
      </p>
      <blockquote>
        He vaciado toda mi alma, cerebro y corazón de toda preocupación y he
        logrado un estado de tranquilidad y quietud de la mente, los cuales son
        requisitos para predecir a través del trípode de bronce.
      </blockquote>
    </div>
  );
}
