import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {BackHeaderComp} from '../../../components/BackHeaderComp/BackHeaderComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './styles';
import StarRating from 'react-native-star-rating-widget';
import {color} from '../../../components/color';
import {globalStyles} from '../../../config/globalStyles';
import {CommonButtonComp} from '../../../components/CommonButtonComp/CommonButtonComp';

const ServicesDetailsScreen = ({route, navigation}) => {
  const [txt, setTxt] = useState();
  const items = route.params.item;
  const OurProffessional = () => {
    return (
      <View style={styles.listContainer}>
        <Text>Our Professional</Text>
        <View>
          <FlatList
            data={items?.electricServices}
            keyExtractor={(item, index) => index.toString()}
            numColumns={1}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListView}
            renderItem={({item}) => {
              console.log(item);
              return (
                <View style={styles.boxView}>
                  <Image source={item?.image} />
                  <Text
                    style={{
                      marginTop: hp('1'),
                      color: color.lightBlueColor,
                      fontSize: hp('1.3'),
                    }}
                  >
                    {item?.profession}
                  </Text>
                  <Text
                    style={{
                      ...globalStyles.globalTextStyles4,
                      fontSize: hp('1.5'),
                    }}
                  >
                    {item?.name}
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: hp('0.5')}}>
                    <Text style={{fontSize: hp('1.2')}}>{item?.rating}</Text>

                    <StarRating
                      rating={item?.rating}
                      maxStars={1}
                      color={color.yellowTxtColor}
                      starSize={wp('3.5')}
                      starStyle={{marginRight: wp('2'), width: wp('0.5')}}
                      enableSwiping={false}
                      onChange={txt => setTxt(txt)}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  };
  console.log(5465465, items);
  return (
    <>
      <BackHeaderComp
        onPress={() => navigation.goBack()}
        heading={items?.text}
      />
      <ScrollView>
        <Image
          source={items?.innerImage}
          resizeMode="contain"
          style={{
            alignSelf: 'center',
            marginTop: hp('2'),
          }}
        />
        <View style={styles.topTextContainer}>
          <Text style={{...globalStyles.globalTextStyles4}}>
            {items.innerText}
          </Text>
          {items.rating && (
            <View
              style={{
                flexDirection: 'row',
                marginTop: hp('0.9'),
                alignItems: 'center',
              }}
            >
              <StarRating
                rating={items.rating}
                maxStars={5}
                color={color.yellowTxtColor}
                starSize={wp('4.5')}
                starStyle={{width: wp('1')}}
                enableSwiping={false}
                onChange={txt => setTxt(txt)}
              />
              <Text
                style={{
                  color: color.black,
                  marginLeft: wp('3'),
                  fontSize: hp('1.5'),
                  fontWeight: 'bold',
                  textAlignVertical: 'center',
                }}
              >
                {items?.rating}
              </Text>
            </View>
          )}
          <Text
            style={{
              ...globalStyles.globalTextStyles2,
              width: wp('83'),
              marginTop: hp('2'),
              color: color.lightBlueColor,
              textAlign: 'justify',
              lineHeight: hp('2'),
            }}
          >
            {items?.des}
          </Text>
        </View>
        {items?.electricServices?.length > 0 && <OurProffessional />}
      </ScrollView>
      <View style={styles.bottomBarView}>
        <View style={styles.bottomInerTxtView}>
          <Text style={{...globalStyles.globalTextStyles4, fontSize: hp('3')}}>
            AED 750
          </Text>
          <Text
            style={{
              ...globalStyles.globalTextStyles2,
              color: color.lightBlueColor,
              fontSize: hp('2'),
            }}
          >
            per hour
          </Text>
        </View>
        <CommonButtonComp
          text="Book Now"
          viewStyle={{
            marginRight: wp('4'),
            width: wp('30'),
          }}
          textStyle={{
            fontWeight: '600',
          }}
        />
      </View>
    </>
  );
};

export default ServicesDetailsScreen;
