import React from 'react';
import { AppRegistry, View, Text, Button, FlatList, TouchableHighlight, Alert, StyleSheet } from 'react-native';

const aartiData = require('./data.json');

const extractKey = ({id}) => id

export default class AartiScreen extends React.Component {

  onPress = (item) => {
    // Alert.alert('You tapped the button!', item.text)
    this.props.navigation.navigate('AartiDetails', item)
  }

  renderItem = ({item}) => {
    return (
      <TouchableHighlight style={styles.container} onPress={this.onPress.bind(this, item)} underlayColor="white">
        <View style={styles.row}>
          <Text style={styles.row}>{item.name.english}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={aartiData}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})

AppRegistry.registerComponent('AwesomeProject', AartiScreen);
