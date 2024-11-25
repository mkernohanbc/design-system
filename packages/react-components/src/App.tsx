import {
  Menu as ReactAriaMenu,
  MenuItem as ReactAriaMenuItem,
  MenuTrigger as ReactAriaMenuTrigger,
  Popover as ReactAriaPopover,
} from "react-aria-components";

import "./App.css";
import * as tokens from "@bcgov/design-tokens/js";
import "@bcgov/bc-sans/css/BC_Sans.css";

import {
  Button,
  Footer,
  FooterLinks,
  Header,
  Link,
  Menu,
  MenuItem,
  MenuTrigger,
  SubmenuTrigger,
  SvgInfoIcon,
  SvgMenuIcon,
} from "@/components";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  AlertBannerPage,
  ButtonPage,
  ButtonGroupPage,
  CalloutPage,
  CheckboxGroupPage,
  InlineAlertPage,
  LinkPage,
  ModalDialogPage,
  RadioGroupPage,
  SelectPage,
  TagGroupPage,
  TextAreaPage,
  TextFieldPage,
  SwitchPage,
  TooltipPage,
} from "@/pages";

function App() {
  const { isMedium } = useWindowDimensions();

  return (
    <>
      <Header title="B.C. Design System Kitchen Sink">
        <Link href="#" size="small" iconLeft={<SvgInfoIcon />}>
          Test medium link
        </Link>
        <Link href="#" size="small" iconLeft={<SvgInfoIcon />}>
          Test link
        </Link>
        <Link href="#" size="small" isDisabled iconLeft={<SvgInfoIcon />}>
          Test disabled link
        </Link>
        <MenuTrigger>
          <Button size="small" variant="secondary">
            Menu <SvgMenuIcon />
          </Button>
          <Menu>
            <MenuItem href="#">Item 1 has a longish name</MenuItem>
            <MenuItem href="#" size="small">
              Item 2 uses the "small" size
            </MenuItem>
            <MenuItem href="#" isDisabled>
              Item 3 is disabled
            </MenuItem>
            <SubmenuTrigger>
              <MenuItem>Submenu</MenuItem>
              <Menu>
                <MenuItem>Subitem 1</MenuItem>
                <MenuItem>Subitem 2</MenuItem>
                <MenuItem>Subitem 3</MenuItem>
              </Menu>
            </SubmenuTrigger>
          </Menu>
        </MenuTrigger>
      </Header>
      <Header
        logoLinkElement={
          <button
            aria-label="Home"
            onClick={() => alert("Clicked")}
            style={{
              background: "none",
              border: "none",
              margin: "0",
              padding: "0",
              cursor: "pointer",
            }}
          />
        }
        title="Header with custom logo anchor element"
      />
      <Header
        title="Header with children"
        skipLinks={[
          <a href="/#main-content">Skip to main content</a>,
          <a href="/#main-content">Skip to main navigation</a>,
          <a href="/#accessibility">Accessibility Statement</a>,
        ]}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          {isMedium ? (
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                font: tokens.typographyRegularBody,
                listStyle: "none",
                paddingLeft: 0,
              }}
            >
              <li
                style={{
                  padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                }}
              >
                Link
              </li>
              <li
                style={{
                  padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                }}
              >
                Link
              </li>
              <li
                style={{
                  padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                }}
              >
                Link
              </li>
            </ul>
          ) : (
            <ReactAriaMenuTrigger>
              <Button size="small" variant="secondary">
                Menu <SvgMenuIcon />
              </Button>
              <ReactAriaPopover>
                <ReactAriaMenu>
                  <ReactAriaMenuItem
                    style={{
                      padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                    }}
                  >
                    Link
                  </ReactAriaMenuItem>
                  <ReactAriaMenuItem
                    style={{
                      padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                    }}
                  >
                    Link
                  </ReactAriaMenuItem>
                  <ReactAriaMenuItem
                    style={{
                      padding: `${tokens.layoutPaddingNone} ${tokens.layoutPaddingMedium}`,
                    }}
                  >
                    Link
                  </ReactAriaMenuItem>
                </ReactAriaMenu>
              </ReactAriaPopover>
            </ReactAriaMenuTrigger>
          )}
        </div>
      </Header>
      <Header
        subnavItems={[
          <Link href="#" size="small">
            Nav item 1
          </Link>,
          <Link href="#" size="small">
            Nav item 2
          </Link>,
          <Link href="#" size="small" iconLeft={<SvgInfoIcon />}>
            Nav item 3
          </Link>,
          <Link href="#" size="small">
            Nav item 4
          </Link>,
          <Link href="#" size="small">
            Nav item 5
          </Link>,
        ]}
      />
      <AlertBannerPage />
      <main>
        <h1>Components</h1>
        <LinkPage />
        <ButtonPage />
        <ButtonGroupPage />
        <CalloutPage />
        <CheckboxGroupPage />
        <SwitchPage />
        <InlineAlertPage />
        <ModalDialogPage />
        <RadioGroupPage />
        <SelectPage />
        <TagGroupPage />
        <TooltipPage />
        <TextAreaPage />
        <TextFieldPage />
      </main>
      <Footer />
      <Footer
        acknowledgement={<p>Optional land acknowledgement slot.</p>}
        logo={<SvgMenuIcon />}
        contact={<p>Optional contact information slot.</p>}
        links={
          <FooterLinks
            title="Optional links list"
            links={[
              <a href="/">Lorem ipsum dolor sit amet</a>,
              <a href="/">Phasellus vitae condimentum erat</a>,
              <a href="/">Donec ipsum augue, ornare at blandit sit amet</a>,
              <a href="/">Etiam luctus nulla venenatis nunc luctus rutrum</a>,
              <a href="/">Mauris vitae sem quis nibh volutpat condimentum</a>,
              <a href="/">Nam sed sodales arcu, ut fringilla quam</a>,
              <a href="/">
                Curabitur accumsan sapien condimentum semper condimentum
              </a>,
            ]}
          />
        }
        copyright="Copyright 2025 BC Gov"
      />
      <Footer
        acknowledgement={
          <p>
            Footer with <code>children</code> below:
          </p>
        }
      >
        <FooterLinks
          title="Footer Links 1"
          links={[
            <a href="/">Lorem ipsum dolor sit amet</a>,
            <a href="/">Phasellus vitae condimentum erat</a>,
            <a href="/">Donec ipsum augue, ornare at blandit sit amet</a>,
            <a href="/">Etiam luctus nulla venenatis nunc luctus rutrum</a>,
            <a href="/">Mauris vitae sem quis nibh volutpat condimentum</a>,
            <a href="/">Nam sed sodales arcu, ut fringilla quam</a>,
            <a href="/">
              Curabitur accumsan sapien condimentum semper condimentum
            </a>,
          ]}
        />
        <FooterLinks
          title="Footer Links 2"
          links={[
            <a href="/">Maecenas quis neque nulla</a>,
            <a href="/">Vivamus pulvinar sed leo ut placerat</a>,
            <a href="/">Suspendisse potenti</a>,
            <a href="/">Morbi id diam id enim interdum placerat</a>,
            <a href="/">Integer sed odio vitae urna placerat sodales</a>,
            <a href="/">Quisque dignissim ultricies nisl eget consequat</a>,
            <a href="/">
              Nullam non nulla tincidunt ligula feugiat porttitor at ac leo
            </a>,
            <a href="/">Proin dictum vestibulum accumsan</a>,
            <a href="/">
              Duis felis purus, pulvinar eu nunc vitae, congue elementum metus
            </a>,
          ]}
        />
        <FooterLinks
          title="Footer Links 3"
          links={[
            <a href="/">Lorem ipsum dolor sit amet</a>,
            <a href="/">Phasellus vitae condimentum erat</a>,
            <a href="/">Donec ipsum augue, ornare at blandit sit amet</a>,
            <a href="/">Etiam luctus nulla venenatis nunc luctus rutrum</a>,
            <a href="/">Mauris vitae sem quis nibh volutpat condimentum</a>,
            <a href="/">Nam sed sodales arcu, ut fringilla quam</a>,
            <a href="/">
              Curabitur accumsan sapien condimentum semper condimentum
            </a>,
          ]}
        />
      </Footer>
    </>
  );
}

export default App;
