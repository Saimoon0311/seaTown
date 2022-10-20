import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {HeaderComp} from '../../../components/HeaderComp/HeaderComp';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import TextButtonComp from '../../../components/TextButtonComp/TextButtonComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../../components/color';
import {ButtonThemeComp} from '../../../components/ButtonThemeComp/ButtonThemeComp';
const RequestOfServices = ({navigation}) => {
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus eros platea amet, ut adipiscing aliquet. Metus blandit non amet, ultricies gravida nisi, dapibus interdum.',
  );

  const CoordenatesView = props => {
    let width = props.width ?? '90';
    let height = props.height ?? '6';
    return (
      <View
        style={{
          ...styles.coordenatesView,
          ...props?.style,
          height: hp(height),
          width: wp(width),
        }}>
        <Text style={styles.leftText}>{props?.coordArea}</Text>
        <Text style={styles.rightText}>{props?.coordenates}</Text>
        {props.icoNotShow != true && (
          <Ionicons
            name={props.name ?? 'ios-locate-outline'}
            color={color.textPrimaryColor}
            size={hp('2')}
          />
        )}
      </View>
    );
  };
  return (
    <>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={'Request Of Services'}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <CoordenatesView coordArea={`30°00'0.00' N`} coordenates={''} />
        <CoordenatesView coordArea={`30°00'0.00' N`} coordenates={''} />
        <View style={styles.dateTimeViewStyle}>
          <CoordenatesView
            width={'40'}
            name={'calendar'}
            coordArea={`13 May,2012`}
            coordenates={''}
          />

          <CoordenatesView
            width={'40'}
            name={'time-outline'}
            coordArea={`08:00 AM`}
            coordenates={''}
          />
        </View>
        <CoordenatesView
          coordArea={`Need Ice and Sunglases`}
          coordenates={''}
          icoNotShow={true}
        />
        <TextInput
          multiline
          numberOfLines={10}
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus eros platea amet, ut adipiscing aliquet. Metus blandit non amet, ultricies gravida nisi, dapibus interdum."
          keyboardType="numeric"
        />

        <Text
          style={{
            textAlign: 'right',
            marginTop: hp('0.5'),
            color: color.themeColorDark,
          }}>
          0/500
        </Text>
        <View style={{flexDirection: 'row'}}>
          <ImageBackground
            resizeMode="contain"
            style={styles.ImageBackgroundContainer}
            source={require('../../../images/image1.png')}>
            <MaterialIcons
              name="cancel"
              size={hp('2.5')}
              color={color.textColor}
              style={{
                textAlign: 'right',
                marginTop: hp('0.3'),
                marginRight: wp('3.1'),
              }}
            />
          </ImageBackground>

          <ImageBackground
            resizeMode="contain"
            style={styles.ImageBackgroundContainer}
            source={require('../../../images/image2.png')}>
            <MaterialIcons
              name="cancel"
              size={hp('2.5')}
              color={color.textColor}
              style={{
                textAlign: 'right',
                marginTop: hp('0.3'),
                marginRight: wp('3.1'),
              }}
            />
          </ImageBackground>
        </View>
        <TextButtonComp text={'Attachments'} name={'attachment'} />
        <ButtonThemeComp
          style={{
            backgroundColor: 'red',
            marginLeft: wp('6'),
            marginTop: hp('2'),
          }}
          text={'Reports'}
        />

        <Text
          style={{textAlign: 'center', width: wp('88'), marginTop: hp('1')}}>
          *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus
          velit arcu faucibus aliquet
        </Text>
      </ScrollView>
    </>
  );
};

export default RequestOfServices;
