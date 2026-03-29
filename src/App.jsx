
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './componants/Banner/Banner';
import BannerBottom from './componants/BannerBottom/BannerBottom';
import Products from './componants/MainPart/Products/Products';
import NavBar from './componants/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import GetStarted from './componants/GetStarted/GetStarted';
import PricingSection from './componants/PricingSection/PricingSection';
import WorkFlow from './componants/WorkFlow/WorkFlow';
import Footer from './componants/Footer/Footer';


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
      <GetStarted></GetStarted>
      <PricingSection></PricingSection>
      <WorkFlow></WorkFlow>
      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App
