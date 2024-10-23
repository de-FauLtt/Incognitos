import React from 'react';
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const helplines = [
  { id: '1', name: 'National Helpline', number: '1800 100 999' },
  { id: '2', name: 'Women Helpline', number: '181' },
  { id: '3', name: 'Child Helpline', number: '1098' },
  { id: '4', name: 'Police', number: '100' },
  { id: '5', name: 'Ambulance', number: '102' },
  { id: '6', name: 'Fire Service', number: '101' },
  { id: '7', name: 'Disaster Management', number: '108' },
  { id: '8', name: 'Mental Health Helpline', number: '1860 266 2345' },
  { id: '9', name: 'Anti-Discrimination Helpline', number: '1800 121 999' },
];

const HelplineScreen = () => {
  // Render a single helpline item
  const renderHelplineItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemNumber}>{item.number}</Text>
    </View>
  );

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-gray-50 font-psemibold">Emergency Helpline</Text>
        <View style={styles.container}>
        <FlatList
          data={helplines}
          renderItem={renderHelplineItem}
          keyExtractor={(item) => item.id}
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222831',
  },
  itemContainer: {
    backgroundColor: '#ffffff', // Set item background color
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 2, // Shadow effect for Android
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  itemNumber: {
    fontSize: 16,
    color: '#007BFF', // Color for the phone number
  },
});

export default HelplineScreen;