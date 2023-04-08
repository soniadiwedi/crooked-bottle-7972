import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { shallowEqual, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import SingleMobileCard from "./SingleAppliancesCard";
import {styled} from "@mui/material"
import SingleAppliancesCard from "./SingleAppliancesCard";
///////////////////////////////////////////
const Component=styled(Box)`
  background:#f2f2f2
`
export default function SingleAppliances() {
 
  // const getsingledata = () => {
    
  //   axios
  //     .get(`http://localhost:3300/product/single/${_id}`)
  //     .then((res) => {
        
  //       setdata(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };


  
  
    const param= useParams();
    const [data, setData] = useState({});
    let _id=param.id
  console.log("id",_id);
    useEffect(() => {
      axios.get(`http://localhost:3300/product/single/${_id}`)
        .then(response => {
          console.log("res",response.data.data);
          setData(response.data.data)
        })
        .catch(error => console.error(error));
    }, [_id]);
 console.log("data",data);
  return (
    <Box >
      {
        <div style={{background:"f2f2f2",marginTop:"55px"}}> 
          <div >
           <h1>hello sonia</h1>
          </div>
       <div>
        <img src={data.detailUrl} alt="" />
       </div>
        
        </div>
      }
    </Box>
  );
}
