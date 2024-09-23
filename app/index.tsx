import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 flex items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Fondeo!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
}
