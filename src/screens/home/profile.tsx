import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea';
import CustomTextInput from '../../component/customeTextInput';
import CustomButton from '../../component/customButton';
import PhoneInput from 'react-native-phone-number-input';
import AddUserProfile from '../../component/addUserProfile';
import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import AsyncStorage from '../../storage/AsyncStorage';

const profile = (props: any) => {
  const phoneInput = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState();
  const getImage = (item: React.SetStateAction<undefined>) => {
    console.log('Hello Item', item);
    setImage(item);
  };
  useEffect(() => {
    AsyncStorage.getData('user')
      .then(data => {
        console.log('user data found', data);
        setName(data?.name);
        setSurName(data?.surName);
        setDob(data?.dob);
        setPhoneNumber(data?.phoneNumber);
        phoneInput.current.state.number = data?.phoneNumber?.slice(4);
        setEmail(data?.email);
        setImage(data?.profile);
      })
      .catch(err => {
        console.log('errorrrr', err);
      });
  }, []);
  useEffect(() => {
    console.log('PHoneNumber', phoneNumber?.slice(0, 3), phoneInput);
  }, [phoneNumber]);
  return (
    <BaseSafeArea componentId={props?.componentId} title="Profile" isScroll>
      <AddUserProfile
        image={{uri: image?.url}}
        onPress={() => {
          let propsData = {
            getImage: getImage,
          };
          Navigation.showModal({
            stack: {
              children: [
                {
                  component: {
                    id: 'CameraAndGallery',
                    name: 'CameraAndGallery',
                    passProps: {propsData},
                    options: {
                      overlay: {
                        interceptTouchOutside: true, // this make touch events pass through the invisible parts of the overlay
                      },
                      modalPresentationStyle:
                        OptionsModalPresentationStyle.overCurrentContext,
                      // screenBackgroundColor: 'red',

                      layout: {
                        backgroundColor: '#25222238',
                        componentBackgroundColor: '#25222238',
                        orientation: ['portrait'],
                      },
                    },
                  },
                },
              ],
            },
          });
        }}
      />
      <CustomTextInput
        title="Name"
        value={name}
        onChange={val => {
          setName(val);
        }}
      />
      <CustomTextInput
        title="Surname"
        value={surName}
        onChange={val => {
          setSurName(val);
        }}
      />
      <CustomTextInput
        keyboardType={'email'}
        title="Email"
        value={email}
        onChange={val => {
          setEmail(val);
        }}
      />
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
      />
      <CustomTextInput
        title="Birth Date"
        value={dob}
        keyboardType={'number-pad'}
        onChange={val => {
          setDob(val);
        }}
      />

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <CustomButton
          text="Continue"
          onPress={() => {
            var object = {
              profile: image,
              name: name,
              surName: surName,
              email: email,
              phoneNumber: phoneNumber,
              dob: dob,
            };
            AsyncStorage.storeData('user', object);
            //   firebase.signUpFirebase(
            //     email,
            //     password,
            //     name,
            //     surName,
            //     dob,
            //     phoneNumber,
            //   );
          }}
        />
      </View>
    </BaseSafeArea>
  );
};

export default profile;
const styles = StyleSheet.create({
  phoneContainer: {
    height: 60,
    borderRadius: 5,
    color: 'white',
    width: '100%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DFDFDF',
  },
  textInput: {
    paddingVertical: 0,
    borderRadius: 5,
    color: 'black',
    paddingHorizontal: 0,
    backgroundColor: 'white',
  },
});
