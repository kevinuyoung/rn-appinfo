import React, { Component } from 'react';
import { View, Button, TextInput, Text, StatusBar, SafeAreaView, StyleSheet, Image, Dimensions, TouchableHighlight, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import TabBarExample from './icon.js';
// import { withNavigationFocus } from 'react-navigation';


class App extends Component {
  constructor(props) {
    super(props);
  }
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParams')
  //   }
  // };
  state = {
    inputText: '',
    iconSize: 48,
    footIconSize: 20,
    iconsMap: [{
      name: 'apple',
    }, {
      name: 'react',
    }, {
      name: 'coffeescript',
      size: 50,
    }, {
      name: 'tesla'
    }, {
      name: 'webpack'
    }],
    data: [],
    refreshing: false,
    searchFlag: false,
    message: {
      title: '',
      description: ''
    }
  }

  componentDidMount() {
    this.getMoviesList();
  }

  async getMoviesList() {
    const response = await fetch('https://facebook.github.io/react-native/movies.json');
    const responseJson = await response.json();
    const { title, description, movies } = responseJson;
    this.setState({
      message: {
        title,
        description
      },
      data: movies
    });
  }
  /**
   *input输入监听
   */
  onChangeText(text) {
    console.log(text);
    this.setState({
      inputText: text
    })
  }
  /**
   * 渲染搜索数据
   */
  renderSearchResults() {
    const { inputText, data } = this.state;
    console.log(data);
    if (inputText === '') return null;
    const pattern = new RegExp(inputText, 'g');
    const getResults = []
    data.map(item => {
      if (item.title.includes(inputText) || item.releaseYear.includes(inputText)) {
        getResults.push(item);
      }
    });
    console.log(getResults);
    if (getResults.length === 0) return null
    return (
      <View style={{paddingTop: 20}}> 
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <Text>搜索结果：</Text>
          {
            getResults.map((item, index) => {
              return (
                <View style={{ height: 50, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#eee'}}>
                  <Text>
                    {item.id}、{item.title}、{item.releaseYear}
                  </Text>
                </View>
              )
            })
          }
        </View>
      </View>
    );
  }
  /**
   * 
   *渲染请求返回数据
   */
  renderMovieItem({ item }) {
    return (
      <View style={{ height: 50, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#eee' }}>
        <Text>
          {item.id}、{item.title}、{item.releaseYear}
        </Text>
      </View>
    );
  }
  refreshData() {
    console.log('fressh');
    this.setState({
      refreshing: true
    }, () => {
      setTimeout(() => {
        this.setState({
          refreshing: false
        })
      }, 3000);
    });
  }
  jundgeRenderHtml() {
    const { iconsMap, inputText, movieList, data, message } = this.state;
    const FlatView = (
      <View>
        <Text style={{ paddingLeft: 10, fontSize: 20, marginTop: 10, marginBottom: 10 }}>
          {message.title}--{message.description}
        </Text>
        <FlatList
          onRefresh={this.refreshData.bind(this)}
          refreshing={this.state.refreshing}
          style={{ paddingLeft: 10, paddingRight: 10, height: '100%' }}
          data={this.state.data}
          renderItem={this.renderMovieItem}
          keyExtractor={item => item.id}
        >
        </FlatList>
      </View>
    );
    const SerachView = (
      <View>
        {this.renderSearchResults()}
      </View>
    );
    if (inputText === '') return FlatView;
    return SerachView;
  }
  render() {
    const { height, width } = Dimensions.get('window');
    const { iconsMap, inputText, movieList, data, message } = this.state;
    const { navigation } = this.props;
    // console.log(data);
    const renderView = (
      <View>
        
      </View>
    )
    return (
      <View style={{ backgroundColor: '#fff', height: '100%' }}>
        <StatusBar barStyle="default" />
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableHighlight onPress={() => { this.props.navigation.goBack() }} underlayColor="#fff">
                <Icon name="angle-left" backgroundColor="#3b5998" size={30} ></Icon>
              </TouchableHighlight>
              <TextInput
                style={styles.input}
                placeholder="Type here to translate!"
                clearButtonMode={true}
                value={inputText}
                onChangeText={text => this.onChangeText(text)}
              />
            </View>
            {/* <Text>{this.props.isFocused ? 'Focused' : 'Not focused'}</Text> */}
          
            {/* <View>
              <Text>{JSON.stringify(navigation.getParam('itemId'))}</Text>
            </View> */}
          </View>
          {/* <Button
            title="Update the title"
            onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
          /> */}
         {this.jundgeRenderHtml()}
          
        </SafeAreaView>
      </View>
    );
  }
}
export default App;
// export default  withNavigationFocus(App);

const screenMsg = Dimensions.get('window');
const { width, height } = screenMsg;

const styles = StyleSheet.create({
  safeArea: {
    padding: 20,
  },
  container: {
    position: 'relative',
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
    width: '90%',
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