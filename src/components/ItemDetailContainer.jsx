import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [productos, setProductos] = useState ("");
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const Glitters = doc(db, "glitters", `${id}`);
    getDoc(Glitters).then((snapshot) => {
      if (snapshot.exists()) {
        setProductos(snapshot.data());
      }
    });
  }, []);
  
  return (
    <>
      <ItemDetail glitters={productos}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer