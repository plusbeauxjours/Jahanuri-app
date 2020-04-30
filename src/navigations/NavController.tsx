import React, { useEffect } from "react";
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";
import { AsyncStorage } from "react-native";
import { MeProvider } from "../context/meContext";

const NavController = () => {
  const checkAuthentication = () => {
    try {
      const uuid = AsyncStorage.getItem("jwt");
      if (uuid) {
        return (
          <MeProvider>
            <MainNavigation />
          </MeProvider>
        );
      } else {
        return <AuthNavigation />;
      }
    } catch (_) {
      return <AuthNavigation />;
    }
  };
  useEffect(() => {
    checkAuthentication();
  });
  return <AuthNavigation />;
};

export default NavController;
