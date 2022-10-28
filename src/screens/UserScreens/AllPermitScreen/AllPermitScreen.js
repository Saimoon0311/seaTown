import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import {color} from '../../../components/color';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AllPermitScreen = ({navigation}) => {
  const [allPermits, setAllPermits] = useState([
    {
      id: 1,
      image: require('../../../images/Towing.png'),
      text: 'Towing',
      innerImage: require('../../../images/TowingServices.png'),
      innerText: 'Towing Services',
      status: 'In Progress',
    },
    {
      id: 2,
      image: require('../../../images/Passenger.png'),
      text: 'Passenger Transfer',
      innerImage: require('../../../images/PassengerTranfer.png'),
      status: 'Completed',
    },
    {
      id: 3,
      image: require('../../../images/Fuel.png'),
      text: 'Refueling',
      innerImage: require('../../../images/RefullingServices.png'),
      status: 'Schedule',
    },
    {
      id: 4,
      image: require('../../../images/Customer.png'),
      text: 'Customer Services',
      status: 'Cancelled',
      innerImage: require('../../../images/RefullingServices.png'),
    },
    {
      id: 5,
      image: require('../../../images/Permit.png'),
      text: 'Sailing Permit',
      status: 'Schedule',
      innerImage: require('../../../images/ElectricalServices.png'),
    },
    {
      id: 6,
      image: require('../../../images/Report.png'),
      text: 'Report Incidenet',
      status: 'Completed',
      innerImage: require('../../../images/ElectricalServices.png'),
    },
    {
      id: 7,
      image: require('../../../images/Electrician.png'),
      text: 'Electrical Services',
      innerImage: require('../../../images/ElectricalServices.png'),
      status: 'Cancelled',
    },
    {
      id: 8,
      image: require('../../../images/Mechanical.png'),
      text: 'Mechanical Services',
      innerImage: require('../../../images/MechinacalServices.png'),
      status: 'In Progress',
    },
    {
      id: 9,
      image: require('../../../images/Road.png'),
      text: 'Road Insurance',
      status: 'In Progress',
      innerImage: require('../../../images/MechinacalServices.png'),
    },
  ]);
  const PermitsView = prop => {
    const {data} = prop;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('SailingPermitDetails', data)}
        style={styles.mainView}>
        <View style={styles.leftView}>
          <CircleImage
            styles={{
              width: Dimensions.get('window').width * 0.12,
              height: Dimensions.get('window').width * 0.12,
            }}
            image={data.innerImage}
          />
        </View>
        <View style={styles.centerView}>
          <TextHeadingCom
            style={{fontSize: hp('1.7')}}
            heading="Sailing Permit"
          />
          <TextHeadingCom
            style={{
              fontWeight: 'normal',
              color: color.lightBlueColor,
              fontSize: hp('1.7'),
            }}
            heading="21 feb,2022 | 12:43 AM"
          />
        </View>
        <View style={styles.rightView}>
          <TextHeadingCom
            heading="View"
            style={{
              color: color.textPrimaryColor,
              fontSize: hp('1.7'),
            }}
          />
          <MaterialIcons
            color={color.textPrimaryColor}
            size={hp('2')}
            name="arrow-forward-ios"
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <BackHeaderComp onPress={() => navigation.goBack()} heading="Permits" />
      <FlatList
        data={allPermits}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingBottom: hp('4')}}
        renderItem={({item}) => {
          return <PermitsView data={item} />;
        }}
      />
    </View>
  );
};

export default AllPermitScreen;
