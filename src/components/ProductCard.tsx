// import React from 'react';
// import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';

// const ProductComponent: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.product}>
//         <TouchableOpacity>
//           <Image source={{ uri: 'https://i.imgur.com/uzYifbO.jpg' }} style={styles.image} />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.textContainer}>
//           <Text style={styles.productName}>Samsung Z Fold 4 1TB Rose Gold</Text>
//         </TouchableOpacity>

//         <View style={styles.ratingContainer}>
//           <Text style={styles.star}>⭐</Text>
//           <Text style={styles.star}>⭐</Text>
//           <Text style={styles.star}>⭐</Text>
//           <Text style={styles.star}>☆</Text>
//           <Text style={styles.star}>☆</Text>
//         </View>

//         <Text style={styles.price}>$1,799.00     /
//           <Text style={styles.wasPrice}> Was $1,899.00</Text>
// </Text>
//         <View style={styles.saveContainer}>
//         </View>

//         <View style={styles.buttonContainer}>
//           <Button title="Add to cart" color="#3498db" />
//         </View>
//       </View>

//       {/* Repeat the above block for other products */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//     marginHorizontal: 16,
//   },
//   product: {
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     marginBottom: 16,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
//   textContainer: {
//     margin: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: 'normal',
//     color: 'black',
//   },
//   ratingContainer: {
//     margin: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   star: {
//     fontSize: 20,
//     color: '#FFD700',
//     marginRight: 2,
//   },
//   price: {
//     marginRight: 10,
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   saveContainer: {
//     flexDirection: 'row',
//     marginHorizontal: 10,
//     marginBottom: 10,
//   },
//   save: {
//     backgroundColor: '#red600',
//     color: 'white',
//     fontSize: 12,
//     fontWeight: 'medium',
//     marginRight: 4,
//     padding: 4,
//     borderRadius: 2,
//   },
//   wasPrice: {
//     color: '#646464',
//     fontSize: 12,
//     textDecorationLine: 'line-through',
//   },
//   buttonContainer: {
//     margin: 10,
//   },
// });

// export default ProductComponent;