import { BUY_BOOK, PURCHASE_BOOK, BUY_20, BUY_ANY } from "./action"; // Import the action type constant

const initialState = {
  noofbook: 100
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK: // Compare to the action type constant
      return { ...state, noofbook: state.noofbook + 1 };
    case PURCHASE_BOOK: // Compare to the action type constant
      return { ...state, noofbook: state.noofbook - 1 };
    case BUY_20: // Compare to the action type constant
      return { ...state, noofbook: state.noofbook + 20 };
    case BUY_ANY: // Compare to the action type constant
      console.log("asdaaa");
      return { ...state, noofbook: state.noofbook + action.payload };

    default:
      return state;
  }
};

export default Reducer;
