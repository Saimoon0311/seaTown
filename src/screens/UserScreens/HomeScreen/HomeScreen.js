import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {WeatherHomeComp} from '../../../components/WeatherHomeComp/WeatherHomeComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {UserHomeServicesComp} from '../../../components/UserHomeServicesComp/UserHomeServicesComp';
import Foundation from 'react-native-vector-icons/Foundation';
import {color} from '../../../components/color';
import {styles} from './styles';

const HomeScreen = ({navigation}) => {
  const [services, setServices] = useState([
    {
      id: 1,
      image: require('../../../images/Towing.png'),
      text: 'Towing',
      innerImage: require('../../../images/TowingServices.png'),
      innerText: 'Towing Services',
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      priceType: 'Per hour',
    },
    {
      id: 2,
      innerText: 'Passenger Transfer',
      text: 'Passenger Transfer',
      image: require('../../../images/Passenger.png'),
      innerImage: require('../../../images/PassengerTranfer.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      priceType: 'Per mile',
    },
    {
      id: 3,
      innerText: 'Refueling Service',
      image: require('../../../images/Fuel.png'),
      text: 'Refueling',
      innerImage: require('../../../images/RefullingServices.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      priceType: 'Per Service',
    },
    {
      id: 4,
      innerText: 'Electrical Services',
      priceType: 'Per 30 mins',

      image: require('../../../images/Electrician.png'),
      text: 'Electrical Services',
      innerImage: require('../../../images/ElectricalServices.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      // ProName: 'Our Professional',
      Professional: [
        {
          id: 1,
          profession: 'electrician',
          name: 'Emerson Bator',
          rating: 4.5,
          image: require('../../../images/1.png'),
        },
        {
          id: 2,
          profession: 'electrician',
          name: 'Terry Dorwat',
          rating: 4.5,
          image: require('../../../images/2.png'),
        },
        {
          id: 3,
          profession: 'electrician',
          name: 'Nolan David',
          rating: 4.5,
          image: require('../../../images/3.png'),
        },
      ],
    },
    {
      id: 5,
      priceType: '30 mins',
      innerText: 'Mechanical Services',
      image: require('../../../images/Mechanical.png'),
      text: 'Mechanical Services',
      innerImage: require('../../../images/MechinacalServices.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      Professional: [
        {
          id: 1,
          profession: 'electrician',
          name: 'Emerson Bator',
          rating: 4.5,
          image: require('../../../images/1.png'),
        },
        {
          id: 2,
          profession: 'electrician',
          name: 'Terry Dorwat',
          rating: 4.5,
          image: require('../../../images/2.png'),
        },
        {
          id: 3,
          profession: 'electrician',
          name: 'Nolan David',
          rating: 4.5,
          image: require('../../../images/3.png'),
        },
      ],
    },
    {
      id: 6,
      rating: 4,
      priceType: 'Per Mile',
      image: require('../../../images/Road.png'),
      innerText: 'Road Insurance',
      innerImage: require('../../../images/RoadInsurance.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      rating: 4,
      text: 'Road Insurance',
      style: {width: wp('15')},
    },
    {
      id: 7,
      image: require('../../../images/Customer.png'),
      text: 'Customer Services',
    },
    {
      id: 8,
      image: require('../../../images/Permit.png'),
      text: 'Sailing Permit',
      innerImage: require('../../../images/MechinacalServices.png'),
      des: `he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum`,
      permitForm: true,
    },
    {
      id: 9,
      image: require('../../../images/Report.png'),
      text: 'Report Incident',
    },
  ]);
  const [loading, setLoading] = useState(true);
  const navigates = item => {
    item.text == 'Report Incident'
      ? navigation.navigate('RequestOfServices', {item: item})
      : navigation.navigate('ServicesDetailsScreen', {item: item});
  };
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        hidden={false}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'default'}
      />
      <HeaderComp
        notificationPress={() => navigation.navigate('NotificationScreen')}
        heading={'Home'}
        notification={true}
        openDrawer={() => navigation.navigate('UserDrawerComp')}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: hp('2'), paddingTop: hp('1')}}>
        <WeatherHomeComp onPress={() => navigation.navigate('WeatherScreen')} />
        <View style={styles.serContainer}>
          <TextHeadingCom
            heading="Services"
            style={{
              marginTop: hp('2'),
              marginLeft: hp('3'),
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('RequestOfServices')}
            style={styles.requestSmallButton}>
            <Image
              source={require('../../../images/requestButtonIcon.png')}
              resizeMode="contain"
            />
            {/* <Foundation
              name="page-edit"
              color={color.textPrimaryColor}
              size={hp('3')}
            /> */}
            <Text style={styles.serviceText}>Request a service</Text>
          </TouchableOpacity>
        </View>
        <UserHomeServicesComp
          onPress={item => navigates(item)}
          data={services}
          isloading={loading}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
