import { colors } from "@/styles/colors";
import { Link, router } from "expo-router";
import { Blocks, ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="bg-purple-500 h-[12%] justify-end p-4">
      <View className="flex-row items-center gap-4">
        <View className="w-1/5">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => router.back()}
          >
            <ChevronLeft color={colors.white} size={32} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center gap-4 w-1/2">
          <Blocks color={colors.white} />
          <Text className="text-white text-xl font-bold">DESAPEGUITOS</Text>
        </View>
      </View>
    </View>
  );
}
