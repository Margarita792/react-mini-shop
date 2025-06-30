
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import AppSort from './components/AppSort';
import AppSearch from './components/AppSearch';
import AddBasket from './components/AddBasket';

function App() {
  const [basket, setBasket] = useState([]);
  const [sort, setSort] = useState("defoult")
  const [search, setSearch] = useState("");
  const [totalSum, setTotalSum] = useState(0)
  const [card, setCard] = useState([
    {
      img: "https://images.silpo.ua/products/300x300/webp/ae78d70d-9ecf-4b23-9c89-a9fac65b77df.png",
      title: "Шоколад молочний Toblerone з нугою з меду й мигдалю",
      price: 74.99,
      gram: 100
    },
    {
      img: "https://images.silpo.ua/products/300x300/webp/7e60d5a5-3f2c-497d-86e7-eed403735678.png",
      title: "Шоколад Milka арахіс та хрусткі кульки",
      price: 49.99,
      gram: 90
    },
    {
      img: "https://images.silpo.ua/products/300x300/webp/fa4fdb35-37c5-40b8-b0d6-67107dd26d85.png",
      title: "Батончик Nestle Lion",
      price: 15.99,
      gram: 42
    },
    {
      img: "https://images.silpo.ua/products/300x300/webp/87d84f0b-4a1b-489a-bd1f-0472973b34f0.png",
      title: "Батончик Kit Kat вафлі з арахісовою пастою в молочному шоколаді",
      price: 17.99,
      gram: 42
    },
    {
      img: "https://images.silpo.ua/products/300x300/webp/cd675812-94db-4b8a-bb0f-a4f9b43119a2.png",
      title: "Гумка жувальна Orbit White Bottle Свіжа м'ята",
      price: 61.00,
      gram: 64
    },
    {
      img: "https://images.silpo.ua/products/300x300/webp/97b0be87-09b7-4a3b-b8ce-d640a6072aac.png",
      title: "Цукерки Halls зі смаком м'яти жувальні",
      price: 15.99,
      gram: 47
    },
    {
      img: "https://images.silpo.ua/products/300x300/webp/009336f5-141d-44a4-a7ad-6e95ca711401.png",
      title: "Мигдаль в карамелі",
      price: 119.52,
      gram: 100
    },
    {
      img: "https://images.silpo.ua/products/300x300/webp/f2b1444c-8419-4472-9f7f-1358ceed1953.png",
      title: "Вафлі Gastone Lagо з фундуковим кремом",
      price: 16.99,
      gram: 45
    },
    {
      img: "https://images.silpo.ua/products/300x300/webp/bf592d5b-be85-4855-9098-ac72c4dd0899.png",
      title: "Цукерки Світоч Стожари класичні у темному шоколаді ",
      price: 164.00,
      gram: 196
    },
    {
      img: "https://images.silpo.ua/products/300x300/webp/71e20493-a5bb-4408-92d6-36c553af8e1b.png",
      title: "Печиво Biscotti бейкері з родзинками",
      price: 24.99,
      gram: 150,
      quantity: 0,
    }
  ])
  const updateBasket = (index, quantity) => {
    let copyBasket = basket.slice();
    copyBasket[index].quantity = quantity;
    setBasket(copyBasket);
  }

  useEffect(() => {
    let sum = 0;
    for (let item of basket) {
      sum += item.price * item.quantity
    }
    setTotalSum(sum)
  }, [basket])

  return (
    <div>

      <AppSort Sort={(e) => {
        setSort(e.target.value)
      }} />

      <AppSearch Search={(e) => {
        setSearch(e.target.value)
      }} />

      <h1 className="category-title">Солодощі</h1>
      <div className="App">
        {card.filter(item => {
          return item.title.includes(search);
        })
          .sort((a, b) => {
            if (sort == "Спочатку дешеві") {
              return a.price - b.price;
            }
            if (sort == "Спочатку дорожчі") {
              return b.price - a.price;
            }
            if (sort == "Від А до Я") {
              return a.title.localeCompare(b.title);
            }
            if (sort == "Від Я до А") {
              return b.title.localeCompare(a.title);
            }
          })
          .map((item) => (
            <Card
              title={item.title}
              image={item.img}
              price={item.price}
              gram={item.gram}
              addBusket={(item) => {
                for (let i = 0; i < basket.length; i++) {
                  if (basket[i].title == item.title) {
                    updateBasket(i, basket[i].quantity + 1)
                    return;
                  }
                }
                setBasket([...basket,
                  item
                ])
              }}
            />
          ))}

      </div>
      {basket.map((item, index) => (

        <AddBasket
          title={item.title}
          image={item.image}
          price={item.price}
          gram={item.gram}
          updateBasket={(quantity) => {
            updateBasket(index, quantity)
          }} />

      ))}
      <strong>{Math.round(totalSum * 100) / 100} грн</strong>

    </div>
  );
}

export default App;
