import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import AllServices from './Pages/AllServices/AllServices';
import ManageServices from './Pages/ManageServices/ManageServices';
import EditService from './Pages/EditService/EditService';
import Additem from './Pages/AddItem/Additem';
import Footer from './Pages/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<AllServices></AllServices>}></Route>
        <Route
          path='/manage'
          element={<ManageServices></ManageServices>}></Route>
        <Route path='/update/:id' element={<EditService></EditService>}></Route>
        <Route path='/additem' element={<Additem></Additem>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
