import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface CoffeeShop {
  id: string;
  name: string;
  distance: string;
  rating: number;
  image: string;
  description: string;
  openingHours: string;
  address: string;
  specialties: string[];
}

const coffeeShops: CoffeeShop[] = [
  {
    id: "1",
    name: "Brew Haven",
    distance: "0.5 km",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    description: "Artisanal coffee and cozy atmosphere",
    openingHours: "7:00 AM - 8:00 PM",
    address: "123 Coffee Street",
    specialties: ["Espresso", "Cold Brew", "Pour Over"],
  },
  {
    id: "2",
    name: "Java Junction",
    distance: "1.2 km",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8",
    description: "Modern café with specialty drinks",
    openingHours: "6:30 AM - 9:00 PM",
    address: "456 Bean Avenue",
    specialties: ["Latte Art", "Specialty Roasts", "Pastries"],
  },
  {
    id: "3",
    name: "The Daily Grind",
    distance: "2.0 km",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    description: "Local favorite with organic options",
    openingHours: "7:30 AM - 7:00 PM",
    address: "789 Roast Road",
    specialties: ["Organic Coffee", "Vegan Options", "Tea Selection"],
  },
  {
    id: "4",
    name: "Café Aroma",
    distance: "3.3 km",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8",
    description: "European-style café experience",
    openingHours: "8:00 AM - 10:00 PM",
    address: "101 Brew Boulevard",
    specialties: ["French Press", "Croissants", "Wine Selection"],
  },
];

export default function ExplorePage() {
  return (
    <LinearGradient
      colors={["#4B2E1E", "#7B3F00", "#C69C6D", "#4B2E1E"]}
      style={styles.container}
    >
      <Text style={styles.header}>Explore Cafés Nearby</Text>

      <FlatList
        data={coffeeShops}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/shops/[id]",
                params: { id: item.id },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.details}>
                <Text style={styles.distance}>📍 {item.distance}</Text>
                <Text style={styles.rating}>⭐ {item.rating}</Text>
              </View>
              <Text style={styles.specialties}>
                {item.specialties.join(" • ")}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff8e7",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#5C4033",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 15,
  },
  name: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#ddd",
    marginBottom: 10,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  distance: {
    fontSize: 14,
    color: "#ddd",
  },
  rating: {
    fontSize: 14,
    color: "#FFD700",
  },
  specialties: {
    fontSize: 12,
    color: "#C69C6D",
    fontStyle: "italic",
  },
});
