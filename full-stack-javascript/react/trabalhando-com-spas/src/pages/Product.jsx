import { Link, useLoaderData } from "react-router-dom";

function Product() {
  const product = useLoaderData();

  if (!product) {
    return <h2>Oops... Esse produto não foi encontrado :(</h2>;
  }

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <button>Comprar</button>
    </section>
  );
}

export default Product;
