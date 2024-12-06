import face from "../../assets/face.png";
import insta from "../../assets/insta.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/Twitter.png";
import linkedin from "../../assets/linkedin.png";
import S from "./footer.module.scss";

export default function footer() {
  return (
    <footer>
      <section className={S.boxSocial}>
        <h3>4002-0922</h3>
        <nav>
          <a href="">
            <img className={S.Social} src={face} alt="imagem do facebook" />{" "}
          </a>
          <a href="">
            <img className={S.Social} src={twitter} alt="imagem do twitter" />{" "}
          </a>
          <a href="">
            <img className={S.Social} src={youtube} alt="imagem do youtube" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/caio-souza-2bb1592b7/">
            <img className={S.Social} src={linkedin} alt="imagem do linkedin" />{" "}
          </a>
          <a href="https://www.instagram.com/eo_caiov/profilecard/?igsh=YTJzanI2bXFzdnNr">
            <img className={S.Social} src={insta} alt="imagem do instagram" />
          </a>
        </nav>
      </section>
      <section className={S.boxEnd}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos- 2024</p>
      </section>
    </footer>
  );
}
