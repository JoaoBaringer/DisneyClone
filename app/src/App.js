import React from 'react'
import './app.css'
import Rotas from './routes';
import { ProviderList } from './hooks/Provider';

function App() {
  return (
    <ProviderList>
      <div className='app'>
        <Rotas />
      </div>
    </ProviderList>
  );
}

export default App;
