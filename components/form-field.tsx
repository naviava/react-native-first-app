import { View, Text } from "react-native";
import { cn } from "~/lib/utils";

interface IProps {
  title: string;
  value: string;
  styles?: string;
  handleChangeText: (value: string) => void;
  keyboardType?: "email-address";
}

export default function FormField({
  title,
  value,
  styles,
  handleChangeText,
  keyboardType,
}: IProps) {
  return (
    <View className={cn("space-y-2", styles)}>
      <Text className="font-pmedium text-base text-gray-100">
        {title} field here
      </Text>
    </View>
  );
}
