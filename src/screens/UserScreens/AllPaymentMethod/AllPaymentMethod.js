import React from 'react';
import {View, Text} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import TextInputWithTextCom from '../../../components/TextInputWithTextCom/TextInputWithTextCom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';

const AllPaymentMethod = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BackHeaderComp
        heading="Add Payment Method"
        onPress={() => navigation.goBack()}
      />
      <View style={{width: wp('90'), alignSelf: 'center'}}>
        <TextInputWithTextCom
          placeholder={'Cardholder name'}
          upperText={'Cardholder name'}
          textInputstyle={{
            width: wp('80'),
          }}
        />
        <TextInputWithTextCom
          placeholder={'Card Number'}
          upperText={'Card Number'}
          textInputstyle={{
            width: wp('80'),
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInputWithTextCom
            placeholder={'Time of Arriva'}
            upperText={'Time of Arrival'}
            style={{width: wp('43')}}
            textInputstyle={{width: wp('32')}}
          />
          <TextInputWithTextCom
            placeholder={'Date of Arrival'}
            upperText={'Date of Arrival'}
            style={{width: wp('43')}}
            textInputstyle={{
              width: wp('32'),
            }}
          />
        </View>
      </View>
      <CommonButtonComp
        text={'Add Card'}
        onPress={() => navigation.goBack()}
        viewStyle={{
          marginTop: hp('2'),
          width: wp('90'),
          position: 'absolute',
          bottom: hp('6'),
        }}
      />
    </View>
  );
};

export default AllPaymentMethod;
