import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea';
import CustomTextInput from '../../component/customeTextInput';
import LinkText from '../../component/linkText';
import CustomButton from '../../component/customButton';
import OR from '../../component/or';
import {Navigation} from 'react-native-navigation';

const login = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <BaseSafeArea
      componentId={props.componentId}
      isHideBack
      containerView
      title="Log In"
      linkText="Sign Up"
      normalText="Not a member"
      onLinkPress={() => {
        Navigation.push(props.componentId, {
          component: {
            name: 'register',
          },
        });
      }}>
      <CustomTextInput
        title="Email"
        value={email}
        onChange={val => {
          setEmail(val);
        }}
      />
      <CustomTextInput
        title="Password"
        value={password}
        onChange={val => {
          setPassword(val);
        }}
      />

      <View
        style={{
          alignItems: 'flex-end',

          marginTop: 10,
        }}>
        <LinkText linkText="Forgot Password" onPress={() => {}} />
      </View>

      <CustomButton text="Log In" onPress={() => {}} />
      <OR />

      <CustomButton
        text="Sign In With Google"
        onPress={() => {}}
        borderColor="#DFDFDF"
        buttonColor="white"
        textColor="black"
        image={require('../../assets/images/search.png')}
      />
      <CustomButton
        text="Sign In With Facebook"
        onPress={() => {}}
        borderColor="#DFDFDF"
        buttonColor="white"
        textColor="black"
        image={require('../../assets/images/facebook.png')}
      />

      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
        <Image
          source={require('../../assets/images/face-recognition.png')}
          style={{width: 50, height: 50, tintColor: 'gray'}}
        />
        <Text style={{color: 'black', marginTop: 10}}>Face Id</Text>

        <LinkText
          normalText="By continuing agree to our"
          linkText="Term & Condition"
          onPress={() => {}}
          marginTop={20}
          normalTextColor="black"
        />
      </View>
    </BaseSafeArea>
  );
};

export default login;

const styles = StyleSheet.create({});
