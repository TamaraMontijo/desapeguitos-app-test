import "@/styles/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Slot } from "expo-router";

import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold
} from '@expo-google-fonts/nunito'
import { Loading } from "@/components/loading";

export default function Layout() {
  const [ fontsLoaded ] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }
  return (
    <GestureHandlerRootView className="flex-1">
      <Slot />
    </GestureHandlerRootView>
  );
}
