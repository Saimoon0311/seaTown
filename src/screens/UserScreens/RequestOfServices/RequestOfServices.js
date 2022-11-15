import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import TextButtonComp from '../../../components/TextButtonComp/TextButtonComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../../components/color';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
const RequestOfServices = ({route, navigation}) => {
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus eros platea amet, ut adipiscing aliquet. Metus blandit non amet, ultricies gravida nisi, dapibus interdum.',
  );
  const [openConfirmView, setOpenConfirmView] = useState(false);

  let items = route?.params?.item;
  console.log(12, items);
  const ProfileUpdateView = () => {
    return (
      <View style={styles.trackMainView}>
        <View style={{...styles.trackInnerView, height: hp('45'), padding: 12}}>
          <Ionicons
            name="close-sharp"
            color={color.textInputColor}
            size={hp('3')}
            onPress={() => {
              setOpenConfirmView(false);
              // navigation.navigate('CaptionBottomNavigation');
            }}
            style={{
              alignSelf: 'flex-end',
              //   marginRight: wp('2'),
            }}
          />
          <Image
            source={require('../../../images/yellowTick.png')}
            resizeMode={'contain'}
            style={{alignSelf: 'center'}}
          />
          <TextHeadingCom
            heading="Your request has been submitted"
            style={{textAlign: 'center', marginTop: hp('2')}}
          />
          <TextHeadingCom
            heading="successfully!"
            style={{
              textAlign: 'center',
              marginTop: hp('2'),
              fontSize: hp('2.4'),
              fontWeight: 'bold',
            }}
          />
          <TextHeadingCom
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nulla aliquet malesuada morbi purus."
            style={{
              textAlign: 'center',
              color: color.iconColor,
              fontSize: hp('1.6'),
              marginTop: hp('2'),
            }}
          />
        </View>
      </View>
    );
  };
  const CoordenatesView = props => {
    let width = props.width ?? '90';
    let height = props.height ?? '6';
    return (
      <View
        style={{
          ...styles.coordenatesView,
          ...props?.style,
          height: hp(height),
          width: wp(width),
        }}>
        <Text style={styles.leftText}>{props?.coordArea}</Text>
        <Text style={styles.rightText}>{props?.coordenates}</Text>
        {props.icoNotShow != true && (
          <Ionicons
            name={props?.name ?? 'ios-locate-outline'}
            color={color.textPrimaryColor}
            size={hp('2')}
          />
        )}
      </View>
    );
  };
  return (
    <>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={
          items?.text === 'Report Incident' ? items?.text : 'Request a Services'
        }
      />
      <ScrollView
        contentContainerStyle={styles.container}
        // automaticallyAdjustKeyboardInsets={true}
      >
        <KeyboardAvoidingView
          // style={styles.container}
          behavior={Platform.OS ? 'position' : 'height'}>
          <CoordenatesView coordArea={`30°00'0.00' N`} coordenates={''} />
          <CoordenatesView coordArea={`30°00'0.00' N`} coordenates={''} />

          {items?.text === 'Report Incident' ? (
            <View></View>
          ) : (
            <View style={styles.dateTimeViewStyle}>
              <CoordenatesView
                width={'40'}
                name={'calendar'}
                coordArea={`13 May,2012`}
                coordenates={''}
              />

              <CoordenatesView
                width={'40'}
                name={'time-outline'}
                coordArea={`08:00 AM`}
                coordenates={''}
              />
            </View>
          )}
          <CoordenatesView
            coordArea={`Need Ice and Sunglases`}
            coordenates={''}
            icoNotShow={true}
          />
          <View style={styles.input}>
            <TextInput
              multiline
              // numberOfLines={10}
              style={{
                alignSelf: 'flex-start',
                flex: 1,
                color: 'black',
                marginTop: Platform.OS == 'ios' ? hp('1') : hp('0'),
              }}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Type your message"
              placeholderTextColor={'gray'}
            />
          </View>
          <Text
            style={{
              textAlign: 'right',
              marginTop: hp('0.5'),
              color: color.themeColorDark,
            }}>
            0/500
          </Text>
          <View style={{flexDirection: 'row'}}>
            <ImageBackground
              resizeMode="contain"
              style={styles.ImageBackgroundContainer}
              source={require('../../../images/image1.png')}>
              <MaterialIcons
                name="cancel"
                size={hp('2.5')}
                color={color.textColor}
                style={{
                  textAlign: 'right',
                  marginTop: hp('0.3'),
                  marginRight: wp('3.1'),
                }}
              />
            </ImageBackground>

            <ImageBackground
              resizeMode="contain"
              style={styles.ImageBackgroundContainer}
              source={require('../../../images/image2.png')}>
              <MaterialIcons
                name="cancel"
                size={hp('2.5')}
                color={color.textColor}
                style={{
                  textAlign: 'right',
                  marginTop: hp('0.3'),
                  marginRight: wp('3.1'),
                }}
              />
            </ImageBackground>
          </View>
          <TextButtonComp
            onPress={() => console.log('oejdoejd')}
            viewStyle={{marginTop: hp('3')}}
            text={'Attachments'}
            name={'attachment'}
          />
          <ButtonThemeComp
            onPress={() => setOpenConfirmView(true)}
            style={{
              // backgroundColor: 'red',
              // marginLeft: wp('6'),

              marginTop: hp('3'),
              width: wp('90'),
              backgroundColor:
                items?.text === 'Report Incident'
                  ? 'red'
                  : color.textPrimaryColor,
            }}
            text={
              items?.text === 'Report Incident' ? 'Report' : 'Submit Request'
            }
          />
        </KeyboardAvoidingView>
      </ScrollView>
      {openConfirmView && <ProfileUpdateView />}
    </>
  );
};

export default RequestOfServices;
