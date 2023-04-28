import React, { useState, useEffect } from "react";

import CardAlbumComponent from "../CardAlbumComponent/CardAlbumComponent";
import { Link } from "react-router-dom";

import "./CardList.css";
import Spinner from "../Spinner/Spinner";

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../FireBase/firebaseConfig";

const CardList = () => {
  const [productosData, setProductosData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAlbums = async () => {
      const q = query(collection(db, "producto"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductosData(docs);
    };
    getAlbums();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  
  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="CardListContainer">
          {productosData.map((data) => {
            return (
              <Link
                to={`details/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <CardAlbumComponent productosData={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardList;




