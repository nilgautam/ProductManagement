import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import firebase from '../../firebase/firebase';

const Spalsh = (props: any) => {
  useEffect(() => {
    firebase.app;
    setTimeout(() => {
      Navigation.setRoot({root: {component: {name: 'register'}}});
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Product Management</Text>
      <Text style={styles.text2}>By Nilesh Gautam</Text>
    </SafeAreaView>
  );
};

export default Spalsh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  text1: {
    fontSize: 30,
    color: 'black',
  },
  text2: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'flex-end',
  },
});
