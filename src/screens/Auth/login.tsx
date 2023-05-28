import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea';
import CustomTextInput from '../../component/customeTextInput';

const login = (props: any) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
    <BaseSafeArea
      componentId={props.componentId}
      isHideBack
      containerView
      title="Log In">
      <CustomTextInput 
      title='Email'
      value={email}
    
      onChange={(val)=>{
        setEmail(val)
      }}
   

      
      />
    </BaseSafeArea>
  );
};

export default login;

const styles = StyleSheet.create({});
