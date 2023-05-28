import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

interface Props {
  onPress: () => void;
  image?: ImageSourcePropType;
  marginLeft?: number;
  imageTitle?: string;
  marginTop?: number;
}

const AddUserProfile: React.FC<Props> = (props: any) => {
  let {onPress, image, marginLeft, imageTitle, marginTop} = props;

  return (
    <View
      style={[
        styles.mainWraaper,

        {
          marginLeft: marginLeft,
          marginTop: marginTop,
        },
      ]}>
      <Pressable onPress={onPress} style={[styles.imageContainer]}>
        {!image?.uri ? (
          <>
            <Image
              source={require('../assets/images/user.png')}
              style={styles.userImage}
              resizeMode="contain"
            />
            <View
              style={{
                width: 30,
                height: 30,
                position: 'absolute',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                bottom: 0,
                right: 0,
              }}>
              <Image
                source={require('../assets/images/camera.png')}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            </View>
          </>
        ) : (
          <Image source={image} resizeMode="contain" style={styles.fastImage} />
        )}
      </Pressable>
    </View>
  );
};

export default AddUserProfile;
const styles = StyleSheet.create({
  mainWraaper: {
    width: 110,
    height: 110,
    borderRadius: 60,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#DFDFDF',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
  },
  fastImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
