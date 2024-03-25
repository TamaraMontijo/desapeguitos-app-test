import { colors } from "@/styles/colors";
import { Heart, Home, LayoutList, Plus, UserRound } from "lucide-react-native";
import { TouchableOpacity, Text, View } from "react-native";

export function Menu() {
  return (
    <View className="flex-row w-full p-8 justify-between items-center background-white">
      <TouchableOpacity className="items-center gap-1">
        <Home color={colors.blue} />
        <Text className="text-blue">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center gap-1">
        <LayoutList color={colors.blue} />
        <Text className="text-blue">Meus Anúncios</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-purple-500 rounded-full p-4">
        <Plus color={colors.white}/>
      </TouchableOpacity>
      <TouchableOpacity className="items-center gap-1">
        <Heart color={colors.blue} />
        <Text className="text-blue">Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center gap-1">
        <UserRound color={colors.blue} />
        <Text className="text-blue">Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
