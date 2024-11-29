import { useState } from "react";

import { InlineAlert, Switch } from "@bcgov/design-system-react-components";
import { Text } from "react-aria-components";

const IntroAlert = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--layout-margin-medium",
      }}
    >
      <Switch
        defaultSelected
        onChange={(isSelected) => setIsAlertVisible(isSelected)}
      >
        About this app
      </Switch>
      {isAlertVisible && (
        <InlineAlert variant="info">
          <Text slot="title">
            This React app's front-end is built using components from the{" "}
            <a href="https://gov.bc.ca/designsystem">B.C. Design System</a>. It
            uses the design system's{" "}
            <a href="https://www2.gov.bc.ca/gov/content?id=5993A3D597F1454CB0E5DFA02DBB2EB7">
              design tokens
            </a>{" "}
            to implement the typography and layout of the app. The only other
            library code used here is{" "}
            <a href="https://www.npmjs.com/package/react-grid-system">
              react-grid-system
            </a>{" "}
            and the unstyled Text component from{" "}
            <a href="https://react-spectrum.adobe.com/react-aria/components.html">
              React Aria Components
            </a>
            .
          </Text>
        </InlineAlert>
      )}
    </div>
  );
};

export default IntroAlert;
