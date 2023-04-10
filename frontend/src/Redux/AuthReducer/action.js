import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginRequest=()=>{
 return {type:LOGIN_REQUEST}
}

export const loginSuccess=(payload)=>{
  return {type:LOGIN_SUCCESS,payload}
 }

 export const loginFailure=()=>{
  return {type:LOGIN_FAILURE}
 }



export const login =(user)=> (dispatch) => {
  console.log("user",user);
  dispatch(loginRequest)
  return axios.post(`https://worrisome-goat-sneakers.cyclic.app/user/login`,user).then((res)=>{
    
    dispatch(loginSuccess(res.data.token))


  }).catch((e)=>{
    dispatch(loginFailure())
  })

};



