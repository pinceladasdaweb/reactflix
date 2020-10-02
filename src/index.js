import 'normalize.css'
import App from './app'
import React from 'react'
import { render } from 'react-dom'
import { firebase } from './lib/firebase.prod'
import { GlobalStyles } from './global-styles'
import { FirebaseContext } from './context/firebase'

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)
