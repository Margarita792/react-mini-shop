import { useEffect, useState } from "react";
function AddBasket({ image, price, title, gram, updateBasket }) {
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        updateBasket(quantity)
    }, [quantity]);
    return (
        <div className="cardBasket">
            <div className="wrapImgTitleGram">
                <img className="imgBasket" src={image} />
                <p className="titleBasket">{title}</p>
                <p className="gramBasket">{gram}г</p>
            </div>
            <div className="wrapQuantity">
                <div className="btnQuantity">
                    <button className="btnBasket" onClick={() => {
                        setQuantity(parseInt(quantity) - 1)
                    }}>-</button>
                    <input className="inputCardBasket" onChange={(e) => { setQuantity(e.target.value) }} value={quantity} type="number" ></input>
                    <button className="btnBasket" onClick={() => {
                        setQuantity(parseInt(quantity) + 1)
                    }}>+</button>
                </div>
                <p>Загальна сума: </p>
                <p className="priceBasket">{Math.round(price * quantity * 100) / 100} грн</p>
            </div>

        </div>
    )
}
export default AddBasket;