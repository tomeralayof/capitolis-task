import {apiUrl} from "./config.json";
import axios from "axios";

function getData() {
  return axios.get(`${apiUrl}/transaction`);
}

function sendTransaction(data) {
  return axios.post(`${apiUrl}/transaction`,{data});
}

function getCompress(){
  return axios.get(`${apiUrl}/compress`);
}

const trans = {
  getData,
  sendTransaction,
  getCompress
}

export default trans;