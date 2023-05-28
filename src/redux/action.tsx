export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (item: string) => ({
  type: ADD_ITEM,
  payload: item,
});