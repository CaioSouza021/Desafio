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
            <img className={S.Social} src={face} alt="" />{" "}
          </a>
          <a href="">
            <img className={S.Social} src={twitter} alt="" />{" "}
          </a>
          <a href="">
            <img className={S.Social} src={youtube} alt="" />{" "}
          </a>
          <a href="">
            <img className={S.Social} src={linkedin} alt="" />{" "}
          </a>
          <a href="">
            <img className={S.Social} src={insta} alt="" />
          </a>
        </nav>
      </section>
      <section className={S.boxEnd}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos- 2024</p>
      </section>
    </footer>
  );
}
