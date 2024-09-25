import { TouchableOpacity, Text, View } from "react-native";
import { cn } from "~/lib/utils";

interface IProps {
  title: string;
  disabled?: boolean;
  handlePress: () => void;
  containerStyle?: string;
  textStyle?: string;
}

export function CustomButton({
  title,
  disabled,
  handlePress,
  containerStyle,
  textStyle,
}: IProps) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={disabled}
      className={cn(
        "min-h-[62px] items-center justify-center rounded-xl bg-secondary",
        containerStyle,
        disabled && "opacity-50",
      )}
    >
      <Text className={cn("font-psemibold text-lg text-primary", textStyle)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
