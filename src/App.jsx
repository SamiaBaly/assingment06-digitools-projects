
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './componants/Banner/Banner';
import BannerBottom from './componants/BannerBottom/BannerBottom';
import Products from './componants/MainPart/Products/Products';
import NavBar from './componants/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';


const fetchProducts=async()=>{
  const res = await fetch("/data.json")
  return res.json()
}

function App() {

  const productPromise=fetchProducts();
  const [carts, setCarts] = useState([]);
  

  return (
    <>
      <NavBar carts={carts} />
      <Banner />
      <BannerBottom />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Products
          productPromise={productPromise}
          carts={carts}
          setCarts={setCarts}
        ></Products>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App
