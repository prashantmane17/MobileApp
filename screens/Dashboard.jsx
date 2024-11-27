import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import {
  Search,
  ShoppingCart,
  Smartphone,
  Tv,
  Shirt,
  Book,
  Home as HomeIcon,
  Gift,
  Menu,
  Bell,
  Mic,
} from 'lucide-react-native';
import CategoryIcon from '../components/CategoryIcon';

const { width } = Dimensions.get('window');

const categories = [
  { icon: Smartphone, label: 'Mobiles' },
  { icon: Tv, label: 'Electronics' },
  { icon: Shirt, label: 'Fashion' },
  { icon: Book, label: 'Books' },
  { icon: HomeIcon, label: 'Home' },
  { icon: Gift, label: 'Gifts' },
];

const banners = [
  { id: '1', image: 'https://img.freepik.com/premium-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg' },
  { id: '2', image: 'https://cdn.vectorstock.com/i/500p/91/98/shopping-online-with-discount-conceptual-banner-vector-47519198.jpg' },
  { id: '3', image: 'https://img.freepik.com/premium-vector/buy-1-get-1-free-banner-design-template_96807-605.jpg' },
];

const deals = [
  { id: '1', name: 'Smartphone X', price: 29999, discount: '20% off', image: 'https://images-cdn.ubuy.co.in/633a87dfd6b53a07f76e043c-ip12-pro-max-unlocked-smartphone-for.jpg' },
  { id: '2', name: 'Laptop Pro', price: 89999, discount: '15% off', image: 'https://m.media-amazon.com/images/I/61Qe0euJJZL._AC_UF1000,1000_QL80_.jpg' },
  { id: '3', name: 'Wireless Earbuds', price: 7999, discount: '30% off', image: 'https://m.media-amazon.com/images/I/71W73DIJLUL.jpg' },
  { id: '4', name: 'Smart Watch', price: 14999, discount: '25% off', image: 'https://m.media-amazon.com/images/I/61vNo+aPWUL._AC_UF1000,1000_QL80_.jpg' },
];

const Dashboard = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: scrollX._value + width,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const renderBanner = ({ item, index }) => (
    <Image source={{ uri: item.image }} style={styles.bannerImage} />
  );

  const renderDealItem = ({ item }) => (
    <TouchableOpacity style={styles.dealItem} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.dealImage} />
      <Text style={styles.dealName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.dealPrice}>₹{item.price.toLocaleString('en-IN')}</Text>
      <Text style={styles.dealDiscount}>{item.discount}</Text>
    </TouchableOpacity>
  );

  const infinitebanners = [...banners, ...banners, ...banners];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search color="#9AA0A6" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for products, brands and more"
            placeholderTextColor="#9AA0A6"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={() => {/* Handle voice search */}}>
            <Mic color="#2874F0" size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
          <ShoppingCart color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <CategoryIcon
              key={index}
              icon={category.icon}
              label={category.label}
              onPress={() => navigation.navigate('CategoryProducts', { category: category.label })}
            />
          ))}
        </ScrollView>

        <Animated.FlatList
          ref={flatListRef}
          data={infinitebanners}
          renderItem={renderBanner}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.bannerContainer}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          initialScrollIndex={banners.length}
          onScrollEndDrag={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const index = Math.round(offsetX / width);
            if (index <= banners.length - 1) {
              flatListRef.current.scrollToOffset({
                offset: width * (index + banners.length),
                animated: false,
              });
            } else if (index >= infinitebanners.length - banners.length) {
              flatListRef.current.scrollToOffset({
                offset: width * (index - banners.length),
                animated: false,
              });
            }
          }}
        />

        <View style={styles.dealsContainer}>
          <Text style={styles.dealsTitle}>Deals of the Day</Text>
          <FlatList
            data={deals}
            renderItem={renderDealItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <HomeIcon color="#2874F0" size={24} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Menu color="#666" size={24} />
          <Text style={styles.navLabel}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Bell color="#666" size={24} />
          <Text style={styles.navLabel}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <ShoppingCart color="#666" size={24} />
          <Text style={styles.navLabel}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2874F0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 4,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 12,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: '#333',
  },
  cartButton: {
    padding: 8,
    backgroundColor: '#1a5ee4',
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    marginBottom: 8,
    elevation: 2,
  },
  bannerContainer: {
    marginBottom: 16,
  },
  bannerImage: {
    width: width,
    height: 180,
    resizeMode: 'cover',
  },
  dealsContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
  },
  dealsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  dealItem: {
    width: 160,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  dealImage: {
    width: 160,
    height: 160,
    resizeMode: 'cover',
  },
  dealName: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    marginHorizontal: 8,
    color: '#333',
  },
  dealPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
    marginHorizontal: 8,
    color: '#2874F0',
  },
  dealDiscount: {
    fontSize: 12,
    color: '#388E3C',
    marginTop: 2,
    marginBottom: 8,
    marginHorizontal: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    elevation: 8,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
});

export default Dashboard;

