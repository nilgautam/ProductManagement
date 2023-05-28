import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import InternalLoader from './internalLoader';

interface Props {
  text: string;
  height?: number;
  width?: number | string;
  borderRadius?: number;
  buttonColor?: string;
  textSize?: number;
  textColor?: string;
  textFontFamily?: string;
  image?: ImageSourcePropType;
  onPress: () => void;
  marginTop?: number | any;
  borderColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginHorizontal?: number;
  imageHeight?: number;
  imageWidth?: number;
  imageAlignSelf?: string;
  right?: number;
  isLoading?: boolean;
  loaderColor?: string;
  disable?: boolean;
  textRight?: number;
}

const CustomButton: React.FC<Props> = props => {
  const {
    text,
    height,
    width,
    borderRadius,
    buttonColor,
    textSize,
    textColor,
    textFontFamily,
    image,
    marginTop,
    onPress,
    borderColor,
    paddingHorizontal,
    paddingVertical,
    marginHorizontal,
    imageHeight,
    imageWidth,
    imageAlignSelf,
    right,
    isLoading,
    loaderColor,
    disable,
    textRight,
  } = props;

  return (
    <Pressable
      onPress={() => !isLoading && !disable && onPress()}
      style={[
        styles.buttonView,
        {
          height: height ?? 50,
          width: width,
          borderRadius: borderRadius ?? 5,
          backgroundColor: buttonColor ?? '#0bbd7d',
          marginTop: marginTop ?? 20,
          borderColor: borderColor ?? '#0bbd7d',
          borderWidth: 1,
          marginHorizontal: marginHorizontal,
        },
      ]}>
      {!isLoading ? (
        <>
          {image && (
            <View
              style={{
                flex: 0.5,
                alignItems: 'center',
                paddingRight: imageAlignSelf ? 10 : 0,
              }}>
              <Image
                source={image}
                resizeMode="contain"
                style={{
                  height: imageHeight ?? 30,
                  width: imageWidth ?? 30,
                  alignSelf: imageAlignSelf,
                  right: right,
                }}
              />
            </View>
          )}
          <View
            style={{
              flex: image ? 2.5 : 0,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: textSize ?? 16,
                color: textColor ?? 'white',

                paddingHorizontal: paddingHorizontal ?? 0,
                paddingVertical: paddingVertical ?? 0,
                right: textRight,
              }}>
              {text}
            </Text>
          </View>
        </>
      ) : (
        <InternalLoader colors={loaderColor ?? 'white'} />
      )}
    </Pressable>
  );
};
const itemPropsAreEqual = (prevProps: any, nextProps: any) => {
  return (
    prevProps.text == nextProps.text && prevProps.onPress == nextProps.onPress
  );
};

export default React.memo(CustomButton, itemPropsAreEqual);

const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#DFDFDF',
    shadowOffset: {
      width: 3,
      height: 0,
    },
    elevation: 5,
    flexDirection: 'row',
  },
});
