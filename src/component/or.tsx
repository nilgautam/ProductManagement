import {StyleSheet, Text, View} from 'react-native';
import React from 'react';



const OR = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View>
        <Text style={styles.tvOr}>OR</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default OR;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#DFDFDF',
    marginTop: 40,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#DFDFDF',
  },
  tvOr: {
    textAlign: 'center',
   
    fontSize: 18,
    color:'#DFDFDF',
    paddingHorizontal: 10,
  },
});
