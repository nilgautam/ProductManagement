import React, { useEffect } from 'react';
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import customButton from './customButton';

import ImageCropPicker from 'react-native-image-crop-picker';
import { Navigation } from 'react-native-navigation';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PERMISSIONS, request, openSettings } from 'react-native-permissions';
import CustomButton from './customButton';

const CameraAndGallery = (props: any) => {
  const _openCamera = async () => {
    launchCamera({
      mediaType: 'mixed',
      includeBase64: true,
      maxWidth: 500,
      maxHeight: 500,
    })
      .then((result: any) => {
        if (result?.assets) {
          let resultPicker = result?.assets[0];

          ImageCropPicker?.openCropper({
            mediaType: 'photo',
            path: result?.assets[0]?.uri,
            width: 500,
            height: 500,
            includeBase64: true
          }).then(resultPicker => {
            if (resultPicker) {
              let data = {
                isAvtar: false,
                type: resultPicker?.mime,
                url: resultPicker.path,
                imageName: resultPicker.path,
                base64: result?.data
              };
              return props?.propsData?.getImage(data);
            }
          });

          // if (resultPicker) {
          //       let data: imageVideoModal = {
          //         isAvtar: false,
          //         type: resultPicker?.type,
          //         id: Utils._getRandomId()+resultPicker.path,
          //         url: resultPicker.uri,
          //         imageName:resultPicker?.fileName

          //       };
          //       return props?.propsData?.getImage(data);
          //     }
        }
      })
      .catch(err => { });

    await _dismissModel();
  };
  const _openCameraFromPost = async () => {
    launchCamera({
      mediaType: 'mixed',
      includeBase64: true,
    })
      .then((result: any) => {
        let pickImg = result?.assets[0];
        let arr = [];
        if (pickImg) {
          let data = {
            isAvtar: false,
            type: pickImg?.type == 'image/jpeg' ? 'Image' : 'Video',
            id: pickImg.uri,
            url: pickImg.uri,
            imageName: pickImg?.fileName,
            mime: pickImg?.type,
            base64: result?.data
          };
          arr.push(data);
          return props?.propsData?.getImage(arr);
        }
      })
      .catch(err => { });

    await _dismissModel();
  };

  const _openGallery = async () => {
    const result: any = await ImageCropPicker.openPicker({
      mediaType: 'photo',
      width: 500,
      height: 500,
      cropping: true,
      includeBase64: true,
    });
    await _dismissModel();
    // let resultPicker = result?.assets[0]
    if (result) {
      let data = {
        isAvtar: false,
        type: result?.mime,
        id: result.path,
        url: result.path,
        imageName: result.path,
        base64: result?.data
      };
      return props?.propsData?.getImage(data);
    }
  };

  const _dismissModel = () => {
    Navigation.dismissModal('CameraAndGallery');
  };
  const getAvtar = (item: any) => {
    _dismissModel();
    item.isAvtar = true;
    return props?.propsData?.getImage(item);
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.bottom_view}>
        <TouchableOpacity
          style={styles.dismiss_button_style}
          onPress={() => {
            _dismissModel();
          }}
          hitSlop={{
            top: 500,
            bottom: 10,
            right: 300,
            left: 300,
          }}></TouchableOpacity>

        <CustomButton
          onPress={() => {
            request(PERMISSIONS.ANDROID.CAMERA || PERMISSIONS.IOS.CAMERA)
              .then(result => {
                if (result == 'granted') {
                  props?.propsData?.multipleImage
                    ? _openCameraFromPost()
                    : _openCamera();
                } else if (result == 'blocked') {
                  openSettings();
                } else {
                  request(PERMISSIONS.ANDROID.CAMERA || PERMISSIONS.IOS.CAMERA);
                }
              })
              .catch(err => { });
          }}
          image={require('../assets/images/camera.png')}
          text={'Take a photo'}
          imageHeight={25}
          imageWidth={25}
        />
        <CustomButton
          onPress={() => {
            request(
              PERMISSIONS.ANDROID.READ_MEDIA_IMAGES ||
              PERMISSIONS.ANDROID.READ_MEDIA_VIDEO ||
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            )
              .then(result => {
                if (result == 'granted') {
                  props.propsData?.multipleImage;

                  _openGallery();
                } else if (result == 'blocked') {
                  openSettings();
                } else if (result == 'unavailable') {
                  _openGallery();
                } else {
                  request(
                    PERMISSIONS.ANDROID.READ_MEDIA_IMAGES ||
                    PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
                  );
                }
              })
              .catch(err => { });
          }}
          image={require('../assets/images/photo-gallery.png')}
          text={'Upload from Gallery'}
          imageHeight={25}
          imageWidth={25}
        />

        <Pressable
          style={{ position: 'absolute', right: 15, top: 15 }}
          onPress={() => { }}>
          <Image
            source={require('../assets/images/close.png')}
            style={{
              width: 30,
              height: 30,
            }}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default CameraAndGallery;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-end',

    // marginBottom: 10,
  },
  tvMsg: {},
  bottom_view: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    // paddingBottom: 5)
  },
  dismiss_button_style: {
    backgroundColor: 'black',
    width: 60,
    height: 3,
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
});
