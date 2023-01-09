import "./App.css";
import "./style.scss";
import { useState } from "react";
import { CardFilme } from "./Componentes/CardFilme";

function App() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [formularioErro, setFormularioErro] = useState(false);
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      titulo: "Harry Potter e o enigma do principe",
      imagem:
        "https://hbomax-images.warnermediacdn.com/images/GXssQ0A7HLFVGwwEAAABc/tileburnedin?size=1280x720&partner=hbomaxcom&v=ff5b526c4c9d624db2b6f3380884be8e&host=art-gallery.api.hbo.com&language=pt-br&w=1280",
    },
    {
      id: 2,
      titulo: "O Hobbit uma jornada inesperada",
      imagem:
        "https://images.justwatch.com/poster/8537318/s718/o-hobbit-uma-jornada-inesperada.%7Bformat%7D",
    },
    {
      id: 3,
      titulo: "Vingadores Ultimato",
      imagem:
        "https://www.jornalismo.ufv.br/cinecom/wp-content/uploads/2019/04/xvingadores_ultimato.jpg.pagespeed.ic_.sIXRk9bbK1.jpg",
    },
    {
      id: 4,
      titulo: "Guardioes da Galáxia",
      imagem:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8E7D1A82D9016E5C9BDBB78B09C7B8A77A7EF07107FE39CDD12554C0DF2ED9D1/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
  ]);
  const novoFilme = {
    id: 5,
    titulo: nomeFilme.trim(),
    imagem: urlImagem,
  };
  function salvarFilme(event) {
    event.preventDefault();
    if (nomeFilme.length < 3 || urlImagem.length < 6) {
      setFormularioErro(true);
    } else {
      setFormularioErro(false);
      setFilmes([novoFilme, ...filmes]);
      setNomeFilme("");
      setUrlImagem("");
    }
  }

  return (
    <div className="App">
      <h1>Catalogo de Filmes Favoritos</h1>
      <form onSubmit={(event) => salvarFilme(event)}>
        <div className={formularioErro ? "form-error" : "imputs"}>
          <div>
            <label htmlFor="nomeFilme">Nome do Filme</label>
            <input
              id="nomeFilme"
              type="text"
              value={nomeFilme}
              onChange={(event) => setNomeFilme(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="urlImagemFilme">URL da imagem do Filme</label>
            <input
              id="urlImagemFilme"
              type="text"
              value={urlImagem}
              onChange={(event) => setUrlImagem(event.target.value)}
            />
          </div>
          {formularioErro ? (
            <span>
              <strong>
                Por favor, verifique os dados inseridos no formulario
              </strong>
            </span>
          ) : null}
        </div>
        <button type="submit">Salvar Filme</button>
      </form>
      <section className="filme">
        {filmes.map((filme) => {
          return <CardFilme key={filme.id} item={filme} />;
        })}
      </section>
    </div>
  )
}

export default App;
