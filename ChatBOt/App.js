import React from "react";

import Home from "./components/Home";
import Home from "./components/Chat";

import { Router, Scene } from "react-native-router-flux";

class App extends React.Component {
  reder() {
    return (
      <Router>
        <Scene key="root" style={{ paddingTop: 64 }} />
        <Scene key="home" component={Home} title="Home" />
        <Scene key="chat" component={Chat} title="Chat" />
      </Router>
    );
  }
}

export default App;

// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
