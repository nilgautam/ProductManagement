import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
interface Props {
  title: string;
  value: string;
  onChange: (value: any) => void;
  placeHolder: string;
}
const CustomTextInput: React.FC<Props> = (props: any) => {
  let {title, value, onChange, placeHolder} = props;
  return (
    <View style={styles.mainContainer}>
      {value !== '' && <Text style={styles.title}>{title}</Text>}
      <TextInput 
      {...props}
      
      value={value} placeholder={title} onChange={onChange} 
      
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: '#757b79',
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 12,
  },
});
