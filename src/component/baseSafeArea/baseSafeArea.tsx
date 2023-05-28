import AppBar from '../appBar/appBar';

import React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import LinkText from '../linkText';

export interface Props {
  children?: React.ReactNode;
  isHideAppBar?: boolean;
  appBackgroundColor?: string;
  backgroundColor?: string;
  sideMenuBackgroundColor?: string;
  title?: string | undefined;
  isHideBack?: boolean;
  rightIcon?: ImageSourcePropType;
  leftIcon?: any;
  titleColor?: string;
  componentId: any;
  isScroll?: boolean;
  padding?: any;
  leftIconPress?: any;
  sourceBg?: ImageSourcePropType;
  centerIcon?: ImageSourcePropType;
  rightIconPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  rightTitlePress?: null | ((event: GestureResponderEvent) => void) | undefined;
  prevScreenName?: string;
  paddingHorizontal?: any;
  tintColor?: any;
  rightTitle?: any;
  titlePress?: any;
  leftIconTintColor?: string | undefined;
  containerView?: any;
  centerIconHeight?: number;
  centerIconWidth?: number;
  rightIconHeight?: number;
  rightIconWidth?: number;
  marginTop?: number;
  leftIconHeight?: number;
  leftIconWidth?: number;
  downloadCount?: any;
  divider?: boolean;
  titleSize?: number;
  notificationImage?: ImageSourcePropType;
  count?: string;
  countNumber?: number;
  containerMarginLeft?: number;
  onClickNotification?: () => void;
  dividerMarginTop?: number;
  notificationImgmarginLeft?: number;
  viewBackroundColor?: string;
  normalText?: string;
  linkText?: string;
  onLinkPress?: () => void;
}

const BaseSafeArea: React.FC<Props> = props => {
  let {
    isHideAppBar,
    appBackgroundColor,
    backgroundColor,
    title,
    isHideBack,
    rightIcon,
    leftIcon,
    titleColor,
    componentId,
    isScroll,
    padding,
    leftIconPress,
    rightIconPress,
    rightTitlePress,
    sourceBg,
    centerIcon,
    prevScreenName,
    paddingHorizontal,
    tintColor,
    rightTitle,
    titlePress,
    leftIconTintColor,
    containerView,
    centerIconHeight,
    centerIconWidth,
    rightIconHeight,
    rightIconWidth,
    marginTop,
    leftIconHeight,
    leftIconWidth,
    downloadCount,
    divider,
    titleSize,
    notificationImage,
    count,
    countNumber,
    containerMarginLeft,
    onClickNotification,
    dividerMarginTop,
    notificationImgmarginLeft,
    sideMenuBackgroundColor,
    viewBackroundColor,
    normalText,
    linkText,
    onLinkPress,
  } = props;

  const _scrollRender = () => {
    return isScroll === true ? (
      <ScrollView
        scrollEnabled={isScroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
            backgroundColor: 'white',
          }}>
          {props.children}
        </View>
      </ScrollView>
    ) : (
      _viewRender()
    );
  };

  const _viewRender = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: viewBackroundColor,
        }}>
        {props.children}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* <SideMenuView
        style={{flex: 1, backgroundColor: sideMenuBackgroundColor}}
        drawerName={screenName.DrawerNavigate}
        direction={'left'}
        passProps={{
          animationOpenTime: 300,
          animationCloseTime: 300,
          dismissWhenTouchOutside: true,
          fadeOpacity: 0.6,
          drawerScreenWidth: '75%',
          drawerScreenHeight: '100%',
          parentComponentId: props.componentId,
          style: {
            backgroundColor: 'white',
          },
        }}
        options={{
          layout: {
            componentBackgroundColor: 'transparent',
          },
        }}> */}
      {!isHideAppBar && (
        <AppBar
          backgroundColor={appBackgroundColor}
          title={title}
          isHideBack={isHideBack}
          rightIcon={rightIcon}
          leftIcon={leftIcon}
          titleColor={titleColor}
          componentId={componentId}
          leftIconPress={leftIconPress}
          rightIconPress={rightIconPress}
          centerIcon={centerIcon}
          prevScreenName={prevScreenName}
          rightTitle={rightTitle}
          backArrowColor={leftIconTintColor}
          tintColor={tintColor}
          titlePress={titlePress}
          containerView={containerView}
          centerIconHeight={centerIconHeight}
          centerIconWidth={centerIconWidth}
          rightIconWidth={rightIconWidth}
          rightIconHeight={rightIconHeight}
          marginTop={marginTop}
          leftIconHeight={leftIconHeight}
          leftIconWidth={leftIconWidth}
          titleSize={titleSize}
          notificationImage={notificationImage}
          downloadCount={downloadCount}
          count={count}
          countNumber={countNumber}
          containerMarginLeft={containerMarginLeft}
          onClickNotification={onClickNotification}
          notificationImgmarginLeft={notificationImgmarginLeft}
          linkText={linkText}
          normalText={normalText}
          onLinkPress={onLinkPress}
        />
      )}

      {_scrollRender()}
      {/* {sourceBg ? _bgImage() : _scrollRender()} */}
      {/* </SideMenuView> */}
    </SafeAreaView>
  );
};

export default React.memo(BaseSafeArea);

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
});
