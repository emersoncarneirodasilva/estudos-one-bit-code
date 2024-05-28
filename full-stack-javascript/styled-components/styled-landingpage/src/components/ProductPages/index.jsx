import {
  Container,
  ProductImage,
  ProductTextContainer,
  ProductTitle,
  ProductDescription,
  ProductButton,
} from "./styles";

export default function ProductPage() {
  return (
    <Container>
      <ProductImage />
      <ProductTextContainer>
        <ProductTitle>Apple watch nova geração</ProductTitle>
        <ProductDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          at debitis sed fugiat, consectetur esse blanditiis reiciendis
          similique et doloribus a asperiores dignissimos perferendis! Libero
          possimus officia voluptate ut aspernatur. Animi accusamus, inventore
          qui quis accusantium placeat porro iure nesciunt?
        </ProductDescription>
        <ProductButton>Comprar agora!</ProductButton>
      </ProductTextContainer>
    </Container>
  );
}
