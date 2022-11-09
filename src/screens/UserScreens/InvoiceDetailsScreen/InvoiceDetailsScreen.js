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

const InvoiceDetailsScreen = ({route, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Services Request'}
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
              }}
              heading={'Due'}
            />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={{...styles.invoiceView, marginTop: hp('0')}}>
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
              }}
              heading={'Due'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InvoiceDetailsScreen;
