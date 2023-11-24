import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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

const Product: React.FC<ProductProps> = ({
  title,
  description,
  price,
  wasPrice,
  rating,
  brand,
  category,
  image,
}) => {
  return (
    <View style={[styles.card, styles.shadowProp]}>   

    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.brandCategory}>{brand} {category}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price?.toFixed(2)}</Text>
      {wasPrice && <Text style={styles.wasPrice}>Was ${wasPrice?.toFixed(2)}</Text>}
      <Text style={styles.rating}>Rating: {rating}</Text>
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
    width: '90%',
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
    width: '50%',
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  wasPrice: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
    textDecorationLine: 'line-through',
  },
  rating: {
    fontSize: 14,
    margin: 10,
  },
  brandCategory: {
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default Product;