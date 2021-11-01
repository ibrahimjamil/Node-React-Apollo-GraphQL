import './App.css';
import List from './List'
import Form from './Form'

import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const uploadLink = createUploadLink({ uri: 'http://localhost:5000/' });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([ uploadLink]),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <List/>
      <Form/>
    </ApolloProvider>
  );
}

export default App;
