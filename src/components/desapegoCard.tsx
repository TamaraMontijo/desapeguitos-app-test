import {
  Text,
  Image,
  View,
} from "react-native";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../../components/Card";

export function DesapegoCard() {
  return (
    <Card className="w-[48%] h-[220px] border-blue border rounded-xl">
      <Image
        className="w-full h-1/2 rounded-t-xl"
        source={require("@/assets/camiseta.png")}
      />
      <CardHeader className="py-2 px-2">
        <View className="flex-row justify-between">
          <CardDescription className="text-green">0.5 km</CardDescription>
          <CardDescription className="text-blue">1 ano +</CardDescription>
        </View>
      </CardHeader>
      <CardContent className="p-2 pt-4">
        <Text className="text-pretty">
          Descrição do produto com caracteres máximo e reticên...
        </Text>
      </CardContent>
    </Card>
  );
}
