import S from "./doados.module.scss";
import livros from "../../assets/livros.png";

export default function Doados() {
  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>
      <section className={S.boxcard}>
        <article className={S.boxTeste}>
          <img src={livros} alt="" />
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
      </section>
    </section>
  );
}
