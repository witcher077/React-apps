import './styles/index.scss';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (<div className='app'>
    <Header />
    <Outlet />
    <Footer />
  </div>);
}

export default App;
