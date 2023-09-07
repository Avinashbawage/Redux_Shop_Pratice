import React, { useState } from "react";
import Buybook2, { Purchase_Book, Buy_20, Buy_any } from "../reducer/action";
import { useDispatch, useSelector } from "react-redux";

const BookShop = () => {
  const alldata = useSelector((state) => state.noofbook);
  const dispatch = useDispatch();
  const [inputValue, setIntervalue] = useState();
  return (
    <>
      <div>No of Books: {alldata} </div>
      <br />
      <div>
        <button onClick={() => dispatch(Buybook2())}>Buy Now +</button>
        <br />
        <br />
        <button onClick={() => dispatch(Purchase_Book())}>Sale Now -</button>
        <br />
        <br />
        <button onClick={() => dispatch(Buy_20())}>Buy Now 20</button>
        <br />
        <br />
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setIntervalue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(Buy_any(inputValue))}>
          Buy {inputValue}
        </button>
      </div>
    </>
  );
};

export default BookShop;
