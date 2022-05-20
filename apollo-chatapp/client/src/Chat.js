import React from 'react';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client';
import Messages from './GraphQl';

import { Container } from 'shards-react';

const client = new ApolloClient({
    uri:"http://localhost:4000/",
    cache:new InMemoryCache()
});

const Chat = () =>{
    return(
        <Container><Messages user="Nilesh"/></Container>
    )
}

const ApolloClientTag = () => {
    return(
        <ApolloProvider client={client}>
            <Chat/>
        </ApolloProvider>
    )
}

export default ApolloClientTag;