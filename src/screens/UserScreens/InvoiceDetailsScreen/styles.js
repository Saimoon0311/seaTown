import {StyleSheet} from 'react-native';
import {color} from '../../../components/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  invoiceView: {
    width: wp('85'),
    // height: hp('20'),
    borderRadius: 10,
    backgroundColor: color.backgroundGrayLight,
    alignSelf: 'center',
    marginTop: hp('2'),
    flexDirection: 'row',
    paddingLeft: wp('2'),
    paddingRight: wp('2'),
    paddingBottom: hp('2'),
    paddingTop: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftView: {
    width: wp('38'),
    justifyContent: 'space-between',
  },
  divider: {
    borderStyle: 'dashed',
    borderWidth: 1,
    width: wp('80'),
    alignSelf: 'center',
    borderColor: '#C4CFD4',
  },
  rightView: {
    justifyContent: 'space-between',
    width: wp('38'),
    alignItems: 'flex-end',
  },
});
