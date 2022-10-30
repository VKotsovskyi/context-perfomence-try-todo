import styled from "styled-components";
import { colors } from '../../constants/colors'

export const TodoContainer = styled.div`
  text-align: center;
  h1 {
    font-size: 2em;
    margin-bottom: 0;
    color: ${colors.darkBlue};
  }
  p {
    width: 50%;
    margin: 5px auto;
    color: ${colors.darkGrey};
    font-family: monospace;
  }
`

export const ActionButton = styled.button`
  padding: 11px 21px;
  color: ${colors.white};
  background: ${colors.green};
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 1.1em;
  cursor: pointer;
  box-shadow: -4px 6px 16px -7px ${colors.darkBlue};
`

export const Input = styled.input`
  padding: 10px 20px; 
  border-radius: 5px;
  margin-right: 10px;
  border: 2px solid ${colors.darkBlue};
  font-size: 1.1em;
`

export const ListItemContainer = styled.ul`
  padding: 0;
  width: 70%;
  margin: 20px auto;
`

export const ListItem = styled.li`
  list-style-type: none;
  padding: 20px;
  font-size: 1.5em;
  color: ${colors.darkBlue};
  border: 2px solid ${colors.lightBlue};
  margin-bottom: 10px;
  box-shadow: -4px 6px 16px -7px ${colors.darkBlue};
  text-align: left;
`