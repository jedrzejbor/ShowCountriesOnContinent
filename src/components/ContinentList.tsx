import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { ContinentData } from '../common/interfaces/continents.interface';
import {ButtonLink} from './ButtonLink';

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.continents.map((continent, i) => (
          <ButtonLink key={i} to={`/continents/${continent.code}`}>{continent.name}</ButtonLink>
      ))}
    </div>
  );
};
export default ContinentList;
