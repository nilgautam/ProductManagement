import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../component/customButton';
import {Navigation} from 'react-native-navigation';

const Drawer = (props: any) => {
  let data = [
    {
      id: 0,
      name: 'Profile Management',
    },
    {
      id: 1,
      name: 'Add Product',
    },
    {
      id: 2,
      name: 'Product Listing',
    },
  ];
  return (
    <View style={{padding: 15}}>
      <Text style={{fontSize: 20, color: 'black'}}>Hello User</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                if (item.id == 0) {
                  Navigation.mergeOptions(props.componentId, {
                    sideMenu: {
                      left: {
                        // width: Utils.calculateWidth(250),
                        visible: false,
                      },
                    },
                  });
                  Navigation.push('Home', {
                    component: {
                      name: 'profile',
                    },
                  });
                } else if (item.id == 1) {
                  Navigation.mergeOptions(props.componentId, {
                    sideMenu: {
                      left: {
                        // width: Utils.calculateWidth(250),
                        visible: false,
                      },
                    },
                  });
                  Navigation.push('Home', {
                    component: {
                      name: 'AddProduct',
                    },
                  });
                } else if (item.id == 2) {
                  Navigation.mergeOptions(props.componentId, {
                    sideMenu: {
                      left: {
                        // width: Utils.calculateWidth(250),
                        visible: false,
                      },
                    },
                  });
                  Navigation.push('Home', {
                    component: {
                      name: 'ProductList',
                    },
                  });
                }
              }}
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                flex: 1,
                height: 60,
                justifyContent: 'center',
              }}>
              <Text>{item.name}</Text>
            </Pressable>
          );
        }}
      />
      <CustomButton
        text="Log Out"
        onPress={() => {
          Navigation.setRoot({
            root: {
              stack: {
                children: [
                  {
                    component: {
                      name: 'login',
                    },
                  },
                ],
              },
            },
          });
        }}
      />
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
