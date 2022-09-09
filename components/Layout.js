import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import st from "../styles/layout.module.css";
export default function Layout({ children }) {
  const router = useRouter();
  console.log(router);
  return (
    <div className={st.messi}>
      <Link href="/">
        <header className={st.header}>
          <div>
            <Image
              priority
              src="/nostradamus.jpg"
              width={833}
              alt="nostradamus"
              height={1024}
              layout="responsive"
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
