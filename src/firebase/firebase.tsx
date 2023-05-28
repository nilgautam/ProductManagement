import auth from '@react-native-firebase/auth';


const signUpFirebase = (email: string, pass: string) => {

    auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
}


const loginFirebase = (email: string, pass: string) => {

    auth().signInWithEmailAndPassword(email, pass).then(() => {
        console.log('User account Login');
    })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        })
}

const signOut = () => {

    auth().signOut().then(() => {
        console.log("Signout Successfully")

    }).catch(err => {
        console.log('Error:', err)
    })
}



