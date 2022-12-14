import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';

export const CommonButtonComp = props => {
  const {viewStyle, textStyle} = props;
  return (
    <TouchableOpacity
      onPress={() => props?.onPress()}
      style={{
        width: wp('40'),
        height: hp('6'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.textPrimaryColor,
        borderRadius: 10,
        alignSelf: 'center',
        ...viewStyle,
      }}>
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
        <Text style={{color: 'white', fontSize: hp('1.6'), ...textStyle}}>
          {props?.text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
