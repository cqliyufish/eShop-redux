import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const LinkTo = styled(Link)`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 25px;
  cursor: pointer;
  color: black;
`;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
