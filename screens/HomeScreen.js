import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  routeToScreen(evt, screen){
    evt.preventDefault()
    this.props.navigation.navigate(screen)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Second Screen" style={{paddingTop: 10}} onPress={(evt) => this.routeToScreen(evt, 'SecondScreen')}>
          Go To Second Screen
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
