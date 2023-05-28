import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface Props {
  normalText?: string;
  linkText: string;
  onPress: () => void;
  normalTextColor?: string;
  marginTop?: number;
}
const LinkText: React.FC<Props> = (props: any) => {
  let {normalText, linkText, onPress, normalTextColor, marginTop} = props;
  return (
    <View style={{alignItems: 'center', marginTop: marginTop}}>
      {normalText && (
        <Text
          style={[styles.normalText, {color: normalTextColor ?? '#757b79'}]}>
          {normalText}
        </Text>
      )}
      <Text onPress={onPress} style={styles.linkText}>
        {linkText}
      </Text>
    </View>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  normalText: {
    fontSize: 12,

    fontWeight: '400',
  },
  linkText: {
    fontSize: 16,
    color: '#0bbd7d',
    fontWeight: '400',
  },
});
