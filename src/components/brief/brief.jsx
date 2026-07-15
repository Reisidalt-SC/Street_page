import "./brief.scss";

export default function Brief() {
  return (
    <section className="brief_section">
      <div className="brief_h1">
        <i className="bi bi-quote quote_mark"></i>
        <h1>
          ARTE
          <br />
          <strong>NAS</strong>
          <br />
          RUAS
        </h1>
      </div>

      <div className="brief_text">
        <div className="above_text">
          <p>
            <strong>A STREET </strong>
            nasce do pulso da cidade.
          </p>
        </div>
        <div className="bellow_text">
          <p>
            Somos uma produtora audiovisual que acredita na cultura como
            transformação. Ocupamos espaços, criamos diálogos e celebramos a
            diversidade criativa que emerge das ruas.
          </p>
        </div>
      </div>

      <div className="brief_quote">
        <p>
          "Cada projeto é um manifesto. Cada experiência, uma declaração de que
          a arte urbana não é tendência
          <br /> — é identidade."
        </p>
      </div>

      <div className="brief_grid">
        <div className="brief_field">
          <strong>Missão</strong>
          <p>
            Amplificar vozes culturais e criar experiências que conectam pessoas
          </p>
        </div>
        <div className="brief_field">
          <strong>Visão</strong>
          <p>Ser referência em produção cultural urbana no Brasil</p>
        </div>
      </div>

      <div className="motto">
        <strong>
          AUTENTICIDADE ·  RELEVÂNCIA · TRANSFORMAÇÃO
        </strong>
      </div>
    </section>
  );
}
