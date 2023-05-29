import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
interface Props {
  title: string;
  value: string;
  onChange: (value: any) => void;
  marginTop?: any;
  keyboardType?:any
}
const CustomTextInput: React.FC<Props> = (props: any) => {
  let {title, value, onChange, marginTop,keyboardType} = props;
  return (
    <View style={[styles.mainContainer, {marginTop: marginTop ?? 20}]}>
      {value !== '' && <Text style={styles.title}>{title}</Text>}
      <TextInput
        {...props}
        keyboardType={keyboardType??'default'}
        value={value}
        placeholder={title}
        onChangeText={onChange}

      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: '#DFDFDF',
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 12,
  },
});
