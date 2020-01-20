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
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParams')
  //   }
  // };
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
  componentDidMount() {
    // this.focusListener = this.props.navigation.addListener('didFocus', () => this._textInput.focus());
  }
  
  componentWillUnmount() {
    // this.focusListener.remove();s
  }

  render() {
    const {height, width} = Dimensions.get('window');
    const { iconsMap, footIconSize } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{backgroundColor: '#fff'}}>
        <StatusBar barStyle="default" />
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="github-alt" backgroundColor="#3b5998" size={30} iconStyle={{marginRight: 20}}></Icon>
                <TextInput style={styles.input} placeholder="Type here to translate!" autoFocus={true} />
                <Ionicons name="ios-qr-scanner" backgroundColor="#3b5998" size={30} iconStyle={{marginRight: 20}}></Ionicons>
            </View>
            {/* <View>
              <Text>{JSON.stringify(navigation.getParam('itemId'))}</Text>
            </View> */}
          </View>
          {/* <Button
            title="Update the title"
            onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
          /> */}
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