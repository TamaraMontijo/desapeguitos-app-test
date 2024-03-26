import "@/styles/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Slot, Tabs } from "expo-router";

import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Loading } from "@/components/loading";
import { Header } from "@/components/header";
import { colors } from "@/styles/colors";
import { Heart, Home, LayoutList } from "lucide-react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <GestureHandlerRootView className="flex-1">
      <Header />
      <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.purple[500],
        tabBarInactiveTintColor: colors.purple[100],
        
      }}>
        <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Home size={size} color={color} />
          ),
        }}
      />     
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Heart size={size} color={color} />
          ),
        }}
      />
      </Tabs>
    </GestureHandlerRootView>
  );
}
