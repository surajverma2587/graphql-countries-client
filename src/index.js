import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import client from './client'
import App from './components/App'

import './styles/tailwind.css'

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

render(<Root />, document.getElementById('root'))