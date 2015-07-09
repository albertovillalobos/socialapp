'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} = React;


var reviewScreen = React.createClass({

  submitReview: function(user: Object) {
    var letoken = this.props.letoken;
    var URI = 'http://192.241.212.180:9004/api/comments';
    var target = user._id;
    var newComment = this.state.input;
    var theNavigator = this.props.navigator;


    fetch(URI, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+letoken,
      },
      body: JSON.stringify( {
        info: this.state.input,
        target: target
      })
    }).then( function(response) {
      console.log('response:',response);

      if (response.status === 201) {
        console.log('success!');
        theNavigator.popN(2);
      }
      else {
        console.log('failure');
      }
    })

    // Body: {"info":"John is nice","target":"551b927beb7cdde652ef941d"}
    // POST http://192.241.212.180:9004/api/comments



    // fetch(REQUEST_URL, {
    //   method: 'get',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer '+token,
    //   }
    // })
    // .then((response) => response.json())
    // .then((responseData) => {
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(responseData),
    //     loaded: true,
    //   });
    // })
    // .done();


  },

  render: function() {
    var user = this.props.user;
    var letoken = this.props.letoken;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: user.picture}}
          style={styles.thumbnail}
        />
        <Text>{user.name}</Text>
        <TouchableHighlight style={styles.submitButton}
          underlayColor='#CCC'
          onPress={() => this.submitReview(user)}>
            <Text style={styles.submitText}>Submit</Text>
      	</TouchableHighlight>
        <View style={styles.reviewView}>
          <TextInput
            style={{height: 300, width: 300, backgroundColor:'white', fontSize: 16,}}
            onChangeText={(text) => this.setState({input: text})}
            multiline={true}
            textAlignVertical='center'

          />
        </View>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  reviewView: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
    marginBottom: 5,
    paddingTop: 0,
    width: 300,
    height: 300,
    alignItems: 'center',
  },
  submitText: {
    alignItems: 'center',
    fontSize: 18,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom:5,

  },
  submitButton: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#BBB',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    shadowColor: '#999',
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowOffset: {width: 4, height: 5}

  },
})


module.exports = reviewScreen;
