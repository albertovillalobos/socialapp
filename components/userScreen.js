'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ListView
} = React;


var reviewScreen = require('./reviewScreen');
var userScreen = React.createClass({

  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },


  fetchData: function() {
    var user = this.props.movie;
    var uri = 'http://192.241.212.180:9004/api/comments/user/'+user._id;

    fetch(uri, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.props.letoken,
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.comments);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        loaded: true,
      });
    })
    .done();
  },



  render: function() {
    var user = this.props.movie;

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }



    return (
      <View style={styles.container}>
        <Image
          source={{uri: user.picture}}
          style={styles.thumbnail}
        />
        <Text>{user.name} </Text>
        <TouchableHighlight style={styles.submitButton}
          underlayColor='#CCC'
          onPress={() => this.addReview(user)}>
            <Text style={styles.submitText}>Review</Text>
      	</TouchableHighlight>
        <View style={styles.commentsView}>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderMovie}
            style={styles.listView}
          />
        </View>
      </View>
    )

  },

  renderLoadingView: function() {
    var user = this.props.movie;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: user.picture}}
          style={styles.thumbnail}
        />
        <Text>
          Loading comments...
        </Text>
      </View>
    );
  },

  renderMovie: function(movie) {
    return (
      <View style={styles.rows}>
          <Text style={styles.h1}>{movie.info}</Text>
          <Text style={styles.fineprint}>By: {movie.owner.name}</Text>
      </View>
    );
  },


  addReview: function(user: Object) {
    var letoken = this.props.letoken;
    this.props.navigator.push({
      title: 'Review',
      component: reviewScreen,
      passProps: {user, letoken},
    });
  },

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
  commentsView: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 0,
    width: 200,
    height: 300,
    alignItems: 'center',
  },
  h1: {
  },
  fineprint: {
    fontSize: 12,
    color: '#AAA'
  },
  rows: {
    marginBottom: 10,
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


module.exports = userScreen;
