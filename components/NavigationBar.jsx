import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Home, User, Settings, BarChart2 } from "lucide-react-native";

const NavigationBar = ({ activeTab, onTabPress }) => {
  const tabs = [
    { name: "Home", icon: Home },
    { name: "Profile", icon: User },
    { name: "Analytics", icon: BarChart2 },
    { name: "Settings", icon: Settings },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => onTabPress(tab.name)}
        >
          <tab.icon
            color={activeTab === tab.name ? "#4A90E2" : "#666"}
            size={24}
          />
          <Text
            style={[
              styles.tabText,
              { color: activeTab === tab.name ? "#4A90E2" : "#666" },
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  tab: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default NavigationBar;
