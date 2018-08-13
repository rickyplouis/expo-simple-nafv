import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Screen',
  };


  routeToScreen(evt, screen){
    evt.preventDefault()
    this.props.navigation.navigate(screen)
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title="Second Screen" style={{paddingTop: 10}} onPress={(evt) => this.routeToScreen(evt, 'HomeScreen')}>
          Go To Home
        </Button>
        <Button title="Second Screen" style={{paddingTop: 10}} onPress={(evt) => this.routeToScreen(evt, 'SecondScreen')}>
          Go To Third Screen
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
