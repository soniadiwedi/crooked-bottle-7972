import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "../Mobile/MobilePage.css";
import { useEffect } from "react";
import { getProductData } from "../../Redux/ProductReducer/action";
import { Box } from "@mui/system";
import { styled } from "@mui/material";

import UpperBar from "../../components/UpperBar";
import { useLocation, useSearchParams } from "react-router-dom";
import AppliancesCard from "./AppliancesCard";
import Header from "../../components/LandingPage/Header/Header";
import Navbar from "../../components/Navbar";
import "../search/Search.css"

export default function AppliancesPage() {
  const data=useSelector((store)=>store.productReducer.products)
  const search = useSelector(store=>store.productReducer);
   console.log("dataaa",data);
    const [searchParams,setSearchParams]= useSearchParams();
    const Cat=(searchParams.getAll('category'))
    const dispatch=useDispatch()
   

  useEffect(() => {
    dispatch(getProductData);
  }, []);
  if(search.isLoading){
    return (
        <div className="loading-indicator" >Loading...</div>
    )
}
if(search.isError){
    return (
        <p>Something went wrong</p>
    )
}

  const Component = styled(Box)`
    padding: 10px 10px;
    background: #f2f2f2;
  `;
  return (

    <>
      <Header />
      <Navbar />
      
      <div className="row">
        <div className="col-md-3 col-12">
          {" "}
          <Sidebar />
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="col-12">
              <UpperBar />
            </div>
            <Component className="row">
              {data.length > 0 &&
                data
                  .filter((el) => {
                    if (Cat.length > 0) {
                      return Cat.includes(el.category);
                    } else {
                      return el;
                    }
                  })
                  .map((el) => {
                    return (
                      <div key={el.id} className="col-md-3 col-12">
                        <AppliancesCard {...el} />
                      </div>
                    );
                  })}

            </Component>
          </div>
        </div>
      </div>
     
    </>

    
  );
}
