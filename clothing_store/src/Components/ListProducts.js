import { React } from "react";
import ShoppingCart from "./ShoppingCart";

function ListProducts({
  listProducts,
  cartItems,
  addProducts,
  removeProducts,
  deleteProducts
}) {

  const inCar = (value) => {
    return cartItems.find((x) => x.name === value.name);
  };

  return (
    <div className="containerOfList">
      <div className="divOfProducts">
        {listProducts.map((product, i) => {
          return (
            <div
              key={"id" + i}
              className="product-item"
              data-testid={"product-item-" + i}
            >
              <img className="img" src={product.image} alt="No in stock" />
              <div className="containerOfLabels">
                <label className="productLables">{product.id}</label>
                <label className="productLables">{product.name}</label>
                <label className="productLables">Price: ${product.price}</label>
                <label className="productLables">
                  In the cart: {product.quantity}
                </label>
                {!inCar(product) ? (
                  <button
                    className="addButton"
                    data-testid="btn-item-add"
                    onClick={() => addProducts(product)}
                  >
                    Add to cart
                  </button>
                ) : (
                  <button
                    className="removeButton"
                    data-testid="btn-item-remove"
                    onClick={() => deleteProducts(product)}
                  >
                    Remove in cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="containerShoppingCart">
        <ShoppingCart
          cartItems={cartItems}
          addProducts={addProducts}
          removeProducts={removeProducts}
        />
      </div>
    </div>
  );
}

export default ListProducts;
