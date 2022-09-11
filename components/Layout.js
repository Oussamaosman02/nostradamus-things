import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import imagen from "../public/nostradamus.jpg";
import st from "../styles/layout.module.css";
export default function Layout({ children }) {
  const router = useRouter();
  const uri = "https://homosapiens.site";
  const url = `${uri}${router.route}`;
  return (
    <div className={st.messi}>
      <Head>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content={`${uri}/android-chrome-192.png`} />
        <meta property="og:image:width" content="192" />
        <meta property="og:image:height" content="192" />
        <link rel="canonical" href={url} />
        <meta
          property="og:image:secure_url"
          content={`${uri}/nostradamus.jpg`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Nostradamus" />
        <meta property="og:url" content={url} />
      </Head>
      <Link href="/">
        <header className={st.header}>
          <div>
            <Image
              priority
              src={imagen}
              width={833}
              alt="nostradamus"
              height={1024}
              layout="responsive"
              placeholder="blur"
            />
          </div>
          <h1>Nostradamus</h1>
        </header>
      </Link>

      {router.route === "/" ? (
        ""
      ) : (
        <nav className={st.nav}>
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
        </nav>
      )}

      <main className={st.main}>{children}</main>
    </div>
  );
}
