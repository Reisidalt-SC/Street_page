import "./products.scss";

export default function Products() {
  return (
    <section id="services" className="services_section">
      <div className="services_title">
        <h1>
          ÁREAS DE <strong>ATUAÇÃO</strong>
        </h1>
        <span>Serviços integrados para criar projetos culturais completos</span>
      </div>
      <div className="services_grid">
        <div className="service_field">
          <div className="service_icon">
            <i className="bi bi-calendar3-event"></i>
          </div>
          <div className="service_text">
            <h2>PRODUÇÃO DE EVENTOS</h2>
            <p>
              Shows, festivais e experiências culturais urbanas com planejamento
              estratégico e execução impecável
            </p>
          </div>
          <div className="service_tags">
            <span>Festivais</span>
            <span>Shows</span>
            <span>Lançamentos</span>
            <span>Ocupações</span>
          </div>
        </div>
        <div className="service_field">
          <div className="service_icon">
            <i className="bi bi-camera-video"></i>
          </div>
          <div className="service_text">
            <h2>DIREÇÃO AUDIOVISUAL</h2>
            <p>
              Criação de conteúdo autoral: documentários, videoclipes, registros e narrativas visuais impactantes
            </p>
          </div>
          <div className="service_tags">
            <span>Documentários</span>
            <span>Videoclipes</span>
            <span>Comerciais</span>
            <span>Registros</span>
          </div>
        </div>
        <div className="service_field">
          <div className="service_icon">
            <i className="bi bi-lightbulb-fill"></i>
          </div>
          <div className="service_text">
            <h2>CURADORIA ARTÍSTICA</h2>
            <p>
              Seleção e direção criativa de artistas, experiências e projetos com identidade cultural forte
            </p>
          </div>
          <div className="service_tags">
            <span>Programação</span>
            <span>Direção</span>
            <span>Consultoria</span>
            <span>Pesquisa</span>
          </div>
        </div>
        <div className="service_field">
          <div className="service_icon">
            <i className="bi bi-people"></i>
          </div>
          <div className="service_text">
            <h2>EXPERIÊNCIAS IMERSIVAS</h2>
            <p>
              Projetos únicos que mesclam arte, tecnologia e interação para criar memórias coletivas
            </p>
          </div>
          <div className="service_tags">
            <span>Instalações</span>
            <span>Intervenções</span>
            <span>Performances</span>
            <span>Workshops</span>
          </div>
        </div>
      </div>
      <div className="services_contact">
        <span>Cada projeto é único. Vamos conversar sobre o seu?</span>
        <button>FALE CONOSCO</button>
      </div>
    </section>
  );
}
