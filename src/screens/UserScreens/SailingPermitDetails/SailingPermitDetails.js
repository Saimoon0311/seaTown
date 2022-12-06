import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {TextHeadingCom} from '../../../components/TextHeadingCom/TextHeadingCom';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import {color} from '../../../components/color';
import {CircleImage} from '../../../components/CircleImage/CircleImage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment/moment';

const SailingPermitDetails = ({navigation, route}) => {
  const data2 = route.params;
  let timeData = moment(data2.time_of_departure, 'h:mm').format('LT');
  const [data, setData] = useState([
    {
      id: 1,
      image: require('../../../images/Towing.png'),
      text: 'Boat Number',
      innerImage: require('../../../images/TowingServices.png'),
      innerText: 'Towing Services',
      status: 'AE 1882',
    },
    {
      id: 2,
      image: require('../../../images/Passenger.png'),
      text: 'Boat Name',
      innerImage: require('../../../images/PassengerTranfer.png'),
      status: 'Zephyr',
    },
    {
      id: 3,
      image: require('../../../images/Fuel.png'),
      text: 'Date of Expiry',
      innerImage: require('../../../images/RefullingServices.png'),
      status: '12 Dec, 2023',
    },
    {
      id: 4,
      image: require('../../../images/Customer.png'),
      text: 'Boat Owner',
      status: 'Eric Lyman',
      innerImage: require('../../../images/RefullingServices.png'),
    },
    {
      id: 5,
      image: require('../../../images/Permit.png'),
      text: 'Phone',
      status: '55 005 2054',
      innerImage: require('../../../images/ElectricalServices.png'),
    },
    {
      id: 6,
      image: require('../../../images/Report.png'),
      text: "Captain's Name",
      status: 'Davis Workman',
      innerImage: require('../../../images/ElectricalServices.png'),
    },
    {
      id: 7,
      image: require('../../../images/Electrician.png'),
      text: 'Date of Departure',
      innerImage: require('../../../images/ElectricalServices.png'),
      status: '13 Oct, 2022',
    },
    {
      id: 8,
      image: require('../../../images/Mechanical.png'),
      text: 'Time of Departure',
      innerImage: require('../../../images/MechinacalServices.png'),
      status: '05:45 PM',
    },
    {
      id: 9,
      image: require('../../../images/Road.png'),
      text: 'Port of Departure',
      status: '05:45 PM',
      innerImage: require('../../../images/MechinacalServices.png'),
    },
    {
      id: 10,
      image: require('../../../images/Road.png'),
      text: 'Time of Arrival',
      status: '16 Oct, 2022',
      innerImage: require('../../../images/MechinacalServices.png'),
    },
    {
      id: 11,
      image: require('../../../images/Road.png'),
      text: 'Date of Arrival',
      status: 'Mina Rashid Port',
      innerImage: require('../../../images/MechinacalServices.png'),
    },
    {
      id: 12,
      image: require('../../../images/Road.png'),
      text: 'Destination',
      status: 'Port of Jebel Ali',
      innerImage: require('../../../images/MechinacalServices.png'),
    },
    {
      id: 13,
      image: require('../../../images/Road.png'),
      text: 'No. of passenger',
      status: '37',
      innerImage: require('../../../images/MechinacalServices.png'),
    },
    {
      id: 14,
      image: require('../../../images/Road.png'),
      text: 'No. of crew',
      status: '4',
      innerImage: require('../../../images/MechinacalServices.png'),
    },
  ]);
  const DocumentView = props => {
    return (
      <View>
        <View style={{...styles.button}}>
          <Image
            style={{...styles.image, width: wp('8'), height: hp('4')}}
            resizeMode="contain"
            source={props?.image}
          />
          <View>
            <Text style={{...styles.text}}>{props?.title}</Text>
            <Text style={{...styles.text, color: color.lightBlueColor}}>
              {props?.work}
            </Text>
          </View>
          {/* <Text
          style={{
            ...styles.text,
            ...styles.yearText,
          }}>
          {props?.time}
        </Text> */}
        </View>
      </View>
    );
  };
  const PermitDetailsText = props => {
    return (
      <View style={styles.detailsView}>
        <TextHeadingCom
          style={{color: color.lightBlueColor, fontWeight: 'normal'}}
          heading={props?.heading}
        />
        <TextHeadingCom style={{fontWeight: 'normal'}} heading={props?.name} />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading="Sailing Permit"
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp('10')}}>
        <View style={styles.mainView}>
          <View style={styles.leftView}>
            <CircleImage
              styles={{
                width: Dimensions.get('window').width * 0.12,
                height: Dimensions.get('window').width * 0.12,
              }}
              image={data[0].innerImage}
            />
          </View>
          <View style={styles.centerView}>
            <TextHeadingCom
              style={{fontSize: hp('1.7')}}
              heading={`${data2?.captain_name}`}
            />
            <TextHeadingCom
              style={{
                fontWeight: 'normal',
                color: color.lightBlueColor,
                fontSize: hp('1.7'),
              }}
              heading={`${data2?.date_of_departure} | ${timeData}`}
            />
          </View>
        </View>
        <View style={{marginTop: hp('4')}}>
          <PermitDetailsText
            heading={'Boat Number'}
            name={data2?.boat_number}
          />
          <PermitDetailsText heading={'Boat Name'} name={data2?.boat_name} />
          <PermitDetailsText
            heading={'Date of Expiry'}
            name={data2?.boat_name}
          />
          <PermitDetailsText heading={'Boat Owner'} name={data2?.boat_owner} />
          <PermitDetailsText heading={'Phone'} name={data2?.phone} />
          <PermitDetailsText
            heading={`Captain's Name`}
            name={data2?.captain_name}
          />
          <PermitDetailsText
            heading={'Date of Departure'}
            name={data2?.date_of_departure}
          />
          <PermitDetailsText
            heading={'Time of Departure'}
            name={data2?.time_of_departure}
          />
          <PermitDetailsText
            heading={'Port of Departure'}
            name={data2?.port_of_departure}
          />
          <PermitDetailsText
            heading={'Time of Arrival'}
            name={data2?.time_of_departure}
          />
          <PermitDetailsText
            heading={'Date of Arrival'}
            name={data2?.date_of_arrival}
          />
          <PermitDetailsText
            heading={'Destination'}
            name={data2?.destination}
          />
          <PermitDetailsText
            heading={'No. of passenger'}
            name={data2?.no_of_passengers}
          />
          <PermitDetailsText heading={'No. of crew'} name={data2?.no_of_crew} />
        </View>
        <TextHeadingCom
          heading="Document"
          style={{marginTop: hp('3'), marginLeft: wp('5')}}
        />
        <DocumentView
          image={require('../../../images/doc.png')}
          title={'Emirates ID'}
          work={'1.59mb'}
        />
        <DocumentView
          image={require('../../../images/pdf.png')}
          title={'Dubai Marine license'}
          work={'55kb'}
        />
      </ScrollView>
    </View>
  );
};

export default SailingPermitDetails;
