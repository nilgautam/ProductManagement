import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea';
import {Navigation} from 'react-native-navigation';
import CustomTextInput from '../../component/customeTextInput';
import LinkText from '../../component/linkText';
import CustomButton from '../../component/customButton';
import firebase from '../../firebase/firebase';

const setPassword = (props: any) => {
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  useEffect(() => {
    console.log('Props', props);
  }, [props]);
  return (
    <BaseSafeArea componentId={props.componentId} title="">
      <CustomTextInput
        title="Password"
        value={password}
        onChange={val => {
          setPassword(val);
        }}
      />
      <CustomTextInput
        title="Repeat Password"
        value={repassword}
        onChange={val => {
          setRePassword(val);
        }}
      />
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={{textAlign: 'center', color: 'black', fontSize: 16}}>
          Aleready have any account?
          <Text
            style={{
              color: 'green',
              textDecorationLine: 'underline',
              fontWeight: '400',
            }}>
            Login
          </Text>
        </Text>
        <CustomButton
          text="Sign Up"
          onPress={() => {
            if (password !== repassword) {
              Alert.alert("Password Doesn't Match");
            } else {
              firebase.signUpFirebase(
                props?.data?.email,
                password,
                props?.data?.name,
                props?.data?.surName,
                props?.data?.dob,
                props?.data?.phoneNumber,
                props?.data?.image,
              );
            }
          }}
        />
      </View>
    </BaseSafeArea>
  );
};

export default setPassword;

const styles = StyleSheet.create({});
