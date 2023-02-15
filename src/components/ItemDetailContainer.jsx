import ItemDetail from "./ItemDetail";
import Stock from "../stock.json";

const ItemDetailContainer = () => {
  const getDatos = () => {

    return new Promise((resolve, rejet) =>{
      if (Stock.length === 0) {
        rejet(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Stock);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return (
    <>
      <ItemDetail glitters={Stock}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer