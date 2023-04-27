import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// FIRBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../FireBase/firebaseConfig";

import CardComponentDetail from "../../components/CardComponentDetail/CardComponentDetail"

import "./AlbumDetail.css";







const AlbumDetail = () => {
  const [productoData, setProductoData] = useState([]);
console.log(productoData)

  let { id } = useParams();

  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "producto"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductoData(docs);
    };
    getProductos();
  }, [id]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Album Details</h1>
      {productoData.map((data) => {
        return <CardComponentDetail productosData={data} key={data.id} />;
           


      })}
    </div>
  );
};

export default AlbumDetail;



