// components/Dashboard.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Welcome to your Dashboard</Text>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Total Sales: $10,000</Text>
        <Text style={styles.statsText}>Active Users: 120</Text>
        <Text style={styles.statsText}>Orders Today: 25</Text>
      </View>

      {/* Button to log out */}
      <Button
        title="Log Out"
        onPress={() => navigation.navigate("Login")} // Navigate back to Login screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 30,
  },
  statsContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: "100%",
    alignItems: "center",
  },
  statsText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
});

export default Dashboard;
