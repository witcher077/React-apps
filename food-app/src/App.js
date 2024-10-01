import './styles/index.scss';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserContextProvider from './AuthContext/userContextProvider';
import ProductCtxProvider from './Context/productCtxProvider';
import { CartCtxProvider } from './Context/cartCtxProvider';
function App() {

  return (<ProductCtxProvider >
    <UserContextProvider className='app'>
      <CartCtxProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartCtxProvider>
    </UserContextProvider>
  </ProductCtxProvider>)
    ;
}

export default App;
