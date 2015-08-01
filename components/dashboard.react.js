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
var Icon = require('react-native-vector-icons/FontAwesome');
// var TestView = require('./TestView.react.js');


var Dashboard = React.createClass({

  getInitialState: function(){
    return {
      info: null,
      selectedTab: 'welcome',

    };
  },

  componentWillMount: function(){
    var _this = this;
    let user = this.props.route.user;
    var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        _this.setState({
          info : {
            name : responseData.name,
            email: responseData.email,
          },
        });
      })
      .done();
  },

  _myProfile: function() {
    console.log('myProfile');
  },


  _people: function() {
    // console.log(People);
    var Navigator = this.props.navigator;
    // console.log('navigator',Navigator)
    Navigator.push({
      name: 'People',
      component: People,
    });
  },

  render: function() {

    var info = this.state.info;
    let user = this.props.route.user;
    // console.log('Dashboard',this.props.navigator);

    var Icon = require('react-native-vector-icons/FontAwesome');

    return(
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab == 'welcome'}
          icon={{uri: 'featured'}}
          title='HOME'
          onPress={()=>{
            this.setState({
              selectedTab: 'welcome'
            })
          }}>
        <View style={styles.container}>
          <Photo user={user}/>
          <Text style={styles.welcome}>{ info && info.name }</Text>
          <Icon name="rocket" size={30} color="#900" style={styles.icon} />
        </View>

        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab == 'people'}
          icon={{uri: 'contacts'}}
          title='PEOPLE'
          onPress={()=>{
            this.setState({
              selectedTab: 'people'
            })
          }}>
          <People/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab == 'search'}
          icon={{uri: 'search'}}
          title='search'
          onPress={()=>{
            this.setState({
              selectedTab: 'search'
            })
          }}>
          <People/>
        </TabBarIOS.Item>
      </TabBarIOS>

    );
  },

  // getInitialState: function() {
  //   return {
  //     dataSource: new ListView.DataSource({
  //       rowHasChanged: (row1, row2) => row1 !== row2,
  //     }),
  //     loaded: false,
  //   };
  // },
  //
  //   componentDidMount: function() {
  //     this.fetchData();
  //   },
  //
  //   fetchData: function() {
  //
  //     var token = JSON.parse(this.props.response._bodyInit).token;
  //     letoken = token;
  //     console.log('le token: ',token);
  //
  //     fetch(REQUEST_URL, {
  //       method: 'get',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer '+token,
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(responseData),
  //         loaded: true,
  //       });
  //     })
  //     .done();
  //   },
  //
  //
  //   render: function() {
  //     if (!this.state.loaded) {
  //       return this.renderLoadingView();
  //     }
  //
  //     return (
  //       <ListView
  //         dataSource={this.state.dataSource}
  //         renderRow={this.renderMovie}
  //         style={styles.listView}
  //       />
  //     );
  //
  //    },
  //
  //
  //    selectMovie: function(movie: Object) {
  //      this.props.navigator.push({
  //        title: movie.title,
  //        component: userScreen,
  //        passProps: {movie, letoken},
  //      });
  //    },
  //
  //    renderLoadingView: function() {
  //      return (
  //        <View style={styles.container}>
  //          <Text>
  //            Loading users...
  //          </Text>
  //        </View>
  //      );
  //    },
  //
  //    renderMovie: function(movie) {
  //      return (
  //        <TouchableHighlight
  //         onPress={()=> this.selectMovie(movie)}
  //         movie={movie}>
  //
  //          <View style={styles.container} >
  //            <Image
  //              source={{uri: movie.picture}}
  //              style={styles.thumbnail}
  //            />
  //            <View style={styles.rightContainer}>
  //              <Text style={styles.title}>{movie.name}</Text>
  //              <Text style={styles.year}>{movie.comments.length} Reviews</Text>
  //            </View>
  //          </View>
  //        </TouchableHighlight>
  //      );
  //    },


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

  }
})


module.exports = Dashboard;
