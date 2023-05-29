import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../../redux/action';
import CustomButton from '../../component/customButton';
import BaseSafeArea from '../../component/baseSafeArea/baseSafeArea';
import CustomTextInput from '../../component/customeTextInput';
import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import AddUserProfile from '../../component/addUserProfile';
import {Switch, Text, View} from 'react-native';
import ShowError from '../../component/showError';

const AddProduct = (props: any) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [price, setPrice] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [status, setStatus] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const getItemReducer = useSelector(state => state.items);

  useEffect(() => {
    console.log('getItemReducer', getItemReducer);
  }, [getItemReducer]);
  const handleAddItem = () => {
    if (
      productImage == undefined ||
      productName == '' ||
      productDescription == '' ||
      price == '' ||
      discountPrice == ''
    ) {
      setError('All field are require to fill');
    } else {
      var object = {
        productImage: productImage,
        productName: productName,
        productDescription: productDescription,
        price: price,
        discountPrice: discountPrice,
        status: status == true ? 'Active' : 'Inactive',
      };

      dispatch(addItem(object));

      Navigation.push(props.componentId, {
        component: {
          name: 'ProductList',
        },
      });
    }
    // Pass the item you want to add
  };
  const getImage = (item: React.SetStateAction<undefined>) => {
    console.log('Hello Item', item);
    setProductImage(item);
    setError('');
  };

  return (
    <BaseSafeArea componentId={props.componentId} title="Add Product">
      <AddUserProfile
        fromProduct
        image={{uri: productImage?.url}}
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
        title=" Product Name"
        value={productName}
        onChange={val => {
          setProductName(val);
          setError('');
        }}
      />
      <CustomTextInput
        title="Product Description"
        value={productDescription}
        onChange={val => {
          setProductDescription(val);
          setError('');
        }}
      />
      <CustomTextInput
        title="Price"
        value={price}
        onChange={val => {
          setPrice(val);
          setError('');
        }}
      />
      <CustomTextInput
        title="Discount"
        value={discountPrice}
        onChange={val => {
          setDiscountPrice(val);
          setError('');
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 12}}>Product Status</Text>
        <Switch
          value={status}
          onChange={value => {
            console.log('VAlue', value);
          }}
          onValueChange={val => {
            console.log('VAl', val);

            setStatus(val);
          }}
        />
      </View>
      <ShowError errorMessage={error} />
      <CustomButton text={'Add Item'} onPress={handleAddItem}>
        Add Item
      </CustomButton>
    </BaseSafeArea>
  );
};

export default AddProduct;
