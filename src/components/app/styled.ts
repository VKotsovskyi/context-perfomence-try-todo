import styled from "styled-components";
import { colors } from "../../constants/colors";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 80px;
  padding: 20px;
  box-shadow: -4px 6px 16px -7px ${colors.primary};
  box-sizing: border-box;
  h1 {
    font-size: 2em;
    margin: 0;
    color: ${colors.primary};
  }
  p {
    max-width: 500px;
    margin: 0 auto;
    color: ${colors.primaryFont};
    font-family: monospace;
    text-align: center;
  }
`;

export const BodyContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  background: ${colors.secondary};
`;
