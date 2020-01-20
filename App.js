/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, Platform, StatusBar, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';

import HomeScreen from './src/home/container/index';
import HomeScreen2 from './src/home/container/index2';
import AskBobScreen from './src/home/container/askbob';
import SearchScreen from './src/home/container/search';
import SearchScreen2 from './src/home/container/search2';
import SearchAllScreen from './src/home/container/searchAll';
// import { platform } from 'os';

// const TabBarComponent = props => <BottomTabBar {...props} />;    

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Fontisto name={name} size={size} color={color} />
      </View>
    );
  }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Fontisto;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    // IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Settings') {
    iconName = `ios-options${focused ? '' : '-outline'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const BottomNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor, focused}) => {
        // <View>
        return <Fontisto name={focused ? 'apple' : 'apple'} size={26} style={{color: tintColor}}></Fontisto>
        // </View>
      }
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: '搜索',
      tabBarIcon: ({tintColor, focused}) => {
        // <View>
        return <Fontisto name={focused ? 'react' : 'react'} size={26} style={{color: tintColor}} ></Fontisto>
        // </View>
      }
    },
  },
  AskBob: {
    screen: AskBobScreen,
    navigationOptions: {
      // tabBarLabel: 'askbob',
      title: '',
      tabBarIcon: ({tintColor, focused}) => {
        return (
          <View style={{position: 'absolute', left: 0, top: 20, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
            <View style={{width: '100%', height: '100%',position: 'relative', left: 0, top: -15, width: 50, height: 50, borderRadius: 50, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}>
              {/* <Text style={{textAlign: 'center'}}>dddd</Text> */}
              <View style={{backgroundColor: '#fff', padding: 4, borderRadius: 50}}>
                <Image
                  source={require('./src/home/assets/askbob.png')}
                  style={{width: 50, height: 50}}
                />
              </View>
            </View>
          </View>
        )
      }
    },
  },
  Home2: {
    screen: HomeScreen2,
    navigationOptions: {
      tabBarLabel: 'tesla',
      tabBarIcon: ({tintColor, focused}) => {
        // <View>
          return <Fontisto name={focused ? 'tesla' : 'tesla'} size={26} style={{color: tintColor}} ></Fontisto>
        // </View>
      }
    },
  },
  Search2: {
    screen: SearchScreen2,
    navigationOptions: {
      tabBarLabel: 'webpack',
      tabBarIcon: ({tintColor, focused}) => {
        // <View>
          return <Fontisto name={focused ? 'webpack' : 'webpack'} size={26} style={{color: tintColor}} ></Fontisto>
        // </View>
      }
    },
  }
}, {
  lazy: true,
  tabBarOptions: {
    // showLabel: false,
    activeTintColor: '#e91e63',
    style: {
      borderTopWidth: 0,
      borderTopColor: '#fff',
      // flexDirection: 'row',
    }
  },
});

const StackNavigator = createStackNavigator({
  Home: { 
    screen: BottomNavigator,
    navigationOptions: {
      headerShown: false,
    } 
  },
  SearchAll: {
    screen: SearchAllScreen,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
      // headerBackTitle: null,
      // headerBackTitleStyle: {
      //   marginLeft: 20,
      // },
      headerLeftContainerStyle: {
        paddingLeft: 10,
      },
      // headerTransparent: true,
      headerLeft: () => {
        return (
          <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'transparent'}>
            <Image
              source={require('./src/home/assets/back.png')}
              style={{width: 28, height: 28}}
            />
          </TouchableHighlight>
        )
      }
    })
  }
},{
  initialRouteName: "Home",
  // mode: 'modal',
  // headerMode: 'none',s
});
export default createAppContainer(StackNavigator);
// export default createAppContainer(
  
// );

// export default createAppContainer(AppNavigator);
