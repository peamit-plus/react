import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './comps/about';
import Home from './comps/home';
import Category from './comps/category';
import Product from './comps/product';
import Send from './comps/send';
import Lyout from './comps/lyout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function App() {
  return (
    <>
    <ToastContainer/>
    <div className='container'>
      
      <Router>
        <Routes>


          <Route path='/' element={<Lyout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/category/:catId' element={<Category />} />
            <Route path='/product/:proId' element={<Product />} />
            <Route path='/send' element={<Send />} />
            <Route path='/*' element={<h2>404 not found</h2>} />
          </Route>
        </Routes>

      </Router>
      {/* <Input /> */}
      {/* <AppMap/> */}
      {/* <Category /> */}

    </div>
</>
  );
}

export default App;
