import './styles/index.scss';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Signup from './Models/Signup';
function App() {
  return (<div className='app'>
    <Header />
    <Outlet />
    <Footer />
    <Signup/>
  </div>);
}

export default App;
