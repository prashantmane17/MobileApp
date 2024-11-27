import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Search, ShoppingBag } from "lucide-react-native";
import EcomNav from "../navigation/EcomNav";
import ProductItem from "../components/ProductItem";

const categories = ["All", "Electronics", "Clothing", "Books", "Home & Garden"];

const featuredProducts = [
  {
    id: "1",
    name: "Wireless Earbuds",
    price: 79.99,
    image: "https://example.com/earbuds.jpg",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    image: "https://example.com/smartwatch.jpg",
  },
  {
    id: "3",
    name: "Laptop",
    price: 999.99,
    image: "https://example.com/laptop.jpg",
  },
  {
    id: "4",
    name: "Running Shoes",
    price: 89.99,
    image: "https://example.com/shoes.jpg",
  },
];

const EcomDash = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [activeCategory, setActiveCategory] = useState("All");

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        activeCategory === item && styles.activeCategoryItem,
      ]}
      onPress={() => setActiveCategory(item)}
    >
      <Text
        style={[
          styles.categoryText,
          activeCategory === item && styles.activeCategoryText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Discover</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <ShoppingBag color="#333" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Search color="#999" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products"
            placeholderTextColor="#999"
          />
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesList}
        />

        <Text style={styles.sectionTitle}>Featured Products</Text>
        <FlatList
          data={featuredProducts}
          renderItem={({ item }) => (
            <ProductItem
              name={item.name}
              price={item.price}
              image={item.image}
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.productsList}
        />
      </ScrollView>

      <EcomNav activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 44,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 20,
    marginBottom: 10,
  },
  categoriesList: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  activeCategoryItem: {
    backgroundColor: "#4A90E2",
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
  },
  activeCategoryText: {
    color: "#fff",
  },
  productsList: {
    paddingLeft: 20,
    marginBottom: 20,
  },
});

export default EcomDash;
