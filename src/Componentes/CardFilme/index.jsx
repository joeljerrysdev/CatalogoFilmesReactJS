export function CardFilme(props) {
  return (
    <div className="card-filme">
      <img src={props.item.imagem} />
      <h1>{props.item.titulo}</h1>
    </div>
  );
}
