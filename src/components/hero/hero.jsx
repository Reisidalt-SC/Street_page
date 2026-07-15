import "./hero.scss";

export default function Hero() {
  return (
    <section id="home" className="hero_section">
      <h1>STREET</h1>
      <div className="hero_text">
        <strong>CULTURA EM MOVIMENTO</strong>
        <p>
          Produtora audiovisual que transforma a cidade em palco. 
          <br />Criando
          experiências culturais autênticas e relevantes.
        </p>
      </div>
      <div className="hero_buttons">
        <button className="hero_button">VER PROJETOS</button>
        <button className="showreel"><i className="bi bi-play"></i>ASSISTIR SHOWREEL</button>
      </div>
    </section>
  );
}
