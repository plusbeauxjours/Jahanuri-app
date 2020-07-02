import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AsyncStorage from "@react-native-community/async-storage";
import { persistCache } from "apollo-cache-persist";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { ApolloProvider } from "react-apollo";

import apolloClientOptions from "./apollo";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { GRAPHQL_URL } from "./src/constants/urls";
import MainNavigation from "./src/navigations/MainNavigation";
import { ThemeProvider } from "./src/styles/typed-components";
import theme from "./src/styles/theme";
import * as Sentry from "sentry-expo";
import Constants from "expo-constants";

export default function App() {
  const [client, setClient] = useState<any>(null);
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);
  const setSentry = () => {
    Sentry.init({
      dsn:
        "https://4bfd98de218e4113a025e5b44c9eb9ae@o282599.ingest.sentry.io/5283690",
      enableInExpoDevelopment: true,
      debug: true,
    });
    Sentry.setRelease(
      Constants.manifest.revisionId ? Constants.manifest.revisionId : ""
    );
  };
  const makeClient = async () => {
    try {
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage,
      });
      // await AsyncStorage.clear();
      cache.reset();
      let httpLink = createUploadLink({
        uri: GRAPHQL_URL as string,
      });
      let authLink = setContext(async (_: any, { headers }: any) => {
        const token = await AsyncStorage.getItem("jwt");
        return {
          headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : "",
          },
        };
      });
      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache,
        ...apolloClientOptions,
      });
      setClient(client);
    } catch (e) {
      console.log(e);
    }
  };
  const loadResourcesAsync = async () => {
    await Font.loadAsync({
      ...Ionicons.font,
      ...MaterialIcons.font,
    });
    await Asset.loadAsync([
      require("./src/images/AboutImages/FifthPage.jpg"),
      require("./src/images/AboutImages/FirstPage.jpg"),
      require("./src/images/AboutImages/FourthPage.jpg"),
      require("./src/images/AboutImages/SecondPage.jpg"),
      require("./src/images/AboutImages/ThirdPage.jpg"),
      require("./src/images/MainImage.jpg"),
      require("./src/images/Contact/web_gomaschool.png"),
      require("./src/images/Contact/web_jahanuri.png"),
      require("./src/images/Contact/web_hanmuye.png"),
      require("./src/images/Contact/web_gomaon.png"),
      require("./src/images/Contact/channel_youtube.png"),
      require("./src/images/Contact/channel_instagram_gomaon.png"),
      require("./src/images/Contact/channel_facebook_gomaon.png"),
      require("./src/images/Contact/blog.png"),
      require("./src/images/Contact/community_cafe_jahanuri.png"),
      require("./src/images/Contact/shop_gomashop.png"),
      require("./src/images/Contact/shop_naturevitameals.png"),
    ]);
  };
  const handleLoadingError = (error) => {
    console.warn(error);
  };
  const handleFinishLoading = () => {
    setLoadingComplete(true);
  };
  useEffect(() => {
    makeClient();
    setSentry();
  }, []);
  if (isLoadingComplete && client !== null) {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <PaperProvider>
            <ThemeProvider theme={theme}>
              <MainNavigation />
            </ThemeProvider>
          </PaperProvider>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading()}
      />
    );
  }
}
