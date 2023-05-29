// reducer.ts
import {ActionTypes, AddItemAction} from './action';

// Define the initial state
export interface AppState {
  items: string[]; // Update the type according to your needs
}

const initialState: AppState = {
  items: [],
};

// Define the reducer function
const reducer = (state = initialState, action: AddItemAction): AppState => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      console.log('stateee', state.items, action.payload.item);
      var arr = state.items;
      arr.push(action.payload.item);
      console.log('new', arr);
      return {
        ...state,
        items: arr,
      };
    default:
      return state;
  }
};

export default reducer;
