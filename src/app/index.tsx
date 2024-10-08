import { View, ScrollView } from "react-native";
import { Header } from "../components/Header";

import Constants from "expo-constants"
import { Banner } from "../components/Banner";
import { Search } from "../components/Search";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    > 
      <View className="w-full px-2" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />
      </View>
    </ScrollView>
  );
}
