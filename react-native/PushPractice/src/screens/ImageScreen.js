import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';
import {Button} from 'react-native';
import {useState} from 'react';

const ImageScreen = () => {
//   const [pickerResponse, setPickerResponse] = useState(null);
//   const onImageLibraryPress = useCallback(() => {
//     const options = {
//       selectionLimit: 1,
//       mediaType: 'photo',
//       includeBase64: false,
//     };
//     launchImageLibrary(options, setPickerResponse);
//   }, []);

//   const onCameraPress = useCallback(() => {
//     const options = {
//       saveToPhotos: true,
//       mediaType: 'photo',
//       includeBase64: false,
//     };
//     launchCamera(options, setPickerResponse);
//   }, []);

  // const Click = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     console.log(image);
  //   });
  // };

  // const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <View>
      {/* <Button onPress={Click} title="click" /> */}
    </View>
  );
};

export default ImageScreen;
