import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './styles';

export const UserHomeServicesComp = props => {
  const RederView = prop => {
    const {data} = prop;
    return (
      <TouchableOpacity
        onPress={() => props?.onPress(data)}
        style={{
          ...styles.touchView,
          backgroundColor: data?.id == 2 ? 'yellow' : 'white',
        }}
      >
        <Image
          source={data?.image}
          resizeMode="contain"
          style={styles.innerImage}
        />
        <Text style={styles.innerText}>{data?.text}</Text>
      </TouchableOpacity>
    );
  };
  const rederView = () => {
    // const {data} = props;
    return <TouchableOpacity style={{...styles.touchView}}></TouchableOpacity>;
  };
  const LoadingView = () => {
    return (
      // <SkeletonPlaceholder>
      <View
        style={{
          width: wp('100'),
          alignItems: 'center',
          marginTop: hp('2'),
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {rederView()}
        {rederView()}
        {rederView()}
        {rederView()}
        {rederView()}
        {rederView()}
        {rederView()}
        {rederView()}
        {rederView()}
      </View>
      // {/* </SkeletonPlaceholder> */}
    );
  };
  return props?.isloading ? (
    <LoadingView />
  ) : (
    // rederView()
    <FlatList
      data={props?.data}
      keyExtractor={(item, index) => item.id}
      // keyExtractor={(item, index) => `key-${index}`}
      numColumns={3}
      contentContainerStyle={styles.flatListView}
      renderItem={({item}) => {
        return <RederView data={item} />;
      }}
    />
  );
};
