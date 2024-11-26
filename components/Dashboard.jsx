import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import {
  Bell,
  TrendingUp,
  Users,
  ShoppingBag,
  ArrowRight,
} from "lucide-react-native";
import NavigationBar from "./NavigationBar";

const Dashboard = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const recentActivity = [
    { id: "1", text: "New user registered", time: "2 hours ago" },
    { id: "2", text: "Order #1234 completed", time: "4 hours ago" },
    { id: "3", text: "Product X restocked", time: "1 day ago" },
    { id: "4", text: "New review received", time: "2 days ago" },
  ];

  const renderActivityItem = ({ item }) => (
    <View style={styles.activityItem}>
      <Text style={styles.activityText}>{item.text}</Text>
      <Text style={styles.activityTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
          <TouchableOpacity
            onPress={() => {
              /* Handle notifications */
            }}
          >
            <Bell color="#333" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <TrendingUp color="#4CAF50" size={24} />
            <Text style={styles.statValue}>$10,000</Text>
            <Text style={styles.statLabel}>Total Sales</Text>
          </View>
          <View style={styles.statItem}>
            <Users color="#2196F3" size={24} />
            <Text style={styles.statValue}>120</Text>
            <Text style={styles.statLabel}>Active Users</Text>
          </View>
          <View style={styles.statItem}>
            <ShoppingBag color="#FFC107" size={24} />
            <Text style={styles.statValue}>25</Text>
            <Text style={styles.statLabel}>Orders Today</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <FlatList
            data={recentActivity}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All Activity</Text>
            <ArrowRight color="#4A90E2" size={20} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate("EcomDash")}
        >
          <Text style={styles.logoutButtonText}>Switch to Ecom</Text>
        </TouchableOpacity>
      </ScrollView>

      <NavigationBar activeTab={activeTab} onTabPress={setActiveTab} />
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
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statItem: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    width: "30%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
  sectionContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  activityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  activityText: {
    fontSize: 14,
    color: "#333",
  },
  activityTime: {
    fontSize: 12,
    color: "#666",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  viewAllText: {
    fontSize: 14,
    color: "#4A90E2",
    marginRight: 5,
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Dashboard;
