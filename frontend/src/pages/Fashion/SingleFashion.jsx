import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { shallowEqual, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import SingleMobileCard from "./SingleFashionCard";
import { styled } from "@mui/material";
import SingleFashionCard from "./SingleFashionCard";

const Component = styled(Box)`
  background: #f2f2f2;
`;
export default function SingleFashion() {
  const [data, setdata] = useState([]);
  const { isloading, product } = useSelector((store) => {
    return {
      isloading: store.productReducer.isLoading,
      product: store.productReducer.product,
    };
  }, shallowEqual);
  const params = useParams();
  const getsingledata = (id) => {
    axios
      .get(`https://light-ant-sock.cyclic.app/products/${id}`)
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getsingledata(params.id);
  }, [params.id]);

  return (
    <Box>
      {
        <div style={{ background: "f2f2f2" }}>
          <div>
            <SingleFashionCard {...data} />
          </div>
        </div>
      }
    </Box>
  );
}
