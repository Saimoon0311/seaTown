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

const PermitFormScreen = ({route, navigation}) => {
  return (
    <>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Sailing Permit Form'}
      />
      <ScrollView>
        <Text>asfas</Text>
      </ScrollView>
    </>
  );
};

export default PermitFormScreen;
