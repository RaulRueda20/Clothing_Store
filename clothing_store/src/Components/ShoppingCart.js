import { useState } from "react";
import ModalBuy from '../Utils/Modal'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

function ShoppingCart({ cartItems, addProducts, removeProducts }) {
  const [discounts, setDiscounts] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setDiscounts(event.target.value);
  };

  const handleModal = () =>{
    setOpen(true);
  }

  const handleClose = () => setOpen(false);

  const subtotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  const discountPrice = subtotal * discounts;

  const total = subtotal - discountPrice;

  return cartItems.length === 0 ? null : (
    <div>
      <TableContainer
        sx={{ height: "280px", overflowX: "hidden" }}
        component={Paper}
      >
        <Table aria-label="productsTable">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item, idx) => {
              return (
                <TableRow
                  key={"idx" + idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  data-testid={"cart-item-" + idx}
                >
                  <TableCell scope="row">{item.id.slice(3)}</TableCell>
                  <TableCell scope="row" data-testid="cart-item-name">
                    {item.name}
                  </TableCell>
                  <TableCell scope="row" data-testid="cart-item-quantity">
                    <div className="quantityDiv">
                      {item.quantity}
                      <button
                        className="plusButton"
                        onClick={() => addProducts(item)}
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        className="minusButton"
                        onClick={() => removeProducts(item)}
                      >
                        {" "}
                        -{" "}
                      </button>
                    </div>
                  </TableCell>
                  <TableCell scope="row" data-testid="cart-item-price">
                    ${item.price}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="containerOfDiscounts">
        <Box sx={{ minWidth: 80, marginLeft: "10px" }}>
          <FormControl fullWidth>
            <InputLabel id="discounts">Discounts</InputLabel>
            <Select
              labelId="cardDiscounts"
              data-testid="cart-discount"
              value={discounts}
              label="Discounts"
              onChange={(event) => handleChange(event)}
            >
              <MenuItem value={0}>No discount</MenuItem>
              <MenuItem value={0.1}>10%</MenuItem>
              <MenuItem value={0.2}>20%</MenuItem>
              <MenuItem value={0.5}>50%</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <TableContainer
        sx={{ height: "120px", overflowX: "hidden" }}
        component={Paper}
      >
        <Table aria-label="priceTable">
          <TableHead>
            <TableRow>
              <TableCell>Subtotal</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={"idx"}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row" data-testid="cart-subtotal">
                ${subtotal}
              </TableCell>
              <TableCell scope="row" data-testid="cart-discount">
                ${discountPrice}
              </TableCell>
              <TableCell scope="row" data-testid="cart-total">
                ${total}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className="containerButtonBuy">
        <button className="buyButton" onClick={handleModal}>Buy</button>
      </div>
      <ModalBuy open={open} handleClose={handleClose}/>
    </div>
  );
}

export default ShoppingCart;