import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {styles} from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';
import {ApiGet, ApiPost} from '../../../config/helperFunction';
import {LoginUrl, UserUrl} from '../../../config/Urls';
import {useDispatch} from 'react-redux';
import types from '../../../Redux/type';
import {errorMessage} from '../../../components/NotificationMessage';
import AwesomeAlert from 'react-native-awesome-alerts';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';

const ForgetScreen = ({route, navigation}) => {
  const disptach = useDispatch();
  const emailRef = useRef();
  const LoginType = route.params;
  const [isKeyboardVisible, setKeyboardVisible] = useState(hp('0'));
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [loginUser, setLoginUser] = useState({
    email: '',
    // email: 'secowog808@geekjun.com',
    // email: 'kihosiw869@dnitem.com',
    // email: 'bilal1@gmail.com',
    // password: 'password',
  });
  const [isloading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState({
    email: false,
  });
  const handleClick = () => setShow(!show);
  const [show, setShow] = useState(false);
  const [alertState, setALertState] = useState(false);
  const AwesomeAlertMessage = () => {
    return (
      <AwesomeAlert
        show={alertState}
        showProgress={false}
        title="Warning!"
        message="Account deletion is in process, please verify your email to delete your ivacay account."
        contentContainerStyle={{
          width: wp('80%'),
          backgroundColor: 'white',
        }}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Ok"
        confirmButtonStyle={styles.buttonstyle}
        cancelButtonStyle={styles.buttonstyle}
        confirmButtonTextStyle={{
          textAlign: 'center',
          color: color?.textPrimaryColor,
          fontSize: hp('2.2%'),
        }}
        titleStyle={{
          color: color.textPrimaryColor,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
        messageStyle={{color: 'gray', textAlign: 'center', color: 'black'}}
        onConfirmPressed={() => {
          setALertState(false);
        }}
      />
    );
  };
  const {email} = loginUser;
  const updateState = data => setLoginUser(() => ({...loginUser, ...data}));
  // Focused handler
  const handleInputFocus = textinput => {
    setIsFocused({
      [textinput]: true,
    });
  };
  const handleInputBlur = textinput => {
    setIsFocused({
      [textinput]: false,
    });
  };
  // XXXXXXXXXXXX

  const loginFunction = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setLoading(true);
    if (
      email != '' &&
      email != null &&
      password != '' &&
      password != null &&
      reg.test(email) === true
    ) {
      let body = JSON.stringify({
        email: email,
        password: password,
      });
      ApiPost(LoginUrl, body, false).then(res => {
        if (res.status == 200) {
          disptach({
            type: types.LoginType,
            payload: res.json,
          });
          setLoading(false);
        } else if (
          res.status == 401 &&
          res.json.message == 'Please check email'
        ) {
          setLoading(false);
          setALertState(true);
        } else if (res.status == 401) {
          setLoading(false);
          errorMessage(res.json.message);
        } else {
          errorMessage('Network Request Failed.');
          setLoading(false);
        }
      });
    } else {
      errorMessage('Plesae type correct information.');
      setLoading(false);
    }
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(hp('35')); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(hp('0')); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    // <KeyboardAvoidingComponent />
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'position' : 'height'}
      // keyboardVerticalOffset={Platform.OS === 'ios' ? hp('0') : hp('1')}
      // contentContainerStyle={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require('../../../images/Loginogo.png')}
          style={styles.topImage}
          resizeMode="contain"
        />
        <TextHeadingCom
          heading={'Forget Password'}
          style={{marginTop: hp('10')}}
        />
        <Text
          style={{
            fontSize: hp('1.5'),
            color: 'gray',
            textAlign: 'center',
            marginTop: hp('2'),
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Text>
        <LoginInputComp
          ref={emailRef}
          value={email}
          onChangeText={email => updateState({email})}
          inputText="Email"
          placeholder="Enter Your Email"
          onFocus={() => {
            handleInputFocus('email');
          }}
          onBlur={() => handleInputBlur('email')}
          isFocused={isFocused.email}
          style={{marginTop: hp('6')}}
        />

        <ButtonThemeComp
          onPress={() => navigation.navigate('ResetPasswordScreen')}
          text={'Submit'}
          style={{marginTop: hp('2')}}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgetScreen;
