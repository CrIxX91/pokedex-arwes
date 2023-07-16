import { ApolloClient, InMemoryCache } from '@apollo/client';

const apoloClient = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
});

export default apoloClient