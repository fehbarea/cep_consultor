import './App.css';
import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import store from './contexts/store';
import Header from './components/Header/Header.js';

const FormEndereco = React.lazy(() => import('./components/FormEndereco/FormEndereco.js'));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <br></br>
        <Suspense fallback={<div>Carregando Formulário...</div>}>
          <FormEndereco />
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
