import { Provider } from 'react-redux';
import './App.css';
import ProdForm from './products/ProdForm';
import ProdList from './products/ProdList'
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProdList />
        <ProdForm />
      </div>
    </Provider>
  )
}

export default App;
