import styled from "styled-components";
import { colors } from "../../constants/colors";

export const DasboardContainer = styled.ul`
  padding: 0;
  height: 100%;
  background: ${colors.white};
  border-radius: 10px;
  margin: 5px;
  box-shadow: -4px 6px 16px -7px ${colors.primary};
  flex-grow: 1;
  flex-shrink: 0;
`;
