import products from "../database.json";

function loadProducts({ params }) {
  const product = products.find((p) => p.id === +params.productId); // OBS: +params.productId mesmo que Number(params.productId)

  if (!product) {
    throw new Response("404 not Found", { status: 404 });
  }

  return product;
}

export default loadProducts;
