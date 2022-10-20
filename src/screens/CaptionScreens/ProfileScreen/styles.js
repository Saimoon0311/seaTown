import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../components/color';

export const styles = StyleSheet.create({
  dateTimeText: {color: color.lightBlueColor, fontSize: hp('1.8')},
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
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: hp('1'),
  },
  image: {
    marginHorizontal: wp('3'),
  },
  text: {
    fontSize: hp('1.7'),
    color: color.textColor,
  },
  captionText: {
    backgroundColor: color.textPrimaryColor,
    color: color.yellowTxtColor,
    borderRadius: 5,
    marginTop: hp('2'),
    padding: 5,
    fontWeight: hp('2'),
    fontWeight: 'bold',
    width: wp('20'),
    textAlign: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  mileText: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('2'),
    alignItems: 'center',
    marginBottom: hp('2'),
  },
  yearText: {
    color: color.lightBlueColor,
    marginLeft: 'auto',
    marginRight: wp('2'),
  },
});
