import "./App.css";
import "@bcgov/bc-sans/css/BC_Sans.css";

import {
  Button,
  Footer,
  FooterLinks,
  Header,
  Link,
  Menu,
  MenuItem,
  MenuSection,
  MenuSectionHeader,
  MenuTrigger,
  SubmenuTrigger,
  Separator,
  SvgInfoIcon,
  SvgMenuIcon,
  SvgChevronDownIcon,
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

  const MenuItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3", href: "https://example.org" },
    { id: 4, name: "Item 4" },
  ];

  return (
    <>
      <Header title="B.C. Design System Kitchen Sink">
        <MenuTrigger>
          <Button size="small" variant="secondary">
            Menu with dynamic list <SvgChevronDownIcon />
          </Button>
          <Menu items={MenuItems}>
            {(item) => (
              <MenuItem id={item.id} href={item.href}>
                {item.name}
              </MenuItem>
            )}
          </Menu>
        </MenuTrigger>
        <MenuTrigger>
          <Button size="small" variant="secondary">
            Explore the site <SvgMenuIcon />
          </Button>
          <Menu>
            <MenuSection>
              <MenuSectionHeader>Section 1</MenuSectionHeader>
              <MenuItem
                href="https://gov.bc.ca/designsystem"
                target="blank"
                id="1"
              >
                Item 1 with long name
              </MenuItem>
              <MenuItem id="2">Item 2</MenuItem>
              <MenuItem id="3" isDisabled>
                Item 3 is disabled
              </MenuItem>
            </MenuSection>
            <Separator />
            <MenuSection>
              <MenuSectionHeader>Section 2</MenuSectionHeader>
              <SubmenuTrigger>
                <MenuItem id="4">Submenu</MenuItem>
                <Menu>
                  <MenuItem id="1">Subitem 1</MenuItem>
                  <MenuItem id="2">Subitem 2</MenuItem>
                  <MenuItem id="3">Subitem 3</MenuItem>
                </Menu>
              </SubmenuTrigger>
            </MenuSection>
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
                gap: "var(--layout-margin-medium)",
                listStyle: "none",
              }}
            >
              <li>
                <Link href="#">Link component 1</Link>
              </li>
              <li>
                <Link href="2">Link component 1</Link>
              </li>
              <li>
                <Link href="#">Link component 3</Link>
              </li>
            </ul>
          ) : (
            <MenuTrigger>
              <Button size="small" variant="secondary">
                Menu <SvgMenuIcon />
              </Button>
              <Menu>
                <MenuItem href="#">Menu item component 1</MenuItem>
                <MenuItem href="#">Menu item component 2</MenuItem>
                <MenuItem href="#">Menu item component 3</MenuItem>
              </Menu>
            </MenuTrigger>
          )}
        </div>
      </Header>
      <Header
        title="Header with navbar"
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
          <Link href="#" size="small">
            Nav item 6
          </Link>,
          <Link href="#" size="small">
            Nav item 7
          </Link>,
          <Link href="#" size="small">
            Nav item 8
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
