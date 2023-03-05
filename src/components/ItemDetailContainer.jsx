import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, QuerySnapshot } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState ([]);
  useEffect(() => {
    const db = getFirestore();
    const coleccionGlitters = collection(db, "glitters");
    getDocs(coleccionGlitters).then((querySnapshot) => {
      const glitters = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(glitters);
    });
  }, []);
  
  return (
    <>
      <ItemDetail glitters={data}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer