import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import StarRating from 'react-native-star-rating-widget';
import {color} from '../../../components/color';
import {globalStyles} from '../../../config/globalStyles';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';
import TextInputWithTextCom from '../../../components/TextButtonComp/TextButtonComp';
const PermitFormScreen = ({route, navigation}) => {
  return (
    <>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Sailing Permit Form'}
      />
      <ScrollView contentContainerStyle={styles.Container}>
        <View
          style={{
            flex: 1,
            paddingBottom: hp('3'),
            justifyContent: 'space-evenly',
          }}
        >
          <TextInputWithTextCom
            placeholder={'Boat Number'}
            upperText={'Boat Number'}
            textInputstyle={{
              width: wp('80'),
              height: hp('4'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Boat Name'}
            upperText={'Boat Name'}
            textInputstyle={{
              width: wp('80'),
              height: hp('4'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Date of Expiry'}
            upperText={'Date of Expiry'}
            showIcon={true}
            iconName={'calendar-outline'}
            textInputstyle={{
              width: wp('80'),
              height: hp('4'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Boat Owner'}
            upperText={'Boat Owner'}
            textInputstyle={{
              width: wp('80'),
              height: hp('4'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Captain Name'}
            upperText={'Captain Name'}
            textInputstyle={{
              width: wp('80'),
              height: hp('4'),
            }}
          />
          <TextInputWithTextCom
            placeholder={'Phone'}
            upperText={'Phone Number'}
            textInputstyle={{
              width: wp('80'),
              height: hp('4'),
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInputWithTextCom
              placeholder={'D.O.Departure'}
              upperText={'D.O.Departure'}
              showIcon={true}
              iconName={'calendar-outline'}
              style={{width: wp('43')}}
              textInputstyle={{width: wp('32'), height: hp('4')}}
            />
            <TextInputWithTextCom
              placeholder={'Time of Departure'}
              upperText={'Time of Departure'}
              style={{width: wp('43')}}
              showIcon={true}
              iconName={'ios-time-outline'}
              textInputstyle={{
                width: wp('32'),
                height: hp('4'),
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInputWithTextCom
              placeholder={'Time of Arrival'}
              upperText={'Time of Arrival'}
              showIcon={true}
              iconName={'ios-time-outline'}
              style={{width: wp('43')}}
              textInputstyle={{width: wp('32'), height: hp('4')}}
            />
            <TextInputWithTextCom
              placeholder={'Date of Arrival'}
              upperText={'Date of Arrival'}
              style={{width: wp('43')}}
              showIcon={true}
              iconName={'calendar-outline'}
              textInputstyle={{
                width: wp('32'),
                height: hp('4'),
              }}
            />
          </View>
          <TextInputWithTextCom
            placeholder={'Distination'}
            upperText={'Distination'}
            textInputstyle={{
              width: wp('80'),
              height: hp('4'),
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInputWithTextCom
              placeholder={'No of Passenger'}
              upperText={'No of Passenger'}
              style={{width: wp('43')}}
              textInputstyle={{width: wp('32'), height: hp('4')}}
            />
            <TextInputWithTextCom
              placeholder={'No of Crew'}
              upperText={'No of Crew'}
              style={{width: wp('43')}}
              textInputstyle={{
                width: wp('32'),
                height: hp('4'),
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PermitFormScreen;
