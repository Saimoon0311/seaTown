import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import Lottie from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// 75486-call.json
const EmergncySOSScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        source={require('../../../images/bluePackage.png')}>
        <Lottie
          source={require('../../../images/75486-call.json')}
          autoPlay
          loop
          style={{height: hp('20')}}
        />
      </ImageBackground>
    </View>
  );
};

export default EmergncySOSScreen;
