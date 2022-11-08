import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  requestSmallButton: {
    // width: wp('40'),
    height: hp('5'),
    borderColor: color.textPrimaryColor,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    borderStyle: 'dashed',
    alignItems: 'center',
    marginTop: hp('2'),
    backgroundColor: color.lightPurpleView,
    flexDirection: 'row',
    paddingLeft: wp('3'),
    paddingRight: wp('3'),
  },
  serContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('95'),
    alignItems: 'center',
    marginTop: hp('2'),
    marginBottom: hp('1'),
  },
  serviceText: {
    color: 'black',
    fontSize: hp('2'),
    marginLeft: wp('2'),
    fontSize: hp('1.7'),
    fontWeight: 'bold',
  },
});
