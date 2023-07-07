import {View, Text, Button} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
const App = () => {
  const showToast1 = () => {
    Toast.show({
      type: 'success',
      text1: 'Toast Message 1',
      text2: 'This is the secondary text',
      // autoHide: true,
      // visiblityTime: 2500,
      // onShow: () => {
      //   console.log('Toast Visible');
      // },
      // onHide: () => {
      //   console.log('Toast Hidden');
      // },
      // onPress: () => {
      //   console.log('Toast Clicked');
      // },
      // position: 'top',
      // bottomOffset: 50,
      // topOffset:200
    });
  };
  const showToast2 = () => {
    Toast.show({
      type: 'error', 
      // info is also type indicates in blue color
      text1: 'Toast Message 2',
      text2: 'This is the secondary text',
      backgroundColor: 'green',
      // autoHide: true,
      // visiblityTime: 2500,
      // onShow: () => {
      //   console.log('Toast Visible');
      // },
      // onHide: () => {
      //   console.log('Toast Hidden');
      // },
      // onPress: () => {
      //   console.log('Toast Clicked');
      // },
      position: 'top',
      // bottomOffset: 50,
      // topOffset:200
    });
  };
  const showToast3 = () => {
    Toast.show({type:'info', text1:'ayush saxena', text2:'This is a text style ayush saxena', color:'yellow'});
  }
  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          margin: 40,
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Toast Message
      </Text>
      <Button title="Show Toast 1" onPress={showToast1} />
      <Button title="Show Toast 2" onPress={showToast2} />
      <Button title="Show Toast 3" onPress={showToast3} />
      <Toast
        autoHide={true}
        visibilityTime={2500}
        onShow={() => {
          console.log('Toast Visible');
        }}
        onPress={() => {
          console.log('Toast Visible');
        }}
        onHide={() => {
          console.log('Toast Visible');
        }}
      />
    </View>
  );
};

export default App;
