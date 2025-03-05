import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    fetch('https://catfact.ninja/fact') // Replace with a valid API URL
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          dataSource: data,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.dataSource, null, 2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
