import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const ButtonLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  background-color: #222A3C;
  height: 50px;
  width: 250px;
  margin: 20px 0;
  font-size: 18px;
  &:hover {
    box-shadow: 0px 0px 20px 5px #000;
  }
`