import React, { Component } from 'react';
import { View, Button, TextInput, Text, StatusBar, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView, TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import TabBarExample from './icon.js';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#eee',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  state = {
    inputText: '搜索',
    iconSize: 48,
    footIconSize: 20,
    iconsMap: [{
      name: 'apple',
    }, {
      name: 'react',
    },{
      name: 'coffeescript',
      size: 50,
    }, {
      name: 'tesla'
    }, {
      name: 'webpack'
    }]
  }

  render() {
    const {height, width} = Dimensions.get('window');
    const { iconsMap, footIconSize } = this.state;
    return (
      <View>
        <StatusBar barStyle="default" />
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="github-alt" backgroundColor="#3b5998" size={30} iconStyle={{marginRight: 20}}></Icon>
                <TextInput style={styles.input} placeholder="Type here to translate!" />
                <Ionicons name="ios-qr-scanner" backgroundColor="#3b5998" size={30} iconStyle={{marginRight: 20}}></Ionicons>
            </View>
            <ScrollView style={{padding: 10}}>
              <View style={{marginBottom: 220}}>
                <View style={styles.mainContent}>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Fontisto name='apple' size={this.state.iconSize} color="#000"></Fontisto>
                    <Text style={{marginTop: 10, textAlign: 'center'}}>Apple</Text>
                  </View>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Fontisto name='react' size={this.state.iconSize} color="#000"></Fontisto>
                    <Text style={{marginTop: 10, textAlign: 'center'}}>React</Text>
                  </View>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Fontisto name='tesla' size={this.state.iconSize} color="#000"></Fontisto>
                    <Text style={{marginTop: 10, textAlign: 'center'}}>Tesla</Text>
                  </View>
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Fontisto name='webpack' size={this.state.iconSize} color="#000"></Fontisto>
                    <Text style={{marginTop: 10, textAlign: 'center'}}>Webpack</Text>
                  </View>
                </View>
                <View style={{marginTop: 30}}>
                  <Image
                    source={require('../assets/1.jpeg')}
                    style={{width: 390, height: 240}}
                  />
                </View>
                <View style={styles.msgContainer}>
                  <Text style={styles.msgText}>注意：尽管尺寸信息立即就可用，但它可能会在将来被修改（譬如设备的方向改变），所以基于这些常量的渲染逻辑和样式应当每次 render 之后都调用此函数，而不是将对应的值保存下来。（举例来说，你可能需要使用内联的样式而不是在StyleSheet中保存相应的尺寸）。</Text>
                </View>
                <View style={styles.msgContainer}>
                  <Text style={styles.msgText}>
                    React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。
                    React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。
                  </Text>
                </View>
                <View style={styles.msgContainer}>
                  <Text style={styles.msgText}>注意：尽管尺寸信息立即就可用，但它可能会在将来被修改（譬如设备的方向改变），所以基于这些常量的渲染逻辑和样式应当每次 render 之后都调用此函数，而不是将对应的值保存下来。（举例来说，你可能需要使用内联的样式而不是在StyleSheet中保存相应的尺寸）。</Text>
                </View>
              </View>
            </ScrollView>
            <View style={[styles.footer, {width: '100%'}]}>
              <View style={styles.mainContent}>
                {iconsMap.map((item, index) => {
                  return (
                    <View style={{alignItems: 'center', justifyContent: 'center'}} key={index}>
                      <Fontisto name={item.name} size={item.size || footIconSize} color="#000"></Fontisto>
                      { index === 2 ? null : <Text style={{marginTop: 10, textAlign: 'center'}}>{ item.name}</Text>}
                    </View>
                  )
                })}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const screenMsg = Dimensions.get('window');
const { width, height } = screenMsg;

const styles = StyleSheet.create({
  safeArea: {
    padding: 20,
  },
  container: {
    // position: 'relative',
    // flex: 1,
    // minHeight: height,
    // padding: 10,s
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#EEE',
    borderWidth: 0,
    borderRadius: 8,
    paddingLeft: 10
  },
  image: {
    marginTop: 30,
    height: 240,
  },
  mainContent: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  msgContainer: {
    marginTop: 30,
    width: '100%',
    height: 170,
    backgroundColor: '#ddd', 
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  msgText: {
    fontSize: 16,
    lineHeight: 22,
  },
  footer: {
    position: "absolute",
    left: 0,
    bottom: 90,
    zIndex: 1000,
    height: 110,
    // paddingBottom: 20,
    backgroundColor: '#fff',
  }
});