
import './App.css'; 
import Home from './components/Home/Home';
import { CounterContextProvider } from './CounterContext';

import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

import { Outlet } from 'react-router-dom';




function App(){
  return( 
  <>
    <NavBar/>
    <Outlet/>  
    <Footer/>
  </>
  )
}
export default App;