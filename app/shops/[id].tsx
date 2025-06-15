import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Using the same CoffeeShop interface from explore.tsx
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

// Temporary data - in a real app, this would come from an API or database
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

export default function ShopDetails() {
  const { id } = useLocalSearchParams();
  const shop = coffeeShops.find((s) => s.id === id);

  if (!shop) {
    return (
      <LinearGradient
        colors={["#4B2E1E", "#7B3F00", "#C69C6D", "#4B2E1E"]}
        style={styles.container}
      >
        <Text style={styles.errorText}>Shop not found</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["#4B2E1E", "#7B3F00", "#C69C6D", "#4B2E1E"]}
      style={styles.container}
    >
      <ScrollView>
        <Image source={{ uri: shop.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{shop.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {shop.rating}</Text>
            <Text style={styles.distance}>📍 {shop.distance}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>{shop.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hours</Text>
            <Text style={styles.info}>{shop.openingHours}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Address</Text>
            <Text style={styles.info}>{shop.address}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Specialties</Text>
            {shop.specialties.map((specialty, index) => (
              <Text key={index} style={styles.specialty}>
                • {specialty}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  rating: {
    fontSize: 18,
    color: "#FFD700",
  },
  distance: {
    fontSize: 18,
    color: "#ddd",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    lineHeight: 24,
  },
  info: {
    fontSize: 16,
    color: "#ddd",
  },
  specialty: {
    fontSize: 16,
    color: "#C69C6D",
    marginBottom: 4,
  },
  errorText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginTop: 50,
  },
  backButton: {
    backgroundColor: "#5C4033",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
