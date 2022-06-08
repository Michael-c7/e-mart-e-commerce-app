import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'

// where the contexts will go ( surround the app)
ReactDOM.render(
  <React.StrictMode>
      <ProductsProvider>
        <App />
      </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)