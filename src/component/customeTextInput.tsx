import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';

interface Props {
  title: string;
  value: string;
  onChange: (value: any) => void;
  marginTop?: any;
  keyboardType?: any;
  date?: any;
  setDob?: (item: string) => void;
}
const CustomTextInput: React.FC<Props> = (props: any) => {
  let {title, value, onChange, marginTop, keyboardType, date, setDob} = props;
  const [showPicker, setShowPicker] = useState(false);
  const [dob, setDate] = useState(Date());

  return (
    <View style={[styles.mainContainer, {marginTop: marginTop ?? 20}]}>
      {value !== '' && <Text style={styles.title}>{title}</Text>}
      <TextInput
        {...props}
        keyboardType={keyboardType ?? 'default'}
        value={value}
        placeholder={date ? '01/01/1996' : title}
        maxLength={date ? 10 : 100}
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
