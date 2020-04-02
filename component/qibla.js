// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import {
//  Accelerometer,
//  gyroscope,
//  setUpdateIntervalForType,
//  SensorTypes 
// } from 'react-native-sensors';

// const Value = ({name, value}) => (
//   <View style={styles.valueContainer}>
//     <Text style={styles.valueName}>{name}:</Text>
//     <Text style={styles.valueValue}>{new String(value).substr(0, 8)}</Text>
//   </View>
// )

// export default class qibla extends Component {
//   constructor(props) {
//     super(props);

//     new Accelerometer({
//       updateInterval: 400 // defaults to 100ms
//     })
//       .then(observable => {
//         observable.subscribe(({x,y,z}) => this.setState({x,y,z}));
//       })
//       .catch(error => {
//         console.log("The sensor is not available");
//       });
      
//     this.state = {x: 0, y: 0, z: 0};
//   }
  
//   render() {
//     return (
        
//       <View style={styles.container}>
          
//         <Text style={styles.headline}>
//           Accelerometer values
//         </Text>
//         <Value name="x" value={this.state.x} />
//         <Value name="y" value={this.state.y} />
//         <Value name="z" value={this.state.z} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   headline: {
//     fontSize: 30,
//     textAlign: 'center',
//     margin: 10,
//   },
//   valueContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   valueValue: {
//     width: 200,
//     fontSize: 20
//   },
//   valueName: {
//     width: 50,
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


// import React, { Component } from "react";
// import { StyleSheet, Text, View, Image,Dimensions } from "react-native";
// import { Gyroscope } from "react-native-sensors";

// // const Dimensions = require("Dimensions");
// const PixelRatio = require("PixelRatio");
// const window = Dimensions.get("window");

// const deviceWidth = window.width;
// const deviceHeight = window.height;

// const imageWidth = 8 * deviceWidth;
// const imageHeight = deviceHeight;

// const middleOfTheScreenX = (imageWidth - deviceWidth) / 2;

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     new Gyroscope({
//       updateInterval: 50
//     })
//       .then(observable => {
//         observable.subscribe(({ y }) => {
//           this.setState(state => ({
//             y: y + state.y
//           }));
//         });
//       })
//       .catch(error => {
//         console.log("The sensor is not available");
//       });

//     this.state = {
//       image: `https://placeimg.com/${PixelRatio.getPixelSizeForLayoutSize(
//         imageWidth
//       )}/${PixelRatio.getPixelSizeForLayoutSize(imageHeight)}/any`,
//       y: 0
//     };
//   }

//   render() {
//     const positionOnScreenX = -imageWidth / 2;
//     // The y axis of the sensor data resembles what we need for the x axis
//     // in the image
//     const movementX = -this.state.y / 10 * imageWidth;

//     return (
//       <View style={styles.container}>
//         <Image
//           translateX={positionOnScreenX + movementX}
//           style={styles.image}
//           source={{ uri: this.state.image }}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   image: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     height: imageHeight,
//     width: imageWidth
//   }
// });