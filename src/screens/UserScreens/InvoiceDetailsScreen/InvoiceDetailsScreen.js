import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {color} from '../../../components/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {styles} from './styles';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';

const InvoiceDetailsScreen = ({route, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Invoice Detail'}
        statusColor={color.alertBackgroundColor}
        Status={'Download'}
      />
      <ScrollView>
        <View style={styles.invoiceView}>
          <View style={styles.leftView}>
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'Invoice ID'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'Invoice Date'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'Bill To'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'Due Date'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'Status'}
            />
          </View>
          <View style={styles.rightView}>
            <TextHeadingCom
              style={{
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'#00065'}
            />
            <TextHeadingCom
              style={{
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'13 Dec 2022'}
            />
            <TextHeadingCom
              style={{
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'Alfonsa Vaccore'}
            />
            <TextHeadingCom
              style={{
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'17 Dec 2022'}
            />
            <TextHeadingCom
              style={{
                marginTop: hp('1'),
                marginBottom: hp('1'),
                color: 'red',
              }}
              heading={'Due'}
            />
          </View>
        </View>
        <View style={styles.divider} />
        <View
          style={{
            ...styles.invoiceView,
            marginTop: hp('0'),
            paddingBottom: hp('6'),
            // paddingTop: hp('-30'),
          }}>
          <View style={styles.leftView}>
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('0.5'),
              }}
              heading={'Refueling Service'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                // marginTop: hp('1'),
                marginBottom: hp('1'),
                fontSize: hp('1.5'),
                color: color.iconColor,
              }}
              heading={'Qty x 20ltr'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('0.5'),
              }}
              heading={'Distance Travelled'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                // marginTop: hp('1'),
                marginBottom: hp('1'),
                fontSize: hp('1.5'),
                color: color.iconColor,
              }}
              heading={'10miles'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('0.5'),
              }}
              heading={'Time Taken'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                // marginTop: hp('1'),
                marginBottom: hp('1'),
                fontSize: hp('1.5'),
                color: color.iconColor,
              }}
              heading={'2hours'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'Subtotal'}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'Advance Payment'}
            />
          </View>
          <View style={styles.rightView}>
            <View style={{top: hp('0')}}>
              <TextHeadingCom
                style={{
                  // marginTop: hp('5'),
                  fontWeight: 'normal',
                  textAlign: 'right',
                  // top: hp('2'),
                }}
                heading={'AED 500'}
              />
              <TextHeadingCom
                style={{
                  // marginTop: hp('1'),
                  marginBottom: hp('1'),
                  fontWeight: 'normal',
                }}
                heading={'AED 1700'}
              />
            </View>
            <TextHeadingCom
              style={{
                top: hp('2'),
                fontWeight: 'normal',
                marginBottom: hp('1'),
              }}
              heading={'AED 1200'}
            />
            <TextHeadingCom
              style={{
                top: hp('5'),
                fontWeight: 'normal',
                // marginBottom: hp(''),
              }}
              heading={'Alfonsa Vaccore'}
            />
            <TextHeadingCom
              style={{
                marginTop: hp('9'),
                marginBottom: hp('1'),
              }}
              heading={'AED 3400'}
            />
            <TextHeadingCom
              style={{
                marginTop: hp('1'),
                marginBottom: hp('1'),
              }}
              heading={'AED 500'}
            />
          </View>
        </View>
        <View style={styles.bottomYellowView}>
          <TextHeadingCom heading={'Total Payable'} />
          <TextHeadingCom heading={'AED 2900'} />
        </View>
        <CommonButtonComp
          text={'CheckOut'}
          viewStyle={{
            alignSelf: 'center',
            width: wp('85'),
            marginTop: hp('5'),
          }}
          onPress={() => navigation.navigate('SelectPaymentScreen')}
        />
      </ScrollView>
    </View>
  );
};

export default InvoiceDetailsScreen;
