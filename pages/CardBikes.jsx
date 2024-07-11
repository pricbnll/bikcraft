
import "/.CardBikes.css";

function CardBike({ model, price, imgSrc }) {
  function buyBike() {
    console.log("Comprando bike");
  }

  return (
    <>
      <div className="car-bike">
        <img src="{imgSrc}" alt="Imagem da bike" />
        <h4 className="modelo">{model}</h4>
        <h6 className="price">{price}</h6>

        <button onClick={() => buyBike()}>Comprar</button>
      </div>
    </>
  );
}
