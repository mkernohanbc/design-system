import "./App.css";
import "@bcgov/bc-sans/css/BC_Sans.css";
import "@bcgov/design-tokens/css/variables.css";

import {
  Header,
  Footer,
  FooterLinks,
  InlineAlert,
} from "@bcgov/design-system-react-components";

// import path for components not yet released
import {} from "../../packages/react-components/src/components";

// importing demo components with useState
import {
  AlertBannerWithVariants,
  ButtonWithVariants,
  CalloutWithVariants,
  Dialogs,
  ExampleForm,
  InfoButton,
  InlineAlertWithVariants,
  IntroAlert,
} from "./pages";

import { Link, Text } from "react-aria-components";

function App() {
  return (
    <>
      <AlertBannerWithVariants />
      <Header title="B.C. Design System Demo App" titleElement="h1">
        <InfoButton buttonVariant="link" popoverPlacement="bottom">
          The{" "}
          <Link href="https://www2.gov.bc.ca/gov/content?id=84633C48F00A4C77BE9584EBFC9A39BF">
            Header
          </Link>{" "}
          component communicates authorship and provides navigation.
        </InfoButton>
      </Header>
      <main>
        <div className="row">
          <div className="col">
            <IntroAlert />
          </div>
        </div>
        <div className="row">
          <h2>Components</h2>
        </div>
        <div className="row">
          <div className="col">
            <h3>TKTK</h3>
            <Text>TKTKTKTKTKTKTK</Text>
          </div>
          <div className="col">
            <h3>TKTK</h3>
            <Text>TKTKTKTKTKTKTK</Text>
          </div>
        </div>
        <div className="row">
          <h2>Components</h2>
        </div>
        <div className="row">
          <h3>Inline alert</h3>
        </div>
        <div className="row">
          <InlineAlertWithVariants />
        </div>
        <div className="row">
          <h3>Callout</h3>
        </div>
        <div className="row">
          <CalloutWithVariants />
        </div>
        <div className="row">
          <h3>Buttons</h3>
        </div>
        <div className="row">
          <ButtonWithVariants />
        </div>
        <div className="row">
          <h3>Dialogs</h3>
        </div>
        <div className="row">
          <Dialogs />
        </div>
        <div className="row">
          <div className="col">
            <h3>Form</h3>
            <InlineAlert
              variant="info"
              title="This is a dummy form"
              description="Pressing 'submit' will show a browser alert and trigger HTML validation, but no data is stored or submitted."
            />
            <ExampleForm />
          </div>
        </div>
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
