import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {children}
    </SafeAreaView>
  );
};

export default PageWrapper;
