import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { CustomButton } from "~/components/custom-button";
import { images } from "~/constants";

export default function Index() {
  const isLoading = false;

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-full w-full items-center justify-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-[84px] w-[130px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="h-[300px] w-full max-w-[380px]"
          />

          <View className="mt-5">
            <Text className="text-center text-3xl font-bold text-white">
              Discover endless possibilities with{" "}
              <View className="relative -mt-1 items-center justify-center">
                <Text className="text-center text-3xl font-bold text-secondary-200">
                  Fondeo
                </Text>
                <Image
                  source={images.path}
                  resizeMode="contain"
                  className="absolute -bottom-2 -right-6 h-[15px] w-[136px]"
                />
              </View>
            </Text>
          </View>
          <Text className="mt-7 text-center font-pregular text-sm text-gray-100">
            Where creativity meets innovation: Embark on a journey of limitless
            exploration with Fondeo
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            disabled={isLoading}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
