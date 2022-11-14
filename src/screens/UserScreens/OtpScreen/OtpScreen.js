import React, {forwardRef, useEffect, useRef, useState} from 'react';
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
import {useDispatch} from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpScreen = ({route, navigation}) => {
  const disptach = useDispatch();
  const emailRef = useRef();
  const LoginType = route.params;
  const [isKeyboardVisible, setKeyboardVisible] = useState(hp('0'));
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [loginUser, setLoginUser] = useState({
    email: '',
    code: '',
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
  const {email, code} = loginUser;
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

  //   const loginFunction = () => {
  //     const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     setLoading(true);
  //     if (
  //       email != '' &&
  //       email != null &&
  //       password != '' &&
  //       password != null &&
  //       reg.test(email) === true
  //     ) {
  //       let body = JSON.stringify({
  //         email: email,
  //         password: password,
  //       });
  //       ApiPost(LoginUrl, body, false).then(res => {
  //         console.warn(res, 115);
  //         if (res.status == 200) {
  //           disptach({
  //             type: types.LoginType,
  //             payload: res.json,
  //           });
  //           setLoading(false);
  //         } else if (
  //           res.status == 401 &&
  //           res.json.message == 'Please check email'
  //         ) {
  //           setLoading(false);
  //           setALertState(true);
  //         } else if (res.status == 401) {
  //           setLoading(false);
  //           errorMessage(res.json.message);
  //         } else {
  //           errorMessage('Network Request Failed.');
  //           setLoading(false);
  //         }
  //       });
  //     } else {
  //       errorMessage('Plesae type correct information.');
  //       setLoading(false);
  //     }
  //   };
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
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue('1234');
  };
  return (
    // <KeyboardAvoidingComponent />
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'position' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? hp('0') : hp('1')}
      contentContainerStyle={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={require('../../../images/Loginogo.png')}
          style={styles.topImage}
          resizeMode="contain"
        />
        <TextHeadingCom heading={'Enter OTP'} style={{marginTop: hp('10')}} />
        <Text
          style={{
            fontSize: hp('1.5'),
            color: 'gray',
            textAlign: 'center',
            marginTop: hp('2'),
          }}>
          A 4 digit Code has been sent to your email
        </Text>
        <View style={{height: hp('10'), width: wp('60')}}>
          <OTPInputView
            autoFocusOnLoad={false}
            pinCount={4}
            style={{borderRadius: 20}}
            codeInputHighlightStyle={{
              borderRadius: 10,
              backgroundColor: 'white',
              borderColor: color.onPressInpur,
              color: 'black',
            }}
            codeInputFieldStyle={{
              borderRadius: 10,
              color: 'black',
              backgroundColor: color.themeColorDarkinputColor,
            }}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            // codeInputFieldStyle={styles.underlineStyleBase}
            // codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <ButtonThemeComp
          onPress={() => navigation.navigate('UserBottomnavigation')}
          text={'Submit'}
          style={{marginTop: hp('2')}}
        />
        <TouchableOpacity style={{...styles.resendContainer}}>
          <Text style={{...styles.resendTxt}}>Resend Code</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;
