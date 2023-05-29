import {Text, View} from 'react-native';
import React from 'react';
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';

export interface Props extends NavigationComponentProps {}
const Home: React.FC<Props> = props => {
  return (
    <BaseSafeArea
      componentId={props.componentId}
      leftIcon={require('../../assets/images/menu.png')}
      prevScreenName=""
      leftIconHeight={30}
      leftIconWidth={30}
      leftIconPress={() => {
        Navigation.mergeOptions(props?.componentId, {
          sideMenu: {
            left: {
              // width: Utils.calculateWidth(250),
              visible: true,
            },
          },
        });
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{fontSize: 30, color: 'black'}}>Product Management</Text>
      </View>
    </BaseSafeArea>
  );
};

export default Home;
