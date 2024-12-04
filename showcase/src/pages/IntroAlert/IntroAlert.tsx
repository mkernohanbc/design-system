import { useState } from "react";
import { InlineAlert, Switch } from "@bcgov/design-system-react-components";
import { Text } from "react-aria-components";

const IntroAlert = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  return (
    <>
      <Switch
        defaultSelected
        onChange={(isSelected) => setIsAlertVisible(isSelected)}
        style={{ paddingBottom: "var(--layout-padding-small)" }}
      >
        About this app
      </Switch>
      {isAlertVisible && (
        <InlineAlert variant="info">
          <Text slot="title">
            This React app's front-end is built entirely using components from
            the <a href="https://gov.bc.ca/designsystem">B.C. Design System</a>.
            It uses the design system's{" "}
            <a href="https://www2.gov.bc.ca/gov/content?id=5993A3D597F1454CB0E5DFA02DBB2EB7">
              design tokens
            </a>{" "}
            for typography and layout, and standard React hooks to control
            component state and interactions. No other external libraries are
            used.
          </Text>
        </InlineAlert>
      )}
    </>
  );
};

export default IntroAlert;
