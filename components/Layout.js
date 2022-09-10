import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import imagen from '../public/nostradamus.jpg';
import st from '../styles/layout.module.css';
export default function Layout({ children }) {
  const router = useRouter();
  const url = `https://nostradamus-unofficial.netlify.app${router.route}`;
  return (
    <div className={st.messi}>
      <Head>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content="../public/nostradamus.jpg" />
        <meta property="og:url" content={url} />
        <link rel="icon" href="/favicon1.ico" />
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

      {router.route === '/' ? (
        ''
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
