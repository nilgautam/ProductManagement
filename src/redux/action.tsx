// actions.ts
import { Action } from 'redux';

// Define action types
export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
}

// Define action interfaces
export interface AddItemAction extends Action<ActionTypes.ADD_ITEM> {
  payload: {
    item: string; // Update the type according to your needs
  };
}

// Define action creators
export const addItem = (item: string): AddItemAction => ({
  type: ActionTypes.ADD_ITEM,
  payload: { item },
});
