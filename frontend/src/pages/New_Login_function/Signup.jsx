import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import axios from "axios"
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link as Navlink} from 'react-router-dom';
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [data,setData]=useState({
      username: "",
      email: "",
      dob: "",
      role: "",
      location: "",
      password: "",
      confirm_password: "",
    })
   

    const[errmsg,seterrmsg]=useState("")
    
    const onChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    } 

    const postData = (e) => {
      e.preventDefault();
     
      fetch("http://localhost:3300/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          seterrmsg(res.errmsg);
         
        })
        .catch((err) => {
          console.log(err);

        });
    };
    
    return (
        
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" onChange={onChange} name="username"/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="dob" isRequired>
                    <FormLabel>Date of Birth</FormLabel>
                    <Input type="date" onChange={onChange} name="dob" />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="role" isRequired>
                    <FormLabel>Role</FormLabel>
                    <Input type="text" onChange={onChange} name="role"/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="location" isRequired>
                    <FormLabel>Location</FormLabel>
                    <Input type="text" onChange={onChange} name="location" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={onChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={onChange} name="password" />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>

                  </InputRightElement>

                </InputGroup>
                <FormControl id="confirm_password" isRequired>
                <FormLabel>Confirm password</FormLabel>
                <Input type="password" name='confirm_password' onChange={onChange} />
              </FormControl>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={postData}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Navlink to="/login">Login</Navlink>
                  
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }



