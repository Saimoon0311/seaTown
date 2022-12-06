import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';
import {styles} from './styles';

export const ButtonThemeComp = props => {
  return (
    // <View style={styles.ButtonView}>

    <TouchableOpacity
      disabled={props.disabled ? props.disabled : props?.isLoading}
      onPress={() => props?.onPress()}
      style={{...styles.ButtonView, ...props?.style}}>
      {props?.isloading ? (
        <SkypeIndicator
          color={'white'}
          size={hp('4')}
          style={
            {
              // alignSelf: 'center',
              // justifyContent: 'center',
            }
          }
        />
      ) : (
        <Text style={{...styles.ButtonText, ...props?.TextStyle}}>
          {props?.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
