import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import {color} from '../../../components/color';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';
import TextInputWithTextCom from '../../../components/TextInputWithTextCom/TextInputWithTextCom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import KeyboardAdaptableView from 'react-native-keyboard-adaptable-view';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import moment from 'moment/moment';
import axios from 'react-native-axios';
import {SalingPermitUrl} from '../../../config/Urls';
import {errorMessage} from '../../../components/NotificationMessage';
import {useSelector} from 'react-redux';
import DocumentPicker, {types} from 'react-native-document-picker';
const PermitFormScreen = ({route, navigation}) => {
  const [fileResponse, setFileResponse] = useState([]);

  const [loading, setLoading] = useState(false);
  const {userData, token} = useSelector(state => state.userData);

  const [checkRenderView, setcheckRenderView] = useState({
    ServicesRequestCompleted: false,
  });
  const {ServicesRequestCompleted} = checkRenderView;
  const updateState = data =>
    setcheckRenderView(() => ({...checkRenderView, ...data}));
  const [permitFormState, setPermitFormState] = useState({
    boatNumber: '',
    boatName: '',
    dateOfExpiry: '',
    boatOwner: '',
    captainName: '',
    phoneNumber: '',
    DODeparture: '',
    TODeparture: '',
    PODeparture: '',
    TOArrival: '',
    DOArrival: '',
    Destination: '',
    NoOPassenger: '',
    NoOCrew: '',
    // isVisibleTime:false
  });
  const updatePermitState = data =>
    setPermitFormState(prev => ({...prev, ...data}));

  const {
    boatNumber,
    boatName,
    dateOfExpiry,
    boatOwner,
    captainName,
    phoneNumber,
    DODeparture,
    TODeparture,
    PODeparture,
    TOArrival,
    DOArrival,
    Destination,
    NoOPassenger,
    NoOCrew,
  } = permitFormState;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dodState, setDodState] = useState(false);
  const [doaState, setDoaState] = useState(false);
  const [todState, setTodState] = useState(false);
  const [toaState, setToaState] = useState(false);
  const dataPickerFuc = (date, showState, updateState) => {
    var a = moment(date).format('ddd, ll');
    showState(false);
    updatePermitState({[updateState]: a});
  };
  const TimePickerFunction = (time, showState, updateState) => {
    var b = moment(time).format('LT');
    showState(false);
    updatePermitState({[updateState]: b});
  };

  const permitFormFunction = () => {
    var formdata = new FormData();
    setLoading(true);
    if (
      boatNumber != '' &&
      boatName != '' &&
      dateOfExpiry != '' &&
      boatOwner != '' &&
      captainName != '' &&
      phoneNumber != '' &&
      DODeparture != '' &&
      TODeparture != '' &&
      PODeparture != '' &&
      TOArrival != '' &&
      DOArrival != '' &&
      Destination != '' &&
      NoOPassenger != '' &&
      NoOCrew != '' &&
      fileResponse != ''
    ) {
      formdata.append('boat_number', boatNumber);

      formdata.append('boat_name', boatName);
      formdata.append('date_of_Expiry', dateOfExpiry);
      formdata.append('boat_Owner', boatOwner);
      formdata.append('phone', phoneNumber);
      formdata.append('date_of_departure', DODeparture);
      formdata.append('time_of_departure', TODeparture);
      formdata.append('port_of_departure', PODeparture);
      formdata.append('time_of_arrival', TOArrival);
      formdata.append('date_of_arrival', DOArrival);
      formdata.append('Destination', Destination);
      formdata.append('no_of_passengers', NoOPassenger);
      formdata.append('no_of_crew', NoOCrew);
      fileResponse.length > 0 &&
        fileResponse.map(value => {
          formdata.append('image', {
            name: value?.name,
            uri: value?.uri,
            type: value?.type,
          });
        });
      // fileResponse.map(value => {
      //   return formdata.append('image', {
      //     uri: value?.uri,
      //     type: value?.type,
      //     name: value?.name,
      //   });
      // });

      // let body = {
      //   boat_number: boatNumber,
      //   boat_name: boatName,
      //   date_of_Expiry: dateOfExpiry,
      //   boat_Owner: boatOwner,
      //   captain_Name: captainName,
      //   phone: phoneNumber,
      //   date_of_departure: DODeparture,
      //   time_of_departure: TODeparture,
      //   port_of_departure: PODeparture,
      //   time_of_arrival: TOArrival,
      //   date_of_arrival: DOArrival,
      //   Destination: Destination,
      //   no_of_passengers: NoOPassenger,
      //   no_of_crew: NoOCrew,
      // };

      axios
        .post(SalingPermitUrl, formdata, {
          headers: {
            // Authorization: `Bearer ${token}`,
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function (res) {
          setLoading(false);
          updateState({ServicesRequestCompleted: true});
          updatePermitState({
            boatNumber: '',
            boatName: '',
            dateOfExpiry: '',
            boatOwner: '',
            captainName: '',
            phoneNumber: '',
            DODeparture: '',
            TODeparture: '',
            PODeparture: '',
            TOArrival: '',
            DOArrival: '',
            Destination: '',
            NoOPassenger: '',
            NoOCrew: '',
            image: '',
          });
          // successMessage('You have been successfully submitted!');
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
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf, types.docx],
        allowMultiSelection: true,
      });
      setFileResponse(response);
    } catch (err) {
      errorMessage('Please upload file again');
    }
  }, []);
  const ServicesRequestView = () => {
    return (
      <View style={styles.trackMainView}>
        <View style={{...styles.trackInnerView, height: hp('40')}}>
          <Ionicons
            name="close-sharp"
            color={color.lightBlueColor}
            size={hp('3')}
            onPress={() => updateState({ServicesRequestCompleted: false})}
            style={{
              alignSelf: 'flex-end',
              marginRight: wp('2'),
            }}
          />
          <Image
            source={require('../../../images/yellowTick.png')}
            resizeMode={'contain'}
            style={{alignSelf: 'center'}}
          />
          <TextHeadingCom
            heading="Your Form has been Submitted!"
            style={{textAlign: 'center', fontWeight: '500'}}
          />
          <TextHeadingCom
            heading="Successfully!"
            style={{textAlign: 'center'}}
          />
          <View style={{alignItems: 'center'}}>
            <TextHeadingCom
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nulla aliquet malesuada morbi purus."
              style={{
                textAlign: 'center',
                color: color.textInputColor,
                width: wp('70'),
                marginBottom: hp('3'),
                fontWeight: '500',
                fontSize: hp('1.5'),
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  const DocumentView = props => {
    return (
      <View>
        <View style={{...styles.button}}>
          <Image
            style={{...styles.image, ...props.imageStyle}}
            // resizeMode="contain"
            source={props?.image}
          />
          <View>
            <Text style={{...styles.text}}>{props?.title}</Text>
            <Text style={{...styles.text, color: color.lightBlueColor}}>
              {props?.work}
            </Text>
          </View>
          <View style={styles.yearText}>
            <Ionicons
              name="close-circle-sharp"
              color={color.lightBlueColor}
              size={hp('3')}
              style={{
                marginLeft: 'auto',
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  const PlusButtonText = props => {
    const {styles} = props;
    return (
      <View
        style={{
          flexDirection: 'row',
          width: wp('25'),
          justifyContent: 'space-between',
          alignItems: 'center',
          ...styles,
        }}>
        <Image
          source={require('../../../images/Plus.png')}
          resizeMode="contain"
        />
        <Text style={{color: 'black', fontSize: hp('1.7')}}>{props?.text}</Text>
      </View>
    );
  };
  return (
    <>
      <KeyboardAwareScrollView contentContainerStyle={styles.Container}>
        <BackHeaderComp
          onPress={() => navigation.goBack()}
          heading={'Sailing Permit Form'}
        />
        {/* <ScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.Container}> */}
        {/* <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          // enabled={true}
          // keyboardVerticalOffset={Platform.OS === 'ios' ? hp('2') : hp('-1')}
          // contentContainerStyle={{backgroundColor: 'transparent'}}
          style={{backgroundColor: 'transparent', flexGrow: 1}}> */}
        <View
          style={{
            // flex: 1,
            // paddingBottom: hp('3'),
            justifyContent: 'space-evenly',
          }}>
          <TextInputWithTextCom
            keyboardType="number-pad"
            value={boatNumber}
            onChangeText={val => updatePermitState({boatNumber: val})}
            placeholder={'Boat Number'}
            upperText={'Boat Number'}
            textInputstyle={{
              width: wp('80'),
              color: 'black',
            }}
          />
          <TextInputWithTextCom
            value={boatName}
            onChangeText={val => updatePermitState({boatName: val})}
            placeholder={'Boat Name'}
            upperText={'Boat Name'}
            textInputstyle={{
              color: 'black',
              width: wp('80'),
            }}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={e => {
              dataPickerFuc(e, setDatePickerVisibility, 'dateOfExpiry');
            }}
            onCancel={() => setDatePickerVisibility(false)}
          />
          <Pressable onPress={() => setDatePickerVisibility(true)}>
            <TextInputWithTextCom
              editable={false}
              value={dateOfExpiry}
              placeholder={'Date of Expiry'}
              upperText={'Date of Expiry'}
              showIcon={true}
              iconName={'calendar-outline'}
              textInputstyle={{
                color: 'black',
                width: wp('80'),
              }}
            />
          </Pressable>

          <TextInputWithTextCom
            value={boatOwner}
            onChangeText={val => updatePermitState({boatOwner: val})}
            placeholder={'Boat Owner'}
            upperText={'Boat Owner'}
            textInputstyle={{
              color: 'black',
              width: wp('80'),
            }}
          />
          <TextInputWithTextCom
            value={captainName}
            onChangeText={val => updatePermitState({captainName: val})}
            placeholder={'Captain Name'}
            upperText={'Captain Name'}
            textInputstyle={{
              color: 'black',
              width: wp('80'),
            }}
          />
          <TextInputWithTextCom
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={val => updatePermitState({phoneNumber: val})}
            placeholder={'Phone'}
            upperText={'Phone Number'}
            textInputstyle={{
              color: 'black',
              width: wp('80'),
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <DateTimePickerModal
              isVisible={dodState}
              mode="date"
              onConfirm={e => dataPickerFuc(e, setDodState, 'DODeparture')}
              onCancel={() => setDodState(false)}
            />
            <Pressable onPress={() => setDodState(true)}>
              <TextInputWithTextCom
                editable={false}
                value={DODeparture}
                placeholder={'D.O.Departure'}
                upperText={'D.O.Departure'}
                showIcon={true}
                iconName={'calendar-outline'}
                style={{width: wp('45')}}
                textInputstyle={{width: wp('35'), color: 'black'}}
              />
            </Pressable>
            <DateTimePickerModal
              isVisible={todState}
              mode="time"
              onConfirm={e => {
                TimePickerFunction(e, setTodState, 'TODeparture');
              }}
              onCancel={() => setTodState(false)}
            />
            <Pressable onPress={() => setTodState(true)}>
              <TextInputWithTextCom
                editable={false}
                value={TODeparture}
                placeholder={'Time of Departure'}
                upperText={'Time of Departure'}
                style={{width: wp('43')}}
                showIcon={true}
                iconName={'ios-time-outline'}
                textInputstyle={{
                  color: 'black',
                  width: wp('32'),
                }}
              />
            </Pressable>
          </View>
          <TextInputWithTextCom
            value={PODeparture}
            onChangeText={val => updatePermitState({PODeparture: val})}
            placeholder={'Port of Jebel Ali'}
            upperText={'Port of Departure'}
            textInputstyle={{
              color: 'black',
              width: wp('80'),
            }}
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <DateTimePickerModal
              isVisible={toaState}
              mode="time"
              onConfirm={e => {
                TimePickerFunction(e, setToaState, 'TOArrival');
              }}
              onCancel={() => setToaState(false)}
            />
            <Pressable onPress={() => setToaState(true)}>
              <TextInputWithTextCom
                editable={false}
                value={TOArrival}
                // onChangeText={val => updatePermitState({TOArrival: val})}
                placeholder={'Time of Arrival'}
                upperText={'Time of Arrival'}
                showIcon={true}
                iconName={'ios-time-outline'}
                style={{width: wp('43')}}
                textInputstyle={{width: wp('32')}}
              />
            </Pressable>
            <DateTimePickerModal
              isVisible={doaState}
              mode="date"
              onConfirm={e => dataPickerFuc(e, setDoaState, 'DOArrival')}
              onCancel={() => setDoaState(false)}
            />
            <Pressable onPress={() => setDoaState(true)}>
              <TextInputWithTextCom
                editable={false}
                value={DOArrival}
                placeholder={'Date of Arrival'}
                upperText={'Date of Arrival'}
                style={{width: wp('45')}}
                showIcon={true}
                iconName={'calendar-outline'}
                textInputstyle={{
                  width: wp('35'),
                }}
              />
            </Pressable>
          </View>
          <TextInputWithTextCom
            value={Destination}
            onChangeText={val => updatePermitState({Destination: val})}
            placeholder={'Destination'}
            upperText={'Destination'}
            textInputstyle={{
              color: 'black',
              width: wp('80'),
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInputWithTextCom
              keyboardType="number-pad"
              value={NoOPassenger}
              onChangeText={val => updatePermitState({NoOPassenger: val})}
              placeholder={'No. of Passenger'}
              upperText={'No. of Passenger'}
              style={{width: wp('43')}}
              textInputstyle={{width: wp('32'), color: 'black'}}
            />
            <TextInputWithTextCom
              keyboardType="number-pad"
              value={NoOCrew}
              onChangeText={val => updatePermitState({NoOCrew: val})}
              placeholder={'No. of Crew'}
              upperText={'No. of Crew'}
              style={{width: wp('43')}}
              textInputstyle={{
                color: 'black',
                width: wp('32'),
              }}
            />
          </View>

          <View style={styles.headingView}>
            <TextHeadingCom heading="Document" />
            <TouchableOpacity onPress={() => handleDocumentSelection()}>
              <PlusButtonText
                styles={{
                  marginLeft: 'auto',
                  width: wp('30'),
                }}
                text="Upload More"
              />
            </TouchableOpacity>
          </View>

          {fileResponse.map((file, index) => {
            return (
              <DocumentView
                image={
                  file?.type == 'application/pdf'
                    ? require('../../../images/pdf.png')
                    : require('../../../images/doc.png')
                }
                title={file?.name}
                work={file?.size}
              />
            );
          })}

          <CommonButtonComp
            isloading={loading}
            text="Submit"
            textStyle={{fontWeight: 'bold'}}
            onPress={() => permitFormFunction()}
            viewStyle={{
              width: wp('85'),
              marginTop: hp('2'),
              marginBottom: hp('2'),
            }}
          />
        </View>
        {/* </KeyboardAvoidingView> */}
        {/* </ScrollView> */}
      </KeyboardAwareScrollView>
      {ServicesRequestCompleted && <ServicesRequestView />}
      {/* // // </KeyboardAdaptableView> */}
    </>
  );
};

export default PermitFormScreen;
