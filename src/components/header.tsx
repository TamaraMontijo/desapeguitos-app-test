import { colors } from "@/styles/colors";
import { Blocks, ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export function Header() {
  return (
    <View className="bg-purple-500 h-[12%] justify-end p-4">
      <TouchableOpacity className="mt-[80px]">
        <ChevronLeft color={colors.white}/>
      </TouchableOpacity>
      <View className="flex-row justify-center items-center gap-4">
        <Blocks color={colors.white}/>
        <Text className="text-white text-xl font-bold">DESAPEGUITOS</Text>
      </View>
    </View>
  );
}
