import {
  CardBody,
  Image,
  Stack,
  Card,
  Text,
  Heading,
  CardFooter,
  ButtonGroup,
  Divider,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
import { NavLink, Link } from "react-router-dom";

import "../Mobile/MobilePage.css";
import { useSelector } from "react-redux";
import "../search/Search.css"
export default function ElectronicsCard({
  id,
  title,
  description,
  price,
  rating,
  brand,
  category,
  thumbnail,
}) {

  const search = useSelector(store=>store.productReducer);
   
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

  return (
    <>
      <div key={id + 1} className="mt-3">
        <Card maxW="sm" boxShadow="2xl" rounded="lg">
          <NavLink to={`/single/${id}`}>
            <CardBody>
              <Center>
                <Image
                  boxSize="200px"
                  src={thumbnail}
                  alt={thumbnail}
                  borderRadius="lg"
                />
              </Center>
              <Stack mt="0.5rem" spacing="3">
                <Heading size="md">{title}</Heading>
                <Text>{description.split("").splice(0, 25)}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ₹{price}
                </Text>
                <span>Free delivery</span>
              </Stack>
            </CardBody>
          </NavLink>
        </Card>
      </div>
    </>
  );
}
