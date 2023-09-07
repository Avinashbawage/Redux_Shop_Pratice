export const BUY_BOOK = "BUY_BOOK";
export const PURCHASE_BOOK = "PURCHASE_BOOK";
export const BUY_20 = "BUY_20";
export const BUY_ANY = "BUY_ANY";
// Use a constant for action type

export const Purchase_Book = () => {
  return {
    type: PURCHASE_BOOK
  };
};

export const Buy_20 = () => {
  return {
    type: BUY_20
  };
};

export const Buy_any = (e) => {
  console.log("asd", e);
  return {
    type: BUY_ANY,
    payload: e
  };
};

const Buybook2 = () => {
  return {
    type: BUY_BOOK // Use the constant here
  };
};

export default Buybook2;
