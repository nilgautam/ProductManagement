import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea';
import CustomTextInput from '../../component/customeTextInput';
import CustomButton from '../../component/customButton';
import PhoneInput from 'react-native-phone-number-input';
import AddUserProfile from '../../component/addUserProfile';
import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

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
  return (
    <BaseSafeArea componentId={props?.componentId} title="Profile">
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
        onChange={val => {
          setDob(val);
        }}
      />

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <CustomButton
          text="Continue"
          onPress={() => {
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
