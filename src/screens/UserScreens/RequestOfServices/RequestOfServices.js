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
  PermissionsAndroid,
  FlatList,
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
import Geolocation from 'react-native-geolocation-service';
import {useEffect} from 'react';
import TextInputWithTextCom from '../../../components/TextInputWithTextCom/TextInputWithTextCom';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ReportIncidentUrl} from '../../../config/Urls';
import {
  errorMessage,
  successMessage,
} from '../../../components/NotificationMessage';
import axios from 'react-native-axios';
import {useSelector} from 'react-redux';

const RequestOfServices = ({route, navigation}) => {
  const {userData, token} = useSelector(state => state.userData);
  const [getPosition, setGetPosition] = useState('');
  const [loading, setLoading] = useState(false);
  const [stateChange, setStateChange] = useState({
    userImage: [],
    subject: '',
    message: '',
  });

  const updateState = data => setStateChange(prev => ({...prev, ...data}));
  const {userImage, subject, message} = stateChange;

  // const [number, onChangeNumber] = useState(
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus eros platea amet, ut adipiscing aliquet. Metus blandit non amet, ultricies gravida nisi, dapibus interdum.',
  // );
  const [openConfirmView, setOpenConfirmView] = useState(false);
  let items = route?.params?.item;
  const pickImagesFromGalary = () => {
    launchImageLibrary(
      {
        selectionLimit: 0,
        mediaType: 'photo',
        quality: 0.5,
        maxWidth: 300,
        maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          updateState({userImage: res?.assets});
          // updateImage(res?.assets);
        }
      },
    );
  };
  async function requestPermissions() {
    if (Platform.OS == 'ios') {
      Geolocation.requestAuthorization('whenInUse');
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        // socket.emit(userData.data.id, position);
        setGetPosition(position);
        // setLocation(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true},
    );
  };

  function RemoveImage(value) {
    const found = userImage.filter(item => {
      return item !== value;
    });
    updateState({userImage: found});
  }

  const ReportIncidentFunc = () => {
    var bodyFormData = new FormData();
    setLoading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      getPosition?.coords != '' &&
      subject != '' &&
      message != '' &&
      userImage != ''
    ) {
      // let body = {
      //   north_coordinates: getPosition?.coords?.latitude,
      //   east_coordinates: getPosition?.coords?.longitude,
      //   subject: subject,
      //   note: message,
      //   image: userImage,
      // };

      // userImage.length > 0 &&
      //   bodyFormData.append('image', {
      //     name: userImage[0]?.fileName,
      //     uri: userImage[0]?.uri,
      //     type: userImage[0]?.type,
      //   });
      userImage.length > 0 &&
        userImage.map(value => {
          bodyFormData.append('image', {
            name: value?.fileName,
            uri: value?.uri,
            type: value?.type,
          });
        });
      bodyFormData.append(
        'north_coordinates',
        getPosition?.coords?.latitude.toString(),
      );

      bodyFormData.append(
        'east_coordinates',
        getPosition?.coords?.longitude.toString(),
      );
      bodyFormData.append('subject', subject);
      bodyFormData.append('note', message);

      axios
        .post(ReportIncidentUrl, bodyFormData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function (res) {
          successMessage('Your reports has been send!');
          setLoading(false);
          // dispatch({
          //   type: types.LoginType,
          //   payload: res?.data,
          // });
        })
        .catch(function (error) {
          setLoading(false);
          errorMessage(error?.response?.data?.message);
        });
    } else {
      setLoading(false);
      errorMessage('Please type correct information');
    }
  };
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
          behavior={Platform.OS == 'ios' ? 'position' : 'padding'}>
          {getPosition == '' ? (
            <ButtonThemeComp
              onPress={() => {
                requestPermissions(), getCurrentLocation();
              }}
              style={{
                // backgroundColor: 'red',
                // marginLeft: wp('6'),

                marginTop: hp('3'),
                width: wp('90'),
                backgroundColor: color.textPrimaryColor,
                // items?.text === 'Report Incident'
                //   ? 'red'
              }}
              text={'Get Location'}
            />
          ) : (
            <>
              <CoordenatesView
                coordArea={`${getPosition?.coords?.latitude}`}
                coordenates={''}
              />
              <CoordenatesView
                coordArea={`${getPosition?.coords?.longitude}`}
                coordenates={''}
              />
            </>
          )}
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
          <View style={{marginTop: hp('-3.5')}}>
            <TextInputWithTextCom
              onChangeText={text => updateState({subject: text})}
              placeholder={'subject'}
              // upperText={'Boat Number'}
              textInputstyle={{
                width: wp('80'),
                color: 'black',
              }}
            />
          </View>
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
              onChangeText={text => updateState({message: text})}
              value={message}
              placeholder="Type your message"
              placeholderTextColor={'gray'}
            />
          </View>
          {/* <Text
            style={{
              textAlign: 'right',
              marginTop: hp('0.5'),
              color: color.themeColorDark,
            }}>
            0/500
          </Text> */}
          <FlatList
            data={userImage}
            scrollEnabled={false}
            // contentContainerStyle={{
            //   width: wp('95'),
            //   backgroundColor: 'red',
            //   flexDirection: 'row',

            //   display: 'flex',
            //   flexWrap: 'wrap',
            // }}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <ImageBackground
                  style={styles.ImageBackgroundContainer}
                  source={{
                    uri: item?.uri,
                  }}>
                  <MaterialIcons
                    onPress={() => RemoveImage(item)}
                    name="cancel"
                    size={hp('2.5')}
                    color={'white'}
                    style={{
                      textAlign: 'right',
                      marginTop: hp('0.4'),
                      marginRight: wp('1.5'),
                    }}
                  />
                </ImageBackground>
              );
            }}
          />
          <TextButtonComp
            onPress={() => pickImagesFromGalary()}
            viewStyle={{marginTop: hp('3')}}
            text={'Attachments'}
            name={'attachment'}
          />
          <ButtonThemeComp
            // onPress={() => {
            //   requestPermissions(), getCurrentLocation();
            // }}
            isloading={loading}
            // onPress={() => setOpenConfirmView(true)}
            onPress={() => ReportIncidentFunc()}
            style={{
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
