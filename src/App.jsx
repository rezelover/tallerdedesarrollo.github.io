import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inicio proyecto de tesis">
          <span className="brand-dot" aria-hidden="true"></span>
          Titulo de la Tesis
        </a>
        <nav className="top-nav" aria-label="Principal">
          <a href="#problema">Problema</a>
          <a href="#solucion">Solucion</a>
          <a href="#metodologia">Metodologia</a>
          <a href="#resultados">Resultados</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <p className="eyebrow">Tipo de tesis | Carrera | Institucion</p>
          <h1>
            Titulo principal de tu tesis
            <br />
            subtitulo o foco principal.
          </h1>
          <p className="hero-copy">
            Escribe aqui un resumen breve de 3 a 5 lineas que explique el contexto
            general de tu tesis, su relevancia y que encontraran en esta pagina.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#problema">
              Ir al problema
            </a>
            <a className="btn btn-secondary" href="#solucion">
              Ir a la solucion
            </a>
          </div>
          <div className="hero-kpis" aria-label="Indicadores de la seccion">
            <article>
              <strong>Contexto</strong>
              <span>Completar idea clave del contexto</span>
            </article>
            <article>
              <strong>Brecha</strong>
              <span>Completar brecha principal</span>
            </article>
            <article>
              <strong>Objetivo</strong>
              <span>Completar objetivo general</span>
            </article>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="pulse"></div>
            <div className="orb orb-a"></div>
            <div className="orb orb-b"></div>
            <div className="signal-card">
              <p>Monitoreo de riesgo psicosocial</p>
              <div className="signal-bar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="programs" id="problema">
          <div className="section-head">
            <p>Problema de investigacion</p>
            <h2>Que problema existe y por que es importante resolverlo</h2>
          </div>
          <div className="program-grid">
            <article className="program-card">
              <h3>Situacion actual</h3>
              <p>
                Describe aqui el escenario actual: que pasa, a quienes afecta y cual
                es el impacto principal.
              </p>
            </article>
            <article className="program-card">
              <h3>Causas o brechas</h3>
              <p>
                Enumera aqui las causas del problema o brechas detectadas en tu
                diagnostico.
              </p>
            </article>
            <article className="program-card">
              <h3>Pregunta de investigacion</h3>
              <p>
                Formula aqui la pregunta principal que guiara tu tesis.
              </p>
            </article>
          </div>
        </section>

        <section className="pathway" id="solucion">
          <div className="section-head">
            <p>Propuesta de solucion</p>
            <h2>Como responde tu propuesta al problema identificado</h2>
          </div>
          <ol className="pathway-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Objetivo general</h3>
                <p>
                  Escribe aqui el objetivo general de tu tesis en una o dos lineas.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Objetivo especifico 1</h3>
                <p>
                  Define una accion concreta que contribuya a cumplir el objetivo
                  general.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Objetivo especifico 2</h3>
                <p>
                  Agrega un segundo objetivo especifico relacionado con validacion,
                  desarrollo o evaluacion.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Alcance y limites</h3>
                <p>
                  Delimita hasta donde llega tu propuesta y que aspectos quedan
                  fuera del estudio.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="resources" id="metodologia">
          <div className="section-head">
            <p>Metodologia</p>
            <h2>Como realizaras la investigacion y validaras resultados</h2>
          </div>
          <div className="resource-grid">
            <article>
              <h3>Tipo de investigacion</h3>
              <p>
                Indica aqui si tu enfoque es cualitativo, cuantitativo o mixto,
                y justifica brevemente.
              </p>
              <a href="#contacto">Ver detalle metodologico</a>
            </article>
            <article>
              <h3>Poblacion e instrumentos</h3>
              <p>
                Describe la muestra, tecnicas e instrumentos de recoleccion de datos.
              </p>
              <a href="#contacto">Consultar instrumentos</a>
            </article>
            <article>
              <h3>Plan de analisis</h3>
              <p>
                Explica como analizaras los datos y con que criterios evaluaras tu
                propuesta.
              </p>
              <a href="#contacto">Revisar criterios de exito</a>
            </article>
          </div>
        </section>

        <section className="programs" id="resultados">
          <div className="section-head">
            <p>Resultados esperados</p>
            <h2>Que resultados y aportes esperas obtener</h2>
          </div>
          <div className="program-grid">
            <article className="program-card">
              <h3>Aporte teorico</h3>
              <p>
                Completa aqui el aporte conceptual o marco que tu tesis fortalecera.
              </p>
            </article>
            <article className="program-card">
              <h3>Aporte practico</h3>
              <p>
                Completa aqui la mejora concreta que se espera en procesos o usuarios.
              </p>
            </article>
            <article className="program-card">
              <h3>Indicadores de exito</h3>
              <p>
                Define aqui como mediras si la propuesta fue efectiva.
              </p>
            </article>
          </div>
        </section>

        <section className="cta" id="contacto">
          <p>Informacion de contacto</p>
          <h2>
            Espacio para tutor, tesista o comision
            <br />
            agregar datos de contacto.
          </h2>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:correo@dominio.com">
              Agregar correo
            </a>
            <a className="btn btn-secondary" href="#inicio">
              Volver al inicio
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>Titulo de la tesis | Universidad</p>
        <small>Plantilla base para documentar problema, solucion, metodologia y resultados.</small>
      </footer>
    </>
  )
}

export default App
