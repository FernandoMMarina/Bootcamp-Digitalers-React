import './App.css';
import AppRouters from './components/articulos/AppRouters';
import { useState } from 'react';
import { Provider } from 'react-redux';
import estadoGlobal from "./redux/store/stores";



function App() {
  const isLoggeado = localStorage.getItem('logueado') || false;
  const [logueado , setLogueado] = useState(isLoggeado);

  return (
    <>
    <Provider store={estadoGlobal}>
      <AppRouters></AppRouters>
    </Provider>
    </>
  );
}

export default App;
