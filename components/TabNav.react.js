'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ListView,
  Image,
  TabBarIOS
} = React;

var Photo = require('./Photo.react.js');
var People = require('./People.react.js');
var Dashboard = require('./Dashboard.react.js');
var FontAwesome = require('react-native-vector-icons/FontAwesome');
var Icon = require('react-native-vector-icons/Ionicons');

var TabNav = React.createClass({

  getInitialState: function(){
    return {
      info: null,
      selectedTab: 'welcome',
    };
  },

  render: function() {
    var info = this.state.info;
    let user = this.props.route.user;

    return(
      <TabBarIOS selectedTab={this.state.selectedTab}>
        
        <FontAwesome.TabBarItem
          title="Home"
          iconName="home"
          selectedIconName="home"
          selected={this.state.selectedTab === 'welcome'}
          onPress={() => {
            this.setState({
              selectedTab: 'welcome',
            });
          }}>
          <Dashboard user={user}/>
        </FontAwesome.TabBarItem>

        <FontAwesome.TabBarItem
          title="People"
          iconName="users"
          selectedIconName="users"
          selected={this.state.selectedTab === 'people'}
          onPress={() => {
            this.setState({
              selectedTab: 'people',
            });
          }}>
          <People/>
        </FontAwesome.TabBarItem>
      </TabBarIOS>
    );
  },
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    backgroundColor: '#3b5998',
    borderRadius: 10,
    margin: 5,
    width: 200,

  },
  button: {
    fontSize: 20,
    fontWeight: '200',
    color: 'white',
    margin: 5,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 32,
    fontWeight: '100',

  },
})


module.exports = TabNav;
