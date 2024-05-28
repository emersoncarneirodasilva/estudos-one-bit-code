import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 70px 50px;
`;

export const ProductImage = styled.img.attrs({
  src: "./img/productImage.png",
  alt: "Imagem do produto",
})`
  width: 400px;
  pointer-events: none;
`;

export const ProductTextContainer = styled.div`
  max-width: 500px;
  padding-top: 40px;
`;

export const ProductTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  padding-top: 30px;
`;

export const ProductButton = styled.button`
  font-size: 17px;
  font-weight: 600;
  width: 200px;
  height: 40px;
  margin-top: 30px;
  border-radius: 5px;
  border: ${({ theme }) => theme.button.border};
  color: ${({ theme }) => theme.button.color};
  background-color: ${({ theme }) => theme.button.background};
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    font-size: ${({ theme }) => theme.button.fontHover};
  }
`;
