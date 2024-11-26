import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductItem = ({ name, price, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    marginRight: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
    marginHorizontal: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 8,
  },
});

export default ProductItem;
