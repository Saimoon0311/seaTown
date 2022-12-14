import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  ApiGet,
  ApiPost,
  ApiPostFormData,
  errorHandler,
} from '../../../config/helperFunction';
import {CountryNameUrl, resendEmailUrl, SignUpUrl} from '../../../config/Urls';
import {styles} from './styles';
import {
  errorMessage,
  successMessage,
} from '../../../components/NotificationMessage';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
import {BottomTextComp} from '../../../components/BottomTextComp/BottomTextComp';
import CheckBox from '@react-native-community/checkbox';
import {LoginInputComp} from '../../../components/LoginInputComp/LoginInputComp';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import axios from 'react-native-axios';
import {useDispatch} from 'react-redux';
import type from '../../../Redux/type';

export default function SignUpScreen({navigation}) {
  const [isKeyboardVisible, setKeyboardVisible] = useState('flex');
  const dispatch = useDispatch();

  const [signUpUser, setSignUpUser] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    ConfirmPassword: '',
    // userName: 'b',
    // email: 'boxiyi1089@dmonies.com',
    // phone: '125252525252',
    // password: '12345678',
    // ConfirmPassword: '12345678',
  });
  // sb-ktzwd14471324@personal.example.com
  // p)FUl>U3
  const [isFocused, setIsFocused] = useState({
    userName: false,
    email: false,
    password: false,
    phone: false,
    ConfirmPassword: false,
  });
  const [timerValue, setTimerValue] = useState(true);

  const [signUpCofirm, setSignUpConfirm] = useState(false);
  const [countryPicker, setCountryPicker] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(false);
  const [userId, setUserId] = useState('');
  const handleClick = () => setShow(!show);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const {
    userName,
    email,
    password,
    ConfirmPassword,
    countryId,
    userImage,
    phone,
    userRole,
  } = signUpUser;
  const updateState = data => setSignUpUser(prev => ({...prev, ...data}));

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

  const getAllCountryName = () => {
    ApiGet(CountryNameUrl).then(res => {
      if (res.status == 200) {
        setCountryPicker(res.json.data);
      } else {
        errorMessage(
          'Please Check Your Internet connection to get Countries Name.',
        );
      }
    });
  };

  const resendEmailFunction = () => {
    setLoading(true);
    ApiGet(resendEmailUrl + userId).then(res => {
      if (res.status == 200) {
        setTimer(false);
        successMessage('Email has been send');
        setLoading(false);
      } else {
        setLoading(false);
        errorMessage(
          "Please Check Your Internet connection to 'Resend Email' ",
        );
      }
    });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible('none'); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible('flex'); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  // const pickImagesFromGalary = () => {
  //   launchImageLibrary(
  //     {
  //       selectionLimit: 1,
  //       mediaType: 'photo',
  //       quality: 0.5,
  //       maxWidth: 300,
  //       maxHeight: 300,
  //     },
  //     res => {
  //       if (!res?.didCancel) {
  //         updateState({userImage: res?.assets});
  //       }
  //     },
  //   );
  // };
  // const pickImagefromCamera = () => {
  //   launchCamera(
  //     {
  //       selectionLimit: 1,
  //       mediaType: 'photo',
  //       quality: 0.5,
  //       maxWidth: 300,
  //       maxHeight: 300,
  //     },
  //     res => {
  //       if (!res?.didCancel) {
  //         updateState({userImage: res?.assets});
  //       }
  //     },
  //   );
  // };

  //TIMER FUNCTION
  const signUpFun = () => {
    setLoading(true);
    if (!toggleCheckBox) {
      setLoading(false);
      errorMessage('Please accept term and conditions');
    } else if (toggleCheckBox) {
      if (
        password != '' &&
        password.length >= 8 &&
        ConfirmPassword != '' &&
        email != '' &&
        phone != '' &&
        userName != ''
      ) {
        let body = {
          email: email,
          password: password,
          password_confirmation: ConfirmPassword,
          phone: phone,
          name: userName,
        };
        axios
          .post(SignUpUrl, body)
          .then(function (res) {
            setLoading(false);
            navigation.navigate('OtpScreen', res.data);
            // dispatch({
            //   type: type.LoginType,
            //   payload: res.data.data,
            // });
          })
          .catch(function (error) {
            // console.log(78, error?.response?.data?.message);

            setLoading(false);
            // errorMessage(error?.response?.data?.message);
            errorMessage(errorHandler(error));
          });
      } else {
        setLoading(false);
        errorMessage('Please complete all fields');
      }
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'position' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? hp('0') : hp('1')}
      style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.scrollView}>
        <Image
          source={require('../../../images/Loginogo.png')}
          style={styles.topImage}
          resizeMode="contain"
        />
        <TextHeadingCom heading={'Sign Up'} style={{marginTop: hp('10')}} />
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
          value={email}
          onChangeText={email => updateState({email})}
          inputText="Email"
          placeholder="Email"
          onFocus={() => {
            handleInputFocus('email');
          }}
          onBlur={() => handleInputBlur('email')}
          isFocused={isFocused.email}
          style={{marginTop: hp('6')}}
        />
        <LoginInputComp
          value={userName}
          onChangeText={userName => updateState({userName})}
          inputText="Username"
          placeholder="Full Name"
          onFocus={() => handleInputFocus('userName')}
          onBlur={() => handleInputBlur('userName')}
          style={{marginTop: hp('2')}}
          isFocused={isFocused.userName}
        />
        <LoginInputComp
          value={phone}
          onChangeText={phone => updateState({phone})}
          inputText="Phone Number"
          placeholder="Phone"
          onFocus={() => handleInputFocus('phone')}
          onBlur={() => handleInputBlur('phone')}
          isFocused={isFocused.phone}
          style={{marginTop: hp('2')}}
          keyboardType="number-pad"
        />
        <LoginInputComp
          value={password}
          onChangeText={password => updateState({password})}
          inputText="Password"
          placeholder="Password"
          onFocus={() => handleInputFocus('password')}
          onBlur={() => handleInputBlur('password')}
          secureTextEntry={show ? false : true}
          eyeIconPress={handleClick}
          eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
          isFocused={isFocused.password}
          eyeIcon={true}
          style={{marginTop: hp('2')}}
        />
        <LoginInputComp
          value={password}
          onChangeText={password => updateState({password})}
          inputText="Confirm Password"
          placeholder="Confirm password"
          onFocus={() => handleInputFocus('ConfirmPassword')}
          onBlur={() => handleInputBlur('ConfirmPassword')}
          secureTextEntry={show ? false : true}
          eyeIconPress={handleClick}
          eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
          isFocused={isFocused.ConfirmPassword}
          eyeIcon={true}
          style={{marginTop: hp('2')}}
        />
        <View style={styles.rememberView}>
          <CheckBox
            disabled={false}
            tintColors={'black'}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.rememberText}>Accept Terms of Services</Text>
        </View>
        <ButtonThemeComp
          isloading={isloading}
          onPress={() => signUpFun()}
          // onPress={() => navigation.navigate('OtpScreen')}
          text={'Sign Up'}
          style={{marginTop: hp('2')}}
        />
        <BottomTextComp
          style={{display: isKeyboardVisible}}
          onPress={() => navigation.navigate('LoginScreen')}
          note={"Don't have account ? "}
          heading={'Login'}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
