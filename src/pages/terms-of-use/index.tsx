import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import React, { useEffect, useState } from "react";
import {TextTermsOfUse} from "../../components/TermsOfUseText/index";
import api from "../../services/api";

// const URL_API = "http://191.252.109.146/api/form-contato";

export default function TermsOfUse() {


  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState(null);
  
  // const fetchAllData = async () => {

  //   try{

  //     setLoading(true);

  //     const response = await fetch(URL_API);
  //     const data = await response.json();

  //     if(!data) 
  //       throw 'Problema na requisição'

  //     setData(data)
  //     // console.log(response.status, data);

  //   }catch(error){
  //     console.log(error);
  //   }finally{
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchAllData();
  // }, [])

  // const [user, setUser] = useState();

  // useEffect(() => {
  //   api
  //     .get("/api/contato/")
  //     .then((response) => setUser(response.data))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, []);

  return (
    <Layout>
      <TextTermsOfUse/>
    </Layout>
  );
}
