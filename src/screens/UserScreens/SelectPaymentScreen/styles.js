import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  cardView: {
    width: wp('90'),
    height: hp('10'),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: hp('2'),
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  imageView: {
    width: wp('20'),
    height: hp('10'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    width: wp('50'),
    height: hp('10'),
    justifyContent: 'center',
  },
  rightView: {
    width: wp('20'),
    height: hp('10'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
