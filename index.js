import {Navigation} from 'react-native-navigation';

import App from './App';
import Spalsh from './src/screens/spalsh/spalsh';
import login from './src/screens/Auth/login';
import register from './src/screens/Auth/register';
import CameraAndGallery from './src/component/cameraAndGallery';
import setPassword from './src/screens/Auth/setPassword';
import Home from './src/screens/home/Home';
import AddProduct from './src/screens/home/addProduct';

import {Provider} from 'react-redux';

import profile from './src/screens/home/profile';
import store from './src/redux/store';
import ProductList from './src/screens/home/productList';

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Splash', () => Spalsh);
Navigation.registerComponent('login', () => login);
Navigation.registerComponent('register', () => register);
Navigation.registerComponent('CameraAndGallery', () => CameraAndGallery);
Navigation.registerComponent('setPassword', () => setPassword);
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('profile', () => profile);

Navigation.registerComponent(
  'AddProduct',
  () => props =>
    (
      <Provider store={store}>
        <AddProduct {...props} />
      </Provider>
    ),
  () => AddProduct,
);
Navigation.registerComponent(
  'ProductList',
  () => props =>
    (
      <Provider store={store}>
        <ProductList {...props} />
      </Provider>
    ),
  () => ProductList,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Splash',
            },
          },
        ],
      },
    },
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
