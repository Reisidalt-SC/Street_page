import "./team.scss";
import { john } from "../../assets/images";
import {jane} from "../../assets/images";
import {mary} from "../../assets/images";

export default function Team() {
  return (
    <section id="team" className="team_section">
      <div className="team_title">
        <h1>
          NOSSA <strong>EQUIPE</strong>
        </h1>
        <span>
          Profissionais apaixonados por cultura e comprometidos com excelência
        </span>
      </div>

      <div className="profiles_grid">
        <div className="profile_card">
          <div
            className="photo_container"
            style={{ backgroundImage: `url(${john})` }}
          >
            <div className="social_links">
              <button>
                <i className="bi bi-instagram"></i>
              </button>
              <button>
                <i className="bi bi-linkedin"></i>
              </button>
            </div>
          </div>
          <div className="profile_info">
            <h2>John Doe</h2>
            <strong>Diretor Criativo</strong>
            <p>10 anos de experiência em produção cultural e direção de arte</p>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="photo_container"
            style={{ backgroundImage: `url(${jane})` }}
          >
            <div className="social_links">
              <button>
                <i className="bi bi-instagram"></i>
              </button>
              <button>
                <i className="bi bi-linkedin"></i>
              </button>
            </div>
          </div>
          <div className="profile_info">
            <h2>Jane Smith</h2>
            <strong>Diretora Criativa</strong>
            <p>Especialista em narrativas urbanas e documentário</p>
          </div>
        </div>
        <div className="profile_card">
          <div
            className="photo_container"
            style={{ backgroundImage: `url(${mary})` }}
          >
            <div className="social_links">
              <button>
                <i className="bi bi-instagram"></i>
              </button>
              <button>
                <i className="bi bi-linkedin"></i>
              </button>
            </div>
          </div>
          <div className="profile_info">
            <h2>Mary Johnson</h2>
            <strong>Produtora Executiva</strong>
            <p>Gestão de projetos culturais de grande porte</p>
          </div>
        </div>
      </div>

      <div className="recruit_area">
        <h3>QUER FAZER PARTE?</h3>
        <p>
          Estamos sempre em busca de talentos que compartilhem nossa paixão por
          cultura urbana
        </p>
        <button>ENVIE SEU PORTFÓLIO</button>
      </div>
    </section>
  );
}
