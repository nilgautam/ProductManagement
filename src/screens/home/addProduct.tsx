import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/action';

const addProduct = () => {
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem('New Item'));
  };

  return (
    <View>
      <Text>Items:</Text>
      {items.map((item: string, index: number) => (
        <Text key={index}>{item}</Text>
      ))}
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

export default addProduct;
