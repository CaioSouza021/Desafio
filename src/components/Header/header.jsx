import Logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../Pages/Inicio/Inicio";
import Doados from "../../Pages/Doados/Doados";
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";
import S from "./header.module.scss";

export default function header() {
  return (
    <BrowserRouter>
      <header className={S.header1}>
        <section className={S.boxLogo}>
          <img src={Logo} alt="" />
          <h1 className={S.titulo}>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
          <ul>
            <li>
              {" "}
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/Doados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/QueroDoar">Quero Doar</Link>{" "}
            </li>
          </ul>
        </nav>
        <div className={S.boxInput}>
          <input type="text" placeholder="" />
          <img src={search} alt="" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/QueroDoar" element={<QueroDoar />} />
        <Route path="/Doados" element={<Doados />} />
      </Routes>

      <main></main>
    </BrowserRouter>
  );
}
