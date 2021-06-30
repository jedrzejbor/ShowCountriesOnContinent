import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { ContinentData } from '../common/interfaces/continents.interface';
import { LoadingWrapper } from './LoadingWrapper';
import { Grid } from 'react-spinners-css';
import { ButtonLink } from './ButtonLink';
import styled from 'styled-components';

const ContinentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: #191F2A;
`

const GET_CONTINENTS = gql`
  query Continents {
    continents {
      name
      code
    }
  }
`;


const ContinentList: React.FC = () => {
  const { data, loading} = useQuery<ContinentData>(GET_CONTINENTS);
  if (loading) {
    return <LoadingWrapper><Grid/></LoadingWrapper>;
  }

  return (
    <ContinentWrapper>
      {data?.continents.map((continent, i) => (
          <ButtonLink key={i} to={`/continents/${continent.code}`}>{continent.name}</ButtonLink>
      ))}
    </ContinentWrapper>
  );
};
export default ContinentList;
