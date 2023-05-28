import auth, { firebase } from '@react-native-firebase/auth';
import { Navigation } from 'react-native-navigation';
import { Alert } from 'react-native';


const firebaseConfig = {
    apiKey: 'AIzaSyAGWMx9vKA0aek3n3qHmPq2kDNxh3pxkeE',
    authDomain: 'product-management-872e9',
    databaseURL: 'YOUR_FIREBASE_DATABASE_URL',
    projectId: 'product-management-872e9',
    storageBucket: 'product-management-872e9.appspot.com',
    messagingSenderId: 'YOUR_FIREBASE_MESSAGING_SENDER_ID',
    appId: '1:285652088799:android:09d1ecfdf6ac0ecfa3f66a',
    measurementId: 'YOUR_FIREBASE_MEASUREMENT_ID',
};

const app = firebase.initializeApp(firebaseConfig);


const signUpFirebase = (email: string, pass: string, name: string, surName: string, dob: string, phoneNumber: string) => {

    auth()
        .createUserWithEmailAndPassword(email, pass)
        .then((result) => {
            console.log('User account created & signed in!');
            result.user.sendEmailVerification().then(() => {
                console.log('sendEmailVerification');
                Alert.alert('Alert', 'Please verify your email', [
                    {
                        text: 'OK', onPress: () => Navigation.setRoot({
                            root: {
                                component: {
                                    name: 'login'
                                }
                            }
                        })
                    },

                ], { cancelable: false });
            }).catch(err => {
                console.log('Error:', err);
            })

        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                Alert.alert('Error!', 'That email address is already in use!')
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                Alert.alert('Error!', 'That email address is invalid!')
            }

            console.error(error);
        });
}


const loginFirebase = (email: string, pass: string) => {

    auth().signInWithEmailAndPassword(email, pass).then((result) => {
        console.log('User account Login');
        if (result?.user?.emailVerified) {
            // Navigation add according to need
            Navigation.setRoot({ root: { component: { name: 'Home' } } })
        } else {
            Alert.alert('Error!', 'Email not verified')
        }
    })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                Alert.alert('Error!', 'That email address is already in use!')
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                Alert.alert('Error!', 'That email address is invalid!')
            } if (error.code === 'auth/user-not-found') {
                console.log('User does not exist!');
                Alert.alert('Error!', 'User does not exist!')
            }

            console.error(error);
        })
}

const signOut = () => {

    auth().signOut().then(() => {
        console.log("Signout Successfully")
        Navigation.setRoot({ root: { component: { name: 'Splash' } } })

    }).catch(err => {
        console.log('Error:', err)
    })
}

export default { app, signUpFirebase, loginFirebase, signOut }


