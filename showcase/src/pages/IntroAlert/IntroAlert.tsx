import { useState } from "react";
import { InlineAlert, Switch } from "@bcgov/design-system-react-components";
import { Link, Text } from "react-aria-components";

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
        <>
          <div className="row">
            <h2>Meet the B.C. Design System, your new best friend</h2>
            <InlineAlert variant="info">
              <Text slot="title">
                This React app's front-end is built entirely using components
                from the design system. It uses{" "}
                <a href="https://www2.gov.bc.ca/gov/content?id=5993A3D597F1454CB0E5DFA02DBB2EB7">
                  design tokens
                </a>{" "}
                for layout and typography, and standard React hooks to control
                component state and interactions. No other libraries or
                frameworks are used.
              </Text>
            </InlineAlert>
            <Text className="large">
              The <Link href="https://gov.bc.ca">B.C. Design System</Link> gives
              public sector teams a set of building blocks to build consistent,
              accessible user interfaces.
            </Text>
          </div>
        </>
      )}
    </>
  );
};

export default IntroAlert;
