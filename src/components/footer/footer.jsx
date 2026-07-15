import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="above_area">
        <div className="company_summary">
          <h1>STREET</h1>
          <p>
            Produtora audiovisual cultural que transforma a cidade em palco para
            experiências autênticas e marcantes.
          </p>
        </div>
        <div className="footer_links">
            <div className="links_list">
                <span>LINKS</span>
                <ul className="list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Portfólio</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Equipe</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div className="social_links">
                <span>REDES SOCIAIS</span>
                <div className="social_btns">
                    <button><i className="bi bi-instagram"></i></button>
                    <button><i className="bi bi-linkedin"></i></button>
                    <button><i className="bi bi-envelope"></i></button>
                </div>
            </div>
        </div>
      </div>
      <div className="bellow_area">
        <p>© 2026 STREET. Todos os direitos reservados.</p>
        <div className="bellow_terms">
            <span>Política de Privacidade</span>
            <span>Termos de Uso</span>
        </div>
      </div>
    </footer>
  );
}
