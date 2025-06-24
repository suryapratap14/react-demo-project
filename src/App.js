import logo from './logo.svg';
import './App.css';
import Login from "./Login.jsx"; // component rendurring process.
import Signup from "./Signup.jsx";
import Dashboard from "./Dashboard.jsx";
import OurProduct from './OurProduct.jsx';
import ProductDetails from './ProductDetails.jsx';
// import ListOfProducts from './ListOfProducts.jsx';

import {BrowserRouter,Route,Routes} from "react-router-dom"; // these are the three functions for routing conceept


function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
<nav className='navbar'>

      <img
        src='https://www.datwebdigital.com/DWD/wp-content/uploads/2012/06/logo-design.jpg'
          width={100}
          height={50}
          alt='logo'
      />

    <div>
      <a href="/login">Login</a>
      <a href="/signup">Signup</a>
      {/* <a href='/listofproducts'>Products</a> */}
      <a href="/product">OurProduct</a>
      {/* <a href='/productdetails'>ProductDetails</a> */}
    </div>
      
</nav>


      <BrowserRouter>

        <Routes>
            
            <Route path="/login" element={<Login></Login>} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route path='/product' element={<OurProduct></OurProduct>} />
            {/* <Route path='/listofproducts' element={<ListOfProducts></ListOfProducts>} /> */}
            <Route path="*" element={<h1>Page Not Found!!!</h1>} />
            <Route path="/" element={<Login></Login>} />
            <Route path="/productdetails" element={<ProductDetails></ProductDetails>} />


        </Routes>

      </BrowserRouter>


          {/* <Login></Login>
          <Signup></Signup> */}
          {/* <Dashboard></Dashboard> */}

      
    </div>
  );
}

export default App;
