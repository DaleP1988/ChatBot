import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import { Actions } from "react-native-router-flux";

class Home extends React.Component {
  state = {
    name: ""
  };
  render() {
    return (
      <View>
        <Text style={styles.title}>Enter Your Name:</Text>
        <TextInput
          style={styles.nameInput}
          placeholder="John Snow"
          onChangeTex={text => {
            this.setState({
              name: text
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              name: this.state.name
            });
            //run by using
            // console.log("it worked");
            // debugger;
            // alert(this.state.name);
            //navigate to the second screen
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        >
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    paddingTop: ""
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 14
  }
});

export default Home;

// import { Actions } from "react-native-router-flux";

// export default class Home extends React.Component {
//   state = {
//     name: ""
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={[styles.label, { marginTop: 40 }]}>Enter your name :</Text>
//         <TextInput
//           placeholder="John Smith"
//           style={styles.textInput}
//           onChangeText={text => {
//             this.setState({
//               name: text
//             });
//           }}
//           value={this.state.name}
//         />
//         <TouchableOpacity
//           onPress={() => {
//             Actions.chat({
//               name: this.state.name
//             });
//           }}
//         >
//           <Text style={styles.label}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   label: {
//     fontSize: 20,
//     marginLeft: 15
//   },
//   textInput: {
//     height: 40,
//     marginLeft: 15
//   }
// });
