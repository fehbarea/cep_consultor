import './App.css';
import { Provider } from 'react-redux';
import FormEndereco from './components/FormEndereco/FormEndereco.js';
import store from './contexts/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormEndereco/>
      </div>
    </Provider>
  );
}

export default App;
