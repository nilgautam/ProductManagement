import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  errorMessage: string;
  marginTop?: number;
  marginLeft?: number;
}
const ShowError: React.FC<Props> = (props: any) => {
  let {errorMessage, marginTop, marginLeft} = props;
  return (
    <View
      style={{
        marginTop: marginTop ?? 0,
        marginLeft: marginLeft ?? 0,
      }}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

export default ShowError;
const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    backgroundColor: 'transparent',
    fontSize: 11,
    
  },
});