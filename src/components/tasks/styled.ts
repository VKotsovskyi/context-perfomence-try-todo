import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ActionButton = styled.button`
  padding: 11px 21px;
  color: ${colors.white};
  background: ${colors.action};
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 1.1em;
  cursor: pointer;
  box-shadow: -4px 6px 16px -7px ${colors.primary};
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  border: 2px solid ${colors.primary};
  font-size: 1.1em;
`;

export const DasboardsStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const ListItem = styled.li`
  list-style-type: none;
  padding: 20px;
  font-size: 1.5em;
  color: ${colors.primary};
  border: 2px solid ${colors.secondary};
  margin-bottom: 10px;
  box-shadow: -4px 6px 16px -7px ${colors.primary};
  text-align: left;
`;
