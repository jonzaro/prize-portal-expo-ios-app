import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

interface ProductProps {
  title: string;
  description: string;
  price: number;
  wasPrice?: number;
  rating: number;
  brand: string;
  category: string;
  image: string;
}

const Product = ({
  title,
  description,
  price,
  wasPrice,
  rating,
  brand,
  category,
  image,
}: ProductProps) => {


    const textStyle = price < 100 ? styles.priceStrike : styles.price;
    
    return (
        <View style={[styles.card, styles.shadowProp]}>   

    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.brandCategory}>{brand} {category}</Text>
      <Text style={styles.description} className="mt-5">{description}</Text>
      {price < 100 ? <Text className="text-green-400 text-lg ml-20 top-9">FREE</Text> : null}
      <Text style={textStyle}> ${price?.toFixed(2)}</Text>
      <Text style={styles.rating}>Rating: &#9733; {rating}  |  <FontAwesome5 name="shipping-fast" size={14} color="black" />   Free shipping</Text>
    </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: "100%",

    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    backgroundColor: 'white',
    borderColor: "#b5b5b5",
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: "5%",
    // paddingVertical: 5,
    paddingHorizontal: 15,
    // marginBottom: -20,
    width: '100%',
    right: "5%",
    // height: '30%',
    // bottom: "7%",
    marginVertical: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: '40%',
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    margin: 10,
  },
  description: {
    fontSize: 10,
    marginHorizontal: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
  },
  priceStrike: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    textDecorationLine: 'line-through',
  },
  rating: {
    fontSize: 10,
    margin: 10,
  },
  brandCategory: {
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default Product;