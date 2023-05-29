import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Keyboard,
  Pressable,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {Navigation} from 'react-native-navigation';
import LinkText from '../linkText';

export interface Props {
  backgroundColor?: string;
  title?: string;
  isHideBack?: boolean;
  rightIcon?: ImageSourcePropType;
  leftIcon?: any;
  leftIconPress?: any;
  rightIconPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  rightTitlePress?: (() => void) | null | undefined;
  titleColor?: string;
  componentId: any;
  centerIcon?: ImageSourcePropType;
  prevScreenName?: any;
  tintColor?: any;
  rightTitle?: any;
  titlePress?: any;
  backArrowColor?: any;
  containerView?: any;
  centerIconHeight?: number;
  centerIconWidth?: number;
  rightIconWidth?: number;
  rightIconHeight?: number;
  marginTop?: number;
  leftIconHeight?: number;
  leftIconWidth?: number;
  downloadCount?: string;
  titleSize?: number;
  notificationImage?: ImageSourcePropType;
  count?: string;
  countNumber?: number;
  containerMarginLeft?: number;
  onClickNotification?: () => void;
  notificationImgmarginLeft?: number;
  isHideLeft?: number;
  normalText?: string;
  linkText?: string;
  onLinkPress?: () => void;
}
const AppBar: React.FC<Props> = (props: any) => {
  let {
    backgroundColor,
    title,
    rightIcon,
    titleColor,
    leftIcon,
    isHideBack,
    componentId,
    leftIconPress,
    rightIconPress,
    rightTitle,
    rightTitlePress,
    centerIcon,
    prevScreenName,
    tintColor,
    titlePress,
    backArrowColor,
    containerView,
    centerIconHeight,
    centerIconWidth,
    rightIconWidth,
    rightIconHeight,
    marginTop,
    leftIconHeight,
    leftIconWidth,
    downloadCount,
    titleSize,
    notificationImage,
    count,
    countNumber,
    containerMarginLeft,
    onClickNotification,
    notificationImgmarginLeft,
    isHideLeft,
    normalText,
    linkText,
    onLinkPress,
  } = props;
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      {!isHideBack && (
        <Pressable
          style={{padding: 5, flexDirection: 'row'}}
          onPress={() => {
            leftIcon ? leftIconPress() : Navigation.pop(componentId);
          }}>
          <Image
            resizeMode="contain"
            source={leftIcon ?? require('../../assets/images/ic_back.png')}
            style={{
              height: leftIconHeight ?? 20,
              width: leftIconWidth ?? 20,
            }}
          />
          <Text style={styles.tvBackTitle}>{prevScreenName ?? 'Back'}</Text>
        </Pressable>
      )}

      <View
        style={[
          styles.titleView,
          {justifyContent: title ? 'space-between' : 'flex-end'},
        ]}>
        {title && (
          <Pressable style={{right: isHideLeft}} onPress={titlePress}>
            <Text
              style={{
                color: titleColor ?? 'black',

                fontSize: 20,
                fontWeight: '700',
                marginLeft: isHideBack ? 2 : 15,
                // textTransform: 'capitalize',
              }}>
              {title ?? ''}
            </Text>
          </Pressable>
        )}

        {linkText && (
          <View
            style={{
              marginLeft: containerMarginLeft ?? 0,
              // backgroundColor: 'red',
              alignSelf: 'flex-end',
            }}>
            <LinkText
              linkText={linkText}
              onPress={onLinkPress}
              normalText={normalText}
            />
          </View>
        )}
      </View>

      {/* <View style={styles.rightIconView}>
        {rightTitle && (
          <Text style={styles.tvBackTitle} onPress={rightTitlePress}>
            {rightTitle}
          </Text>
        )}
        {rightIcon && (
          <Pressable style={{}} onPress={rightIconPress}>
            <Image
              resizeMode="contain"
              source={rightIcon}
              style={{
                height: rightIconHeight ?? 20,
                width: rightIconWidth ?? 20,
                tintColor: tintColor,
              }}
            />
          </Pressable>
        )}
      </View> */}
    </View>
  );
};

export default AppBar;
