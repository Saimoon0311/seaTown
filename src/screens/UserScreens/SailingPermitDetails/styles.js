import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  mainView: {
    width: wp('100'),
    height: hp('9'),
    alignSelf: 'center',
    marginTop: hp('2'),
    borderRadius: 10,
    flexDirection: 'row',
  },
  leftView: {
    width: wp('20'),
    height: hp('9'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    width: wp('50'),
    height: hp('9'),
    justifyContent: 'center',
  },
  rightView: {
    width: wp('20'),
    height: hp('9'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailsView: {
    width: wp('90'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: hp('6'),
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: wp('90'),
    height: hp('6'),
    marginBottom: hp('1'),
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: hp('1'),
  },
  image: {
    marginHorizontal: wp('3'),
  },
  text: {
    fontSize: hp('1.7'),
    color: color.textColor,
  },
});
