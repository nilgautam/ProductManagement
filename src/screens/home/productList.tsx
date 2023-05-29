import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea';
import {useSelector} from 'react-redux';

const ProductList = (props: any) => {
  const [productList, setProductList] = useState([]);
  const getItemReducer = useSelector(state => state.items);

  useEffect(() => {
    console.log('getItemReducer', getItemReducer);
    setProductList(getItemReducer);
  }, [getItemReducer]);
  return (
    <BaseSafeArea componentId={props.componentId}>
      <FlatList
        data={productList}
        renderItem={({item}) => {
          console.log('itemmmmm', item);
          return (
            <View
              style={{
                width: '100%',
                padding: 5,
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                marginBottom: 10,
              }}>
              <Image
                source={{uri: item?.productImage?.url}}
                style={{height: 50, width: 50, borderRadius: 25}}
              />
              <View style={{flex: 1, marginLeft: 10}}>
                <Text>Product Name : {item?.productName}</Text>
                <Text>Description : {item?.productDescription}</Text>
                <Text>Product Status : {item?.status}</Text>
              </View>
            </View>
          );
        }}
      />
    </BaseSafeArea>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
