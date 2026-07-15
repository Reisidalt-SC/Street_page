import "./contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="contact_section">
      <div className="contact_title">
          <h1>
            VAMOS CRIAR
            <br />
            <strong>ALGO JUNTOS</strong>
          </h1>
        </div>
      <div className="contact_area">
        <div className="contact_info">
          <div className="contact_text">
            <h2>ENTRE EM CONTATO</h2>
            <p>
              Tem um projeto em mente? Quer saber mais sobre nossos serviços?
              Estamos prontos para conversar e transformar suas ideias em
              realidade.
            </p>
          </div>
          <div className="contact_links">
            <div className="link_field">
              <i className="bi bi-envelope"></i>
              <div className="link_text">
                <span>EMAIL</span>
                <strong>contato@street.com.br</strong>
              </div>
            </div>
            <div className="link_field">
              <i className="bi bi-geo-alt"></i>
              <div className="link_text">
                <span>LOCALIZAÇÃO</span>
                <strong>São Paulo, SP - Brasil</strong>
              </div>
            </div>
          </div>
          <div className="social_links">
            <span>REDES SOCIAIS</span>
            <div className="links_btns">
              <button>
                <i className="bi bi-instagram"></i>
              </button>
              <button>
                <i className="bi bi-youtube"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <form action="" className="contact_form">
        <div className="input_field">
          <label htmlFor="name">NOME</label>
          <input type="text" id="name" placeholder="Seu nome completo" />
        </div>
        <div className="input_field">
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" placeholder="seu@email.com" />
        </div>
        <div className="input_field">
          <label htmlFor="message">MENSAGEM</label>
          <textarea
            id="message"
            placeholder="Escreva sua mensagem aqui..."
            rows={5}
          ></textarea>
        </div>
        <div className="submit_button">
          <button type="submit"><i className="bi bi-send"></i>  ENVIAR MENSAGEM</button>
        </div>
      </form>
    </section>
  );
}
