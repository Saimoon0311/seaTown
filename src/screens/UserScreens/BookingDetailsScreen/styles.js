import {StyleSheet} from 'react-native';
import {color} from '../../../components/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  coordenatesView: {
    width: wp('90'),
    backgroundColor: color.lightGrayColor,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('2'),
    flexDirection: 'row',
  },
  leftText: {color: 'black', fontSize: hp('1.7'), marginLeft: wp('1')},
  rightText: {color: 'black', fontSize: hp('1.7'), marginLeft: 'auto'},
  banner: {
    width: wp('90'),
    //   height: hp('20'),
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: hp('2'),
    borderRadius: 10,
  },
  headingView: {
    width: wp('90'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  issueText: {color: 'black', fontWeight: '500', fontSize: hp('2')},
  dateTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('0.5'),
    alignItems: 'center',
  },
  dateTimeText: {color: color.lightBlueColor, fontSize: hp('1.5')},
  priceButton: {
    width: wp('20'),
    backgroundColor: color.textPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('3.5'),
    borderRadius: 8,
  },
  messageText: {
    width: wp('90'),
    color: color.lightBlueColor,
    alignSelf: 'center',
    textAlign: 'justify',
    marginTop: hp('1'),
    fontSize: hp('1.8'),
  },
  userView: {
    marginTop: hp('2'),
    width: wp('90'),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressView: {
    flexDirection: 'row',
    width: wp('90'),
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  trackMainView: {
    position: 'absolute',
    height: hp('100'),
    width: wp('100'),
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(42,42,42,0.6)',
    top: 0,
    bottom: 0,
    zIndex: 1,
    flex: 1,
  },
  trackInnerView: {
    width: wp('80'),
    height: hp('35'),
    backgroundColor: 'white',
    borderRadius: 10,
    top: hp('-3'),
    justifyContent: 'space-around',
  },
  rememberView: {
    flexDirection: 'row',
    width: wp('80'),
    alignSelf: 'center',
    // marginTop: hp('2'),
    alignItems: 'center',
    marginLeft: wp('6'),
    // backgroundColor: 'red',
  },
  rememberText: {
    color: color.lightBlueColor,
    fontSize: hp('1.8'),
    marginLeft: wp('2'),
  },
  input: {
    padding: 10,
    // paddingTop: hp('2'),
    borderRadius: 10,
    alignSelf: 'center',
    // marginTop: hp('2'),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.lightBlueColor,
    // alignItems: 'center',
    height: hp('15'),
    width: wp('70'),
    // backgroundColor: 'red',
  },
  centerViewTopText: {
    width: wp('75'),
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  bottomScheduleText: {
    color: color.textPrimaryColor,
    fontSize: hp('1.8'),
    textAlign: 'center',
    lineHeight: hp('3'),
  },
  bottomScheduleView: {
    width: wp('90'),
    height: hp('10'),
    backgroundColor: color.lightPurpleView,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('10'),
  },
  inputView: {
    // backgroundColor: color.lightBlueColor,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('2'),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.lightBlueColor,
    alignItems: 'center',
  },
});
