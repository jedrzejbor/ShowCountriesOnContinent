import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {useParams} from 'react-router-dom';
import {IdTypes, CountryData} from '../common/interfaces/country.interface';


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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {data?.countries.map((country, i) => {
          return (
          <div key={i}>
            <div><div>{country.emoji}</div><div><p>{country.name}</p></div></div>
            <div>
              <p>Languages:</p>
            {country.languages.map((language, i) => {
              return (
                <p key={i}>{i+1}-{language.name}</p>
              )
            })}
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default CountryList;