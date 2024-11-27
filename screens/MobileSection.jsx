import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { ArrowLeft, Star } from "lucide-react-native";

const { width } = Dimensions.get("window");

const categories = [
  {
    id: "cat1",
    name: "Smartphones",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "cat2",
    name: "Tablets",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "cat3",
    name: "Accessories",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "cat4",
    name: "Wearables",
    image: "/placeholder.svg?height=100&width=100",
  },
];

const popularProducts = [
  {
    id: "prod1",
    name: "iPhone 13 Pro",
    price: 119900,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "prod2",
    name: "Samsung Galaxy S21",
    price: 69999,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "prod3",
    name: "OnePlus 9 Pro",
    price: 64999,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "prod4",
    name: "Google Pixel 6",
    price: 59999,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200",
  },
];

const MobileSection = ({ navigation }) => {
  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
    } else if (index === 1) {
      return (
        <View style={styles.popularProductsContainer}>
          <Text style={styles.sectionTitle}>Popular Products</Text>
        </View>
      );
    } else {
      return renderPopularProduct({ item });
    }
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() =>
        navigation.navigate("CategoryProducts", { category: item.name })
      }
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPopularProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>
          ₹{item.price.toLocaleString("en-IN")}
        </Text>
        <View style={styles.ratingContainer}>
          <Star color="#FFD700" size={16} />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          accessibilityLabel="Go back"
        >
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mobile Section</Text>
      </View>

      <FlatList
        data={[
          { id: "categories" },
          { id: "popularProductsHeader" },
          ...popularProducts,
        ]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        ListHeaderComponent={<View style={styles.listHeader} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f3f6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2874F0",
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 4,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 16,
  },
  listHeader: {
    height: 8,
  },
  categoriesContainer: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    marginBottom: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    paddingHorizontal: 16,
    color: "#333",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 16,
    marginLeft: 16,
  },
  categoryImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  popularProductsContainer: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    marginBottom: 16,
    elevation: 2,
  },
  productRow: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  productItem: {
    width: (width - 48) / 2,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 3,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2874F0",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
});

export default MobileSection;
