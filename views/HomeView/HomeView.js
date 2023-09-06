import {
  ButtonText,
  GluestackUIProvider,
  config,
  Button,
  StyledProvider,
  ButtonIcon,
  AddIcon,
  Box,
  VStack,
  SearchIcon,
} from "@gluestack-ui/themed";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const image = "../../images/homeBackground.jpg";

const HomeView = ({ navigation }) => {
  const handleOnPressNewEvent = () => {
    navigation.navigate("formView");
  };
  const handleOnPressAllEvents = ({ navigation }) => {
    navigation.navigate("allEvents");
  };
  return (
    <StyledProvider config={config}>
      <GluestackUIProvider config={config.theme}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          styles={styles.image}
        >
          <Box justifyContent="center" h={"$full"}>
            <VStack>
              <Box gap={"$10"}>
                <Button
                  size="xl"
                  w={"auto"}
                  alignSelf="center"
                  action="primary"
                  onPress={handleOnPressNewEvent}
                >
                  <ButtonText>Stwórz swoje wydarzenie</ButtonText>
                  <ButtonIcon as={AddIcon} ml="$2" />
                </Button>
                <Button
                  size="xl"
                  w={"auto"}
                  alignSelf="center"
                  action="primary"
                  onPress={handleOnPressAllEvents}
                >
                  <ButtonText>Sprawdź wydarzenia</ButtonText>
                  <ButtonIcon as={SearchIcon} ml="$2" />
                </Button>
              </Box>
            </VStack>
          </Box>
        </ImageBackground>
      </GluestackUIProvider>
    </StyledProvider>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
});

export default HomeView;
