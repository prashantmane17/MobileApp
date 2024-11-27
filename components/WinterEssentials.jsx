import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const winterProducts = [
  {
    id: "1",
    name: "Warm Jacket",
    price: 2999,
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    id: "2",
    name: "Thermal Gloves",
    price: 599,
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    id: "3",
    name: "Woolen Scarf",
    price: 799,
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    id: "4",
    name: "Snow Boots",
    price: 3499,
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    id: "5",
    name: "Thermal Underwear",
    price: 1299,
    image: "/placeholder.svg?height=160&width=160",
  },
  {
    id: "6",
    name: "Beanie Hat",
    price: 499,
    image: "/placeholder.svg?height=160&width=160",
  },
];

const WinterEssentials = ({ navigation }) => {
  const renderWinterItem = ({ item }) => (
    <TouchableOpacity
      style={styles.winterItem}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.winterImage} />
      <Text style={styles.winterName} numberOfLines={2}>
        {item.name}
      </Text>
      <Text style={styles.winterPrice}>
        ₹{item.price.toLocaleString("en-IN")}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.winterContainer}>
      <Text style={styles.winterTitle}>Winter Essentials</Text>
      <FlatList
        data={winterProducts}
        renderItem={renderWinterItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  winterContainer: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
  },
  winterTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  winterItem: {
    width: 160,
    marginRight: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    overflow: "hidden",
  },
  winterImage: {
    width: 160,
    height: 160,
    resizeMode: "cover",
  },
  winterName: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
    marginHorizontal: 8,
    color: "#333",
  },
  winterPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 8,
    color: "#2874F0",
  },
});

export default WinterEssentials;
