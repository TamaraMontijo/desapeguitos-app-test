import "@/styles/global.css";

import { Header } from "@/components/header";
import { ScrollView, View } from "react-native";
import { Menu } from "@/components/menu";
import { DesapegoCard } from "@/components/desapegoCard";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollView className="flex-1 p-4">
        <View className="flex-wrap flex-row gap-4">
          <DesapegoCard />
          <DesapegoCard />
          <DesapegoCard />
          <DesapegoCard />
          <DesapegoCard />
          <DesapegoCard />
          <DesapegoCard />
        </View>
      </ScrollView>
      <Menu />
    </>
  );
}
