import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface Props {
  normalText?: string;
  linkText: string;
  onPress: () => void;
}
const LinkText: React.FC<Props> = (props: any) => {
  let {normalText, linkText, onPress} = props;
  return (
    <View>
      {normalText && <Text style={styles.normalText}>{normalText}</Text>}
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
    color: '#757b79',
    fontWeight: '400',
  },
  linkText: {
    fontSize: 16,
    color: '#0bbd7d',
    fontWeight: '400',
  },
});
