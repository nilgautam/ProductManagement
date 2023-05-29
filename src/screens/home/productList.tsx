import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea'
import { useSelector } from 'react-redux';

const ProductList = (props:any) => {
    const [productList,setProductList] = useState([])
    const getItemReducer = useSelector(state => state.items);

  useEffect(() => {
    console.log('getItemReducer', getItemReducer);
    setProductList(getItemReducer)
  }, [getItemReducer]);
  return (
 <BaseSafeArea componentId={props.componentId}>
 <FlatList
 data={productList}
 renderItem={(item)=>{
    return(
        <View>

        <Text>
            {item?.productName}
        </Text>
        </View>
    )
 }}
 
 />
 </BaseSafeArea>
  )
}

export default ProductList

const styles = StyleSheet.create({})