import "./App.css";
import "@bcgov/bc-sans/css/BC_Sans.css";
import "@bcgov/design-tokens/css/variables.css";

import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Header,
  Footer,
  FooterLinks,
  Form,
  InlineAlert,
  Radio,
  RadioGroup,
  SvgInfoIcon,
  TextField,
  TextArea,
  Tooltip,
  TooltipTrigger,
} from "@bcgov/design-system-react-components";

// import path for components not yet released
import {} from "../../packages/react-components/src/components";

// importing demo components with useState
import {
  AlertBannerWithVariants,
  ButtonWithVariants,
  CalloutWithVariants,
  Dialogs,
  InlineAlertWithVariants,
  IntroAlert,
} from "./pages";

import { Link, Text } from "react-aria-components";
import { Container, Row, Col } from "react-grid-system";

function App() {
  return (
    <>
      <AlertBannerWithVariants />
      <Header title="B.C. Design System Demo App" titleElement="h1">
        <TooltipTrigger>
          <Button
            isIconButton
            variant="link"
            aria-label="This button has a tooltip"
          >
            <SvgInfoIcon />
          </Button>
          <Tooltip placement="left">This is a tooltip</Tooltip>
        </TooltipTrigger>
        <Link
          className="bcds-react-aria-Button primary"
          href="https://gov.bc.ca/designsystem"
        >
          Explore the design system
        </Link>
      </Header>
      <main>
        <Container>
          <Row>
            <Col sm={12}>
              <IntroAlert />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h2>Components</h2>
              <h3>Inline alert</h3>
              <InlineAlertWithVariants />
              <h3>Callout</h3>
              <CalloutWithVariants />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <h3>Buttons</h3>
              <ButtonWithVariants />
            </Col>
            <Col sm={6}>
              <h3>Dialogs</h3>
              <Dialogs />
            </Col>
          </Row>
          <Row>
            <Col sm={6}></Col>
            <Col sm={6}>
              <h3>
                Form <SvgInfoIcon />
              </h3>
              <Form className="form">
                <InlineAlert
                  variant="warning"
                  title="This is a dummy form"
                  description="Pressing 'submit' will show a browser alert and trigger HTML validation, but no data is stored or submitted."
                />
                <Text>
                  These input fields are wrapped in a <code>{"<Form>"}</code>{" "}
                  component, which groups them for the purposes of data
                  validation and submission.
                </Text>
                <div className="fieldset">
                  <TextField
                    label="Name"
                    isRequired
                    description="Required inputs automatically show a 'required' indicator."
                  />
                  <TextField
                    label="Email address"
                    type="email"
                    description="A TextField supports standard HTML form validation."
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ alignSelf: "flex-start" }}>
                    <CheckboxGroup
                      label="Checkbox group"
                      description="A checkbox group allows multiple selections."
                    >
                      <Checkbox value="1">Item 1</Checkbox>
                      <Checkbox value="2">Item 2</Checkbox>
                      <Checkbox value="3">Item 3</Checkbox>
                      <Checkbox value="4">Item 4</Checkbox>
                    </CheckboxGroup>
                  </div>
                  <div style={{ alignSelf: "flex-end" }}>
                    <RadioGroup
                      label="Radio group"
                      description="A radio group allows only one selection."
                      isRequired
                      defaultValue="1"
                    >
                      <Radio value="1">Item 1</Radio>
                      <Radio value="2">Item 2</Radio>
                      <Radio value="3">Item 3</Radio>
                      <Radio value="4">Item 4</Radio>
                    </RadioGroup>
                  </div>
                </div>

                <TextArea
                  label="Write a long message (but not too long)"
                  description="If you set a maximum length, a character counter is shown."
                  maxLength={100}
                />
                <ButtonGroup orientation="horizontal">
                  <Button
                    variant="primary"
                    type="submit"
                    onPress={() =>
                      alert(
                        "In a real form, this onPress() event would do something. But this is not a real form, so it doesn't do anything except trigger standard HTML form validation."
                      )
                    }
                  >
                    Submit
                  </Button>
                  <Button variant="secondary" type="reset">
                    Reset
                  </Button>
                </ButtonGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer
        contact={
          <Text>
            The B.C. Design System is maintained by Service BC & Government
            Digital Experience, part of the Ministry of Citizens' Services. To
            contact the design system team, email{" "}
            <a href="mailto:designsystem@gov.bc.ca">designsystem@gov.bc.ca</a>.
          </Text>
        }
        links={
          <FooterLinks
            links={[
              <a href="https://gov.bc.ca/designsystem">Design system</a>,
              <a href="https://github.com/bcgov/design-system">GitHub</a>,
            ]}
            title="Explore the design system"
          />
        }
      />
    </>
  );
}

export default App;
