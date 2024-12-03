import { useState } from "react";
import { InlineAlert, Switch } from "@bcgov/design-system-react-components";
import { Text } from "react-aria-components";
import { Row, Col } from "react-grid-system";

const IntroAlert = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  return (
    <>
      <Row>
        <Col sm={3} style={{ paddingBottom: "var(--layout-padding-small)" }}>
          <Switch
            defaultSelected
            onChange={(isSelected) => setIsAlertVisible(isSelected)}
          >
            About this app
          </Switch>
        </Col>
        <Col sm={12}>
          {isAlertVisible && (
            <InlineAlert variant="info">
              <Text slot="title">
                This React app's front-end is built using components from the{" "}
                <a href="https://gov.bc.ca/designsystem">B.C. Design System</a>.
                It uses the design system's{" "}
                <a href="https://www2.gov.bc.ca/gov/content?id=5993A3D597F1454CB0E5DFA02DBB2EB7">
                  design tokens
                </a>{" "}
                to implement the typography and layout of the app. The only
                other library code used here is{" "}
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
        </Col>
      </Row>
    </>
  );
};

export default IntroAlert;
