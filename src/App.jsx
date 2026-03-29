
import { Suspense } from 'react';
import './App.css'
import Banner from './componants/Banner/Banner';
import BannerBottom from './componants/BannerBottom/BannerBottom';
import Products from './componants/MainPart/Products/Products';
import NavBar from './componants/NavBar/NavBar';


const fetchProducts=async()=>{
  const res = await fetch("/data.json")
  return res.json()
}

function App() {

  const productPromise=fetchProducts();
  

  return (
    <>
      <NavBar />
      <Banner />
      <BannerBottom />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Products productPromise={productPromise}></Products>
      </Suspense>
    </>
  );
}

export default App
