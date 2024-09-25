import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "~/components/form-field";

import { images } from "~/constants";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="my-6 h-full w-full justify-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-[35px] w-[115px]"
          />

          <Text className="mt-10 font-psemibold text-2xl text-white">
            Log in to Fondeo
          </Text>

          <FormField
            title="Email"
            value={form.email}
            keyboardType="email-address"
            handleChangeText={(value: string) =>
              setForm((prev) => ({ ...prev, email: value }))
            }
            styles="mt-7"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(value: string) =>
              setForm((prev) => ({ ...prev, password: value }))
            }
            styles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
