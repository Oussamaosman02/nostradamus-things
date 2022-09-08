import Image from "next/image";
import st from "../styles/layout.module.css";
export default function Layout({ children }) {
  return (
    <div className={st.messi}>
      <header className={st.header}>
        <div>
          <Image
            src="/nostradamus.jpg"
            width={833}
            alt="nostradamus"
            height={1024}
            layout="responsive"
          />
        </div>
        <h1>Nostradamus</h1>
      </header>
      <main className={st.main}>{children}</main>
    </div>
  );
}
