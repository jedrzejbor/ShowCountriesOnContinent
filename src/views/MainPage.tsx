import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: #191F2A;
`

const MainPage: React.FC = () => {
  return (
    <MainWrapper>
      <ButtonLink to="/continents">Continents Link</ButtonLink>
    </MainWrapper>
  );
}

export default MainPage;