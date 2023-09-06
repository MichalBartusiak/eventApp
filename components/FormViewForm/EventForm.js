import {
  GluestackUIProvider,
  Input,
  StyledProvider,
  VStack,
  config,
  InputField,
} from "@gluestack-ui/themed";
import React from "react";
const EventForm = () => {
  return (
    <StyledProvider config={config}>
      <GluestackUIProvider config={config.theme}>
        <VStack space="xl" width={"$full"} height={"$full"} p={"$10"}>
          <Input variant="outline" size="xl" width={"$full"}>
            <InputField placeholder="Nazwa wydarzenia" />
          </Input>
          <Input variant="outline" size="xl" width={"$full"}>
            <InputField placeholder="Miejsce" />
          </Input>
          <Input variant="outline" size="xl" width={"$full"}>
            <InputField placeholder="Data" />
          </Input>
          <Input variant="outline" size="xl" width={"$full"}>
            <InputField placeholder="Enter Text here" />
          </Input>
        </VStack>
      </GluestackUIProvider>
    </StyledProvider>
  );
};

export default EventForm;
