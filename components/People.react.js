'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet
} = React;


var People = React.createClass({

  _loadFriends: function()  {
    var _this = this;
    let user = this.props.user;

    let friendlistId = this.state.friendlists[0].id;
    let friendsApi = `https://graph.facebook.com/v2.4/${friendlistId}/members?access_token=${user.token}`;
    console.log(friendsApi);
  },

  getInitialState: function(){
    return {
      friendlists: null,
    };
  },

  componentWillMount: function(){

    var _this = this;
    let user = this.props.user;
    // /{user-id}/friendlists
    var api = `https://graph.facebook.com/v2.4/${user.userId}/friendlists?access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.data[0].id)
        _this.setState({
          friendlists: responseData.data
        });
      })
      .then()
      .done();

  },



  render: function(){

    // console.log(this.state.friendlists)
    if (this.state.friendlists) {
      console.log('friendlists up');
      this._loadFriends();
    }
    else {
      console.log('not loaded')
    }
    var friends = this.state.friends;

    return (
      <View style={styles.container}>
        <Text>People view</Text>
      </View>
    );
  }
});

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

  }
})

module.exports = People;
