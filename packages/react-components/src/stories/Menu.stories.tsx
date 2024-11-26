import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Link,
  Menu,
  MenuItem,
  MenuTrigger,
  SubmenuTrigger,
  SvgMenuIcon,
} from "../components";
import { MenuProps } from "../components/Menu";

const meta = {
  title: "Components/Menu/Menu",
  component: Menu,
  parameters: { layout: "centered" },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Expects an array of `MenuItem` components",
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTemplate: Story = {
  args: {
    children: [
      <MenuItem>
        <Link href="#">Item 1</Link>
      </MenuItem>,
    ],
  },
  render: ({ ...args }: MenuProps<object>) => (
    <MenuTrigger>
      <Button variant="secondary">
        Open the menu <SvgMenuIcon />
      </Button>
      <Menu {...args} />
    </MenuTrigger>
  ),
};

export const MenuWithSubmenu: Story = {
  args: {
    children: [
      <MenuItem>
        <Link href="#">Item 1</Link>
      </MenuItem>,
      <MenuItem>
        <Link href="#">Item 2</Link>
      </MenuItem>,
      [
        <SubmenuTrigger>
          <MenuItem>Submenu</MenuItem>
          <Menu>
            <MenuItem>Submenu item 1</MenuItem>
            <MenuItem>Submenu item 2</MenuItem>
          </Menu>
        </SubmenuTrigger>,
      ],
    ],
  },
  render: ({ ...args }: MenuProps<object>) => (
    <MenuTrigger>
      <Button variant="secondary">
        Open the menu <SvgMenuIcon />
      </Button>
      <Menu {...args} />
    </MenuTrigger>
  ),
};
