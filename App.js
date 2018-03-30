import React from 'react';
import { AppRegistry, View, ScrollView, Text, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import  HomeScreen  from './HomeScreen'
import AartiScreen from './AartiScreen'

class AartiDetailsScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const aartiText = params ? params.text.english : "maa chuda"
    // var text = JSON.stringify(text)
    return (
      <ScrollView style={{ flex: 1}}>
        {aartiText.split("\n").map(x => {
          return <Text style={{fontSize:18, paddingLeft : 12, paddingTop : 15}}>{x}</Text>
        })}
        {/* <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> */}
      </ScrollView>
    );
  }
}

class ChalisaScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:32}}>Chalisa Screen</Text>
        {/* <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> */}
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Aarti: {
      screen: AartiScreen,
    },
    Chalisa: {
      screen: ChalisaScreen,
    },
    AartiDetails: {
      screen: AartiDetailsScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// AppRegistry.registerComponent('AwesomeProject', StackNavigator);
