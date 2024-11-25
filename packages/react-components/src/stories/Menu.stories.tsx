import type { Meta, StoryObj } from "@storybook/react";

import { Button, Menu, MenuItem } from "../components";
import { MenuProps } from "../components/Menu";

const meta = {
  title: "Components/Menu/Menu",
  component: Menu,
  parameters: { layout: "centered" },
  argTypes: {
    triggerElement: {
      control: { type: "object" },
      description: "",
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuTemplate: Story = {
  args: { triggerElement: [<Button>Open the modal</Button>] },
  render: ({ ...args }: MenuProps<object>) => (
    <Menu {...args}>
      <MenuItem></MenuItem>
    </Menu>
  ),
};
