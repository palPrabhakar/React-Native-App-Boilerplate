import React from 'react';
import { AppRegistry, View, Text, Button, FlatList, TouchableHighlight, Alert, StyleSheet } from 'react-native';

const rows = [
  {id: 0, text: 'Aarti'},
  {id: 1, text: 'Chalisa'},
  // {id: 2, text: 'Image'},
  // {id: 3, text: 'ScrollView'},
  // {id: 4, text: 'ListView'},
]
const extractKey = ({id}) => id

export default class HomeScreen extends React.Component {

  onPress = (item) => {
    // Alert.alert('You tapped the button!', item.text)
    this.props.navigation.navigate(item.text)
  }

  renderItem = ({item}) => {
    return (
      <TouchableHighlight style={styles.container} onPress={this.onPress.bind(this, item)} underlayColor="white">
        <View style={styles.row}>
          <Text style={styles.row}>{item.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
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

AppRegistry.registerComponent('AwesomeProject', HomeScreen);
