import { useState, useEffect } from "react";
import Header from "./Utils/Header";
import ListProducts from "./Components/ListProducts";
import traje1 from "./Images/traje1.jpeg";
import traje2 from "./Images/traje2.jpeg";
import traje3 from "./Images/traje3.jpeg";
import traje4 from "./Images/traje4.jpeg";
import traje5 from "./Images/traje5.jpeg";
import traje6 from "./Images/traje6.jpeg";

function App() {
  const [listProducts, setListProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let uniqueId = (function () {
      let st = new Date();
      return function (prefix) {
        var t = new Date() - st,
          r = Math.floor(Math.random() * 1000),
          str;
        prefix = String(prefix) || "";
        str = t + "-" + r;
        return prefix + str;
      };
    })();

    let listOfSuits = [
      {
        id: uniqueId("id: "),
        name: "Oxford Ocean",
        price: 2930,
        image: traje1,
        quantity: 0,
      },
      {
        id: uniqueId("id: "),
        name: "Oxford Night",
        price: 4930,
        image: traje2,
        quantity: 0,
      },
      {
        id: uniqueId("id: "),
        name: "Oxford Aqua",
        price: 3930,
        image: traje3,
        quantity: 0,
      },
      {
        id: uniqueId("id: "),
        name: "Oxford Ligth",
        price: 1930,
        image: traje4,
        quantity: 0,
      },
      {
        id: uniqueId("id: "),
        name: "Oxford knigth",
        price: 6530,
        image: traje5,
        quantity: 0,
      },
      {
        id: uniqueId("id: "),
        name: "Oxford classic",
        price: 4535,
        image: traje6,
        quantity: 0,
      },
    ];
    setListProducts(listOfSuits);
  }, []);

  const addProducts = (product) => {
    const exist = cartItems.find((x) => x.name === product.name);
    // console.log(cartItems.find((x) => x.id === item.id));
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.name === product.name
            ? { ...exist, quantity: exist.quantity + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeProducts = (product) => {
    const exist = cartItems.find((x) => x.name === product.name);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.name !== product.name));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.name === product.name
            ? { ...exist, quantity: exist.quantity - 1 }
            : x
        )
      );
    }
  };

  const deleteProducts = (product) =>{
    const exist = cartItems.find((x) => x.name === product.name);
    if(exist){
      setCartItems(cartItems.filter((x) => x.name !== product.name));
    }
  }

  return (
    <div className="principalContainer">
      <Header />
      <ListProducts
        listProducts={listProducts}
        cartItems={cartItems}
        addProducts={addProducts}
        removeProducts={removeProducts}
        deleteProducts={deleteProducts}
      />
    </div>
  );
}

export default App;
