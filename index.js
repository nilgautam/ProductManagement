import { Navigation } from "react-native-navigation";

import App from "./App";
import Spalsh from "./src/screens/spalsh/spalsh";
import login from "./src/screens/Auth/login";



Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Splash', () => Spalsh);
Navigation.registerComponent('login', () => login);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'Splash'
             },
             
           }
         ]
       }
     }
  });
});


Navigation.setDefaultOptions({
  layout: {
    orientation: ['portrait'],
    backgroundColor: 'white',
  },

  topBar: {
    visible: false,
  },
  navigatorStyle: {
    screenBackgroundColor: 'white',
  },
  bottomTab: {
    fontSize: 12,
    selectedFontSize: 12,
  },
  animations: {
    push: {
      content: {
        translationX: {
          from: require('react-native').Dimensions.get('window').width,
          to: 0,
          duration: 200,
        },
      },
    },
  },
});