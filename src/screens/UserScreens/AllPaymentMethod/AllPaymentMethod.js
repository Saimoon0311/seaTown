import React from 'react';
import {View, Text, Platform, Keyboard, ScrollView} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import TextInputWithTextCom from '../../../components/TextInputWithTextCom/TextInputWithTextCom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';

const AllPaymentMethod = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BackHeaderComp
        heading="Add Payment Method"
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            width: wp('90'),
            alignSelf: 'center',
            // backgroundColor: 'red',
            marginBottom: hp('40'),
          }}>
          <TextInputWithTextCom
            placeholder={'Cardholder Name'}
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
              upperText={'Expiry Date'}
              placeholder={'06 / 2024'}
              style={{width: wp('43')}}
              textInputstyle={{width: wp('32')}}
            />
            <TextInputWithTextCom
              placeholder={'000'}
              upperText={'CVV / CVC'}
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
            // position: 'absolute',
            // marginBottom: hp('-60'),
            // bottom: hp('2'),
          }}
        />
      </ScrollView>
    </View>
  );
};

export default AllPaymentMethod;
