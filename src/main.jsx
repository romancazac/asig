import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/style.scss'
import { FormContextProvider } from './contexts/FormContext.jsx'
import { BlogContextProvider } from './contexts/BlogContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormContextProvider>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </FormContextProvider>
  </React.StrictMode>,
)
