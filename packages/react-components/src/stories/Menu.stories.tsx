import type { Meta, StoryObj } from "@storybook/react";

import { Button, Link, Menu, MenuItem, SvgMenuIcon } from "../components";
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
    triggerElement: {
      control: { type: "object" },
      description:
        "The component (commonly a `Button`) that activates the menu",
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTemplate: Story = {
  args: {
    triggerElement: [
      <Button variant="secondary">
        Open the menu <SvgMenuIcon />
      </Button>,
    ],
    children: [
      <MenuItem>
        <Link href="#">Item 1</Link>
      </MenuItem>,
    ],
  },
  render: ({ ...args }: MenuProps<object>) => <Menu {...args} />,
};
