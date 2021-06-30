import App from './views/App';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/client';
import client from './common/apollo-client';
import GlobalStyle from './theme/GlobalStyle';

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)