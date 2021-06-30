import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {useParams} from 'react-router-dom';
import {IdTypes, CountryData} from '../common/interfaces/country.interface';
import {LoadingWrapper} from './LoadingWrapper';
import { Grid } from 'react-spinners-css';
import styled from 'styled-components';

const CountryBackground = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: #191F2A;
`

const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 10px;
  justify-content: center;
`

const CountryBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 170px;
  padding-top: 10px;
  background-color: #222A3C;
  color: #fff;
  font-size: 1.2em;
`

const TopContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Emoji = styled.div`
  font-size: 42px;
`

const BottomContent = styled.div`
  text-align: center;
`

const Names = styled.p`
  font-weight: bold;
  margin-left: 10px;
  font-size: 20px;
`

const LanguagesTitle = styled.p`
  font-size: 16px;
`

const Languages = styled.p`
  margin: 5px 0;
`

const GET_COUNTRIES = gql`
  query Countries($code: String) {
    countries(filter: { continent: { eq: $code } }) {
      name
      code
      emoji
      languages {
        name
      }
    }
  }
`;

const CountryList: React.FC = () => {
  const { id } = useParams<IdTypes>(); 

  const continentCode = id;

  const { data, loading } = useQuery<CountryData>(GET_COUNTRIES, {
    variables: {
      code: continentCode,
    },
  });

  if (loading) {
    return <LoadingWrapper><Grid/></LoadingWrapper>;
  }

  return (
    <CountryBackground>
      <CountryWrapper>
        {data?.countries.map((country, i) => {
          return (
          <CountryBlock key={i}>
            <TopContent><Emoji>{country.emoji}</Emoji><div><Names>{country.name}</Names></div></TopContent>
            <BottomContent>
              <LanguagesTitle>Languages:</LanguagesTitle>
            {country.languages.map((language, i) => {
              return (
                <Languages key={i}>{i+1}-{language.name}</Languages>
              )
            })}
            </BottomContent>
          </CountryBlock>
        )})}
      </CountryWrapper>
    </CountryBackground>
  );
};

export default CountryList;