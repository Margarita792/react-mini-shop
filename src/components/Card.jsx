function Card({ title, image, price, gram, addBusket }) {
    return (<>
        <div className="card">
            <div className="wrap-img-btn">
                <img className="img" src={image} />
                <div className="wrap-btn">
                    <button onClick={() => {
                        addBusket({ image, title, price, gram });
                    }} className="btn">+</button>
                </div>
            </div>
            <p className="price">{price} грн</p>
            <p className="title">{title}</p>
            <p className="gram">{gram}г</p>
        </div>
    </>
    )
}
export default Card;