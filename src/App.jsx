import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navibar from './components/Navibar';
import Home from './views/Home';
import Contacto from './views/Contacto';
import E404 from './views/E404';

function App() {  

  return (
    <>
        <Navibar />
        <Routes>
            <Route 
                path="/" 
                element={<Home />}
            />
            <Route 
                path="/home" 
                element={<Home />}
            />
            <Route 
                path="/contacto" 
                element={<Contacto />}
            />
            <Route 
                path="*" 
                element={<E404 />}
            />
        </Routes>     
    </>
  );
};

export default App;
