'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet
} = React;


var People = React.createClass({

  // Fetch the members of a friendlist
  _fetchMembers: function(friendlistId) {
    // console.log('fetchMembers',friendlistId);
    let _this = this;
    let user = this.props.user;
    // let friendsApi = `https://graph.facebook.com/v2.4/${friendlistId}?fields=id,name,list_type&access_token=${user.token}`;
    let friendsApi = `https://graph.facebook.com/v2.4/${friendlistId}/members?access_token=${user.token}`;
    // GET /v2.4/{friend-list-id}/members HTTP/1.1


    fetch(friendsApi)
      .then((response)=> response.json())
      .then((responseData)=> {
        console.log(`looking at ${friendlistId}`,responseData.data.length);
      })

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
        _this._fetchMembers(responseData.data[0].id);
        for (var i = 0; i < responseData.data.length; i++) {
          console.log(responseData.data[i].id)
          _this._fetchMembers(responseData.data[i].id);
        }
        _this.setState({
          friendlists: responseData.data
        });
      })
      .then()
      .done();

  },



  render: function(){

    // console.log(this.state.friendlists)
    // if (this.state.friendlists) {
    //   console.log('friendlists up');
    //   this._loadFriends();
    // }
    // else {
    //   console.log('not loaded')
    // }
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
