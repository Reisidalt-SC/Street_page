import "./about.scss";
import { bwPhoto } from "../../assets/images";

export default function About() {
  return (
    <section id="about" className="about_section">
      <div className="about_title">
        <h1>
          SOBRE A <strong>STREET</strong>
        </h1>
      </div>
      <div className="img_container">
        <img src={bwPhoto} alt="Foto em preto e branco de um evento cultural" />
      </div>
      <div className="about_content">
        <h2>
          Mais do que produção,
          <br />
          <strong>somos movimento cultural</strong>
        </h2>
        <div className="about_paragraphs">
          <p>
            Fundada por criadores que respiram cultura urbana, a STREET nasceu
            da necessidade de dar voz e visibilidade às expressões artísticas
            que moldam nossa identidade.
          </p>
          <p>
            Acreditamos que cada evento, cada frame, cada experiência criada tem
            o poder de conectar pessoas e transformar espaços em territórios de
            pertencimento e celebração.
          </p>
          <p>
            Nossa equipe multidisciplinar une expertise técnica com
            sensibilidade cultural, garantindo que cada projeto seja executado
            com excelência profissional sem perder a essência criativa.
          </p>
        </div>
        <div className="data_grid">
          <div className="data_field">
            <strong>50+</strong>
            <p>Projetos</p>
          </div>
          <div className="data_field">
            <strong>15+</strong>
            <p>Parceiros</p>
          </div>
          <div className="data_field">
            <strong>8K+</strong>
            <p>Pessoas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
