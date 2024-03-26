import "@/styles/global.css";

import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "@/components/menu";
import { DesapegoCard } from "@/components/desapegoCard";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SlidersHorizontal } from "lucide-react-native";
import { colors } from "@/styles/colors";
import { Link, Slot } from "expo-router";

export default function Home() {
  return (
    <>
      <ScrollView className="flex-1 p-4">
        <View className="flex-row items-center">
          <Input
            placeholder="Buscar produto"
            className="flex-1 flex-row gap-2 text-purple-100 border-purple-500 h-14 my-4 pr-4"
            inputClasses="w-full"
          ></Input>
          <Button
            label="Filtros"
            className="flex-1/3 rounded-xl h-14 border border-purple-500 px-6"
          >
            <SlidersHorizontal color={colors.white} />
          </Button>
        </View>
        <View className="flex-row items-center justify-between my-4">
          <TouchableOpacity>
            <Text className="font-bold">Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="font-bold">Fraldas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="font-bold">Roupas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="font-bold">Móveis</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="font-bold">Brinquedos</Text>
          </TouchableOpacity>
        </View>
        <Link href="/login">
            login
          </Link>
        <View className="flex-wrap flex-row gap-4 justify-between">
          <Link href="/login" asChild>
            <DesapegoCard />
          </Link>
          <DesapegoCard />
          <DesapegoCard />
          <DesapegoCard />
          <DesapegoCard />
          <DesapegoCard />
          <DesapegoCard />
        </View>
      </ScrollView>
    </>
  );
}
