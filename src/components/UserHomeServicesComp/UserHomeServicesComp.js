import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';
import {styles} from './styles';

export const UserHomeServicesComp = props => {
  const RederView = prop => {
    const {data} = prop;
    return (
      <TouchableOpacity
        onPress={() => props?.onPress(data)}
        style={{
          ...styles.touchView,
          backgroundColor: data?.id == 2 ? color.yellowTxtColor : 'white',
        }}>
        <Image
          source={data?.image}
          resizeMode="contain"
          style={{...styles.innerImage, ...data.style}}
        />
        <Text style={styles.innerText}>{data?.text}</Text>
      </TouchableOpacity>
    );
  };
  const rederView = () => {
    // const {data} = props;
    return <TouchableOpacity style={{...styles.touchView}}></TouchableOpacity>;
  };
  // const LoadingView = () => {
  //   return (
  //     <SkeletonContent
  //       containerStyle={{
  //         ...styles.flatListView,
  //         flexDirection: 'row',
  //         display: 'flex',
  //         flexWrap: 'wrap',
  //       }}
  //       animationType="pulse"
  //       isLoading={props.isloading}
  //       layout={[
  //         {...styles.touchView},
  //         {...styles.touchView},
  //         {...styles.touchView},
  //         {...styles.touchView},
  //         {...styles.touchView},
  //         {...styles.touchView},
  //         {...styles.touchView},
  //         {...styles.touchView},
  //         {...styles.touchView},
  //       ]}
  //     />
  //   );
  // };
  return props?.isloading ? (
    // <LoadingView />
    <ActivityIndicator
      size={hp('10')}
      color={color.textPrimaryColor}
      style={{alignSelf: 'center', marginTop: hp('20')}}
    />
  ) : (
    // rederView()
    <FlatList
      nestedScrollEnabled={true}
      data={props?.data}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      style={{}}
      contentContainerStyle={styles.flatListView}
      renderItem={({item}) => {
        return <RederView data={item} />;
      }}
    />
  );
};
