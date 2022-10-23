import styled from "styled-components";
import Theme from "../../../styles/theme";

export const Card = styled.a<{ theme: Theme }>`
  display: flex;
  width: 80%;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-decoration: none;
  color: inherit;
  transition: 0.3s ease-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 40%;
  height: auto;
  aspect-ratio: 16/9;
  border-radius: 10px 0 0 10px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Tech = styled.span`
  background-color: #bde0fe;
  font-size: 1.2rem;
  margin-auto;
  padding: 4px 6px;
  border-radius: 3px;
  margin-right: 0.5rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.1rem
  }
`;

export const Description = styled.p`
  font-size: 1.3rem;
  margin-top: 1rem;
`;
