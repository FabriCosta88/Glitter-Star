import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyD8aiSX3yDOtFLBua4iqslAL2uoE8BzHFY",
  authDomain: "glitterstar-react-34dab.firebaseapp.com",
  projectId: "glitterstar-react-34dab",
  storageBucket: "glitterstar-react-34dab.appspot.com",
  messagingSenderId: "1089632412117",
  appId: "1:1089632412117:web:35ea8bf32285502c61dd5c"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
