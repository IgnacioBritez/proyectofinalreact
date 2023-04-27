import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MusicGenre.css";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../FireBase/firebaseConfig";

import CardAlbumComponent from "../../components/CardAlbumComponent/CardAlbumComponent";

import { Link } from "react-router-dom";



const MusicGenre = () => {
  const [productoData, setProductoData] = useState([]);

  let { Genero } = useParams();

  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "producto"), where("Genero", "==", Genero));
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
  }, [Genero]);

  return (
    <div
      
    >
      <h1>Albums by Music Genre</h1>

      <div className={"MusicStyle"}>
      {productoData.map((data) => {

        return(
          <Link 
          to={`/details/${data.id}`}
          style={{ textDecoration: "none" }}
          key={data}>

          <CardAlbumComponent productosData={data}  />;

          </Link>
       
        )
      })}

      </div>  
    </div>
  );
};

export default MusicGenre;
