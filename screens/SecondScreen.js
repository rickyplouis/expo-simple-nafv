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
        <Button title="Go Home" style={{paddingTop: 10}} onPress={(evt) => this.routeToScreen(evt, 'Home')} />
        <Button title="Go To Another Screen" style={{marginTop: 10}} onPress={(evt) => this.routeToScreen(evt, 'Another')} />
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
