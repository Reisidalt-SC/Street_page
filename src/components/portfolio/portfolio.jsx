import "./portfolio.scss";
import { ballet, church, show, skate, resistance} from "../../assets/images";

export default function Portfolio() {
    return(
        <section id="portfolio" className="portfolio_section">
            <div className="portfolio_title">
                <h1>PORTFÓLIO</h1>
                <span>Projetos que transformam ideias em experiências culturais marcantes</span>
            </div>
            <div className="portfolio_filters">
                <button className="filter_button">TODOS</button>
                <button className="filter_button">AUDIOVISUAL</button>
                <button className="filter_button">EVENTO</button>
                <button className="filter_button">CULTURAL</button>
            </div>
            <div className="portfolio_events">
                <div className="event_card" style={{ backgroundImage: `url(${skate})` }}>
                    <div className="event_tag">
                        <span>EVENTO</span>
                        <button className="link_button"><i className="bi bi-box-arrow-up-right"></i></button>
                    </div>
                    <div className="event_info">
                        <strong>FESTIVAL URBANO 2025</strong>
                        <div className="more_info">
                            <p>3 dias de cultura, arte e música com mais de 5000 pessoas</p>
                            <span>5K+ pessoas</span>
                        </div>
                    </div>
                </div>
                <div className="event_card" style={{ backgroundImage: `url(${resistance})` }}>
                    <div className="event_tag">
                        <span>AUDIOVISUAL</span>
                        <button className="link_button"><i className="bi bi-box-arrow-up-right"></i></button>
                    </div>
                    <div className="event_info">
                        <strong>DOCUMENTÁRIO: VOZES DA RUA</strong>
                        <div className="more_info">
                            <p>Série documental sobre artistas urbanos e suas trajetórias</p>
                            <span>4 episódios</span>
                        </div>
                    </div>
                </div>
                <div className="event_card" style={{ backgroundImage: `url(${church})` }}>
                    <div className="event_tag">
                        <span>CULTURAL</span>
                        <button className="link_button"><i className="bi bi-box-arrow-up-right"></i></button>
                    </div>
                    <div className="event_info">
                        <strong>OCUPAÇÃO CULTURAL CENTRO</strong>
                        <div className="more_info">
                            <p>Intervenção artística em espaço público do centro histórico</p>
                            <span>2 semanas</span>
                        </div>
                    </div>
                </div>
                <div className="event_card" style={{ backgroundImage: `url(${show})` }}>
                    <div className="event_tag">
                        <span>EVENTO</span>
                        <button className="link_button"><i className="bi bi-box-arrow-up-right"></i></button>
                    </div>
                    <div className="event_info">
                        <strong>SHOW AO VIVO: BREAKING LIMITS</strong>
                        <div className="more_info">
                            <p>Produção completa de show com artistas nacionais</p>
                            <span>3K+ pessoas</span>
                        </div>
                    </div>
                </div>
                <div className="event_card" style={{ backgroundImage: `url(${ballet})` }}>
                    <div className="event_tag">
                        <span>CULTURAL</span>
                        <button className="link_button"><i className="bi bi-box-arrow-up-right"></i></button>
                    </div>
                    <div className="event_info">
                        <strong>COLETIVO CRIATIVO</strong>
                        <div className="more_info">
                            <p>Projeto de formação e desenvolvimento de jovens artistas</p>
                            <span>50+ jovens</span>
                        </div>
                    </div>
                </div>
                <div className="event_card" style={{ backgroundImage: `url(${show})` }}>
                    <div className="event_tag">
                        <span>AUDIOVISUAL</span>
                        <button className="link_button"><i className="bi bi-box-arrow-up-right"></i></button>
                    </div>
                    <div className="event_info">
                        <strong>EXPERIÊNCIA IMERSIVA 360°</strong>
                        <div className="more_info">
                            <p>Instalação audiovisual interativa em galeria urbana</p>
                            <span>1 mês</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more_projects">
                <span>Quer ver mais do nosso trabalho?</span>
                <button className="more_button">VER TODOS OS PROJETOS <i className="bi bi-box-arrow-up-right"></i></button>
            </div>
        </section>
    )
}