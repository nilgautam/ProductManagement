import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea';
import AddUserProfile from '../../component/addUserProfile';
import CustomTextInput from '../../component/customeTextInput';
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../../component/customButton';
import firebase from '../../firebase/firebase';
import ShowError from '../../component/showError';

const register = (props: any) => {
  const phoneInput = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState();
  const [error, setError] = useState('');
  const getImage = (item: React.SetStateAction<undefined>) => {
    console.log('Hello Item', item);
    setImage(item);
    setError('');
  };
  const onContinue = () => {
    if (
      image == undefined ||
      name == '' ||
      surName == '' ||
      email == '' ||
      phoneNumber == '' ||
      dob == ''
    ) {
      setError('All field are require to fill');
    } else {
      let data = {
        image: image,
        name: name,
        surName: surName,
        email: email,
        phoneNumber: phoneNumber,
        dob: dob,
      };
      Navigation.push(props.componentId, {
        component: {
          name: 'setPassword',
          passProps: {data},
        },
      });
    }
  };
  return (
    <BaseSafeArea
      componentId={props.componentId}
      linkText="Login"
      title=""
      isScroll
      normalText="Already have an account?"
      onLinkPress={() => {
        Navigation.push(props.componentId, {
          component: {
            name: 'login',
          },
        });
      }}>
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
          setError('');
        }}
      />
      <CustomTextInput
        title="Surname"
        value={surName}
        onChange={val => {
          setSurName(val);
          setError('');
        }}
      />
      <CustomTextInput
        title="Email"
        value={email}
        onChange={val => {
          setEmail(val);
          setError('');
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
          setError('');
        }}
      />
      <CustomTextInput
        title="Birth Date"
        value={dob}
        onChange={val => {
          setDob(val);
          setError('');
        }}
      />
      <ShowError errorMessage={error} />

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <CustomButton
          text="Continue"
          onPress={() => {
            onContinue();
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

export default register;

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
