import React, {useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  ImageBackground,
  StatusBar,
  LogBox,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigatior from './src/navigations/navigation';

function AppTwo({navigation}) {
  const MyTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      // background: '#fffff',
      background: 'white',
    },
  };
  const [isVisible, setIsVisible] = useState(true);
  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };
  const time = () => {
    // if (Platform?.OS == 'android') {
    //   return 5000;
    // } else {
    //   return 9000;
    // }
    return 5000;
  };

  useEffect(async () => {
    (async () => {
      LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
        'ViewPropTypes will be removed from React Native',
      ]);
      LogBox.ignoreAllLogs(true);
    })();
    setTimeout(function () {
      Hide_Splash_Screen();
    }, time());
  }, []);

  let Splash_Screen = (
    <ImageBackground
      source={require('./src/images/SplashScreen.jpg')}
      style={styles.SplashScreen_RootView}></ImageBackground>
  );
  return (
    <>
      <StatusBar hidden={true} />
      {isVisible === true ? (
        Splash_Screen
      ) : (
        // <HomeScreen />
        <NavigationContainer>
          {/* <NavigationContainer theme={MyTheme}> */}
          <StackNavigatior />
        </NavigationContainer>
      )}
      <FlashMessage position="top" />
    </>
  );
}

export default AppTwo;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
