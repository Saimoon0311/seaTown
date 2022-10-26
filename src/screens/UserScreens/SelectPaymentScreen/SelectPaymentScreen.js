import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import TextButtonComp from '../../../components/TextButtonComp/TextButtonComp';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';

const SelectPaymentScreen = ({navigation}) => {
  const [radio, setRadio] = useState(0);
  const CardViewComp = props => {
    return (
      <View style={styles.cardView}>
        <View style={styles.imageView}>
          <Image resizeMode="contain" source={props.image} />
        </View>
        <View style={styles.centerView}>
          <TextHeadingCom
            style={{fontSize: hp('1.8')}}
            heading={props.cardNumber}
          />
          <TextHeadingCom
            heading={props?.data}
            style={{fontSize: hp('1.5'), color: color.textInputColor}}
          />
        </View>
        <View style={styles.rightView}>
          <Ionicons
            onPress={() => setRadio(props?.selectedRadio)}
            name={
              radio == props.selectedRadio
                ? 'md-radio-button-on'
                : 'md-radio-button-off-sharp'
            }
            color={
              radio == props.selectedRadio
                ? color.yellowTxtColor
                : color.textInputColor
            }
            size={hp('4')}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Select Payment Method'}
      />
      <CardViewComp
        image={require('../../../images/Mastercard.png')}
        cardNumber={'XXXX XXXX XXXX XX58'}
        data={'Valid May 2022'}
        selectedRadio={0}
      />
      <CardViewComp
        image={require('../../../images/visa.png')}
        cardNumber={'XXXX XXXX XXXX XX58'}
        data={'Valid May 2022'}
        selectedRadio={1}
      />
      <TextButtonComp
        onPress={() => console.log('hfv')}
        viewStyle={{marginTop: hp('3'), alignSelf: 'center'}}
        text={'Add Payment Method'}
        changeIcon={
          <AntDesign
            style={{marginRight: wp('2')}}
            name={'plussquare'}
            size={hp('2.5')}
            color={color.textPrimaryColor}
          />
        }
      />
      <CommonButtonComp
        text="Pay Now"
        viewStyle={{position: 'absolute', bottom: hp('6'), width: wp('90')}}
      />
    </View>
  );
};

export default SelectPaymentScreen;
