import { ADD_ITEM } from "./action";

interface State {
  items: string[];
}
const initialState: State = {
  items: [],
};

const itemReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default itemReducer;
