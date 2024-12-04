import "./App.css";
import "@bcgov/bc-sans/css/BC_Sans.css";
import "@bcgov/design-tokens/css/variables.css";

import {
  Header,
  Footer,
  FooterLinks,
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

function App() {
  return (
    <>
      <AlertBannerWithVariants />
      <Header title="B.C. Design System Demo App" titleElement="h1">
        <InfoButton buttonVariant="link" popoverPlacement="bottom">
          The{" "}
          <a href="https://www2.gov.bc.ca/gov/content?id=84633C48F00A4C77BE9584EBFC9A39BF">
            Header
          </a>{" "}
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
            <h3>Introduction</h3>
            <p>
              The{" "}
              <a href="https://gov.bc.ca/designsystem">B.C. Design System</a>{" "}
              gives public sector teams a set of building blocks to build
              consistent, accessible user interfaces. This app illustrates how
              design system components look and behave, both in isolation and
              when composed together to form more complex design and interaction
              patterns.
            </p>
          </div>
          <div className="col">
            <h3>Explore the design system</h3>
            <ul>
              <li>
                <a href="https://gov.bc.ca/designsystem">Docs and guidance</a>
              </li>
              <li>
                <a href="https://designsystem.gov.bc.ca/react-components">
                  Browse components in Storybook
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/@bcgov/design-system-react-components">
                  Install the npm package
                </a>
              </li>
              <li>
                <a href="https://www.figma.com/community/file/1326994583954765832/b-c-design-system">
                  Get the Figma library
                </a>
              </li>
              <li>
                <a href="mailto:designsystem@gov.bc.ca">
                  Contact the B.C. Design System team
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <h3>Inline alert</h3>
          <InfoButton popoverPlacement="right">
            <a href="https://www2.gov.bc.ca/gov/content?id=B2B838CAA1EE4552941925894286258F">
              Inline alerts
            </a>{" "}
            display an important contextual notification or message to the user.
          </InfoButton>
        </div>
        <div className="row">
          <InlineAlertWithVariants />
        </div>
        <div className="row">
          <h3>Callout</h3>
          <InfoButton popoverPlacement="right">
            <a href="https://www2.gov.bc.ca/gov/content?id=84AA0EAD468F41149F125E63F91A402F">
              Callouts
            </a>{" "}
            highlight important sections of static content.
          </InfoButton>
        </div>
        <div className="row">
          <CalloutWithVariants />
        </div>
        <div className="row">
          <h3>Buttons</h3>
          <InfoButton popoverPlacement="right">
            <a href="https://www2.gov.bc.ca/gov/content?id=4C51732F99054326A3E2DB0B82576DD4">
              Buttons
            </a>{" "}
            enable the user to easily identify and take an action.
          </InfoButton>
        </div>
        <div className="row">
          <ButtonWithVariants />
        </div>
        <div className="row">
          <h3>Dialogs</h3>
          <InfoButton popoverPlacement="right">
            <a href="https://www2.gov.bc.ca/gov/content?id=6A0A247719CA42DDB9B8BAD47D46F69C">
              Dialogs
            </a>{" "}
            provide important information in an overlay over the rest of the
            interface.
          </InfoButton>
        </div>
        <div className="row">
          <Dialogs />
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <h3>Form</h3>
              <InfoButton popoverPlacement="right">
                The{" "}
                <a href="https://designsystem.gov.bc.ca/react-components/?path=/docs/utility-form-wrapper--docs">
                  Form
                </a>{" "}
                component wraps around input components to provide data
                validation and submission support.
              </InfoButton>
            </div>
            <ExampleForm />
          </div>
        </div>
      </main>
      <Footer
        contact={
          <p>
            The B.C. Design System is maintained by Service BC & Government
            Digital Experience, part of the Ministry of Citizens' Services. To
            contact the design system team, email{" "}
            <a href="mailto:designsystem@gov.bc.ca">designsystem@gov.bc.ca</a>.
          </p>
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
