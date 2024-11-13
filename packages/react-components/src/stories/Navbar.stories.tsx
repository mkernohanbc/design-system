import type { Meta, StoryObj } from "@storybook/react";

import { Button, Header, Navbar, Link } from "../components";
import { NavbarProps } from "@/components/Navbar";

const meta = {
  title: "Components/Header/Navbar",
  component: Navbar,
  parameters: { layout: "centered" },
  argTypes: {
    children: {
      control: { type: "object" },
      description: "Populates navbar content",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarTemplate: Story = {
  args: {
    children: [
      <Link href="#" size="small">
        Nav item 1
      </Link>,
      <Link href="#" size="small">
        Nav item 2
      </Link>,
      <Link href="#" size="small">
        Nav item 3
      </Link>,
      <Link href="#" size="small">
        Nav item 4
      </Link>,
      <Link href="#" size="small">
        Nav item 5
      </Link>,
    ],
  },
  render: ({ ...args }: NavbarProps) => (
    <>
      <Header title="B.C. Design System">
        <div style={{ width: "300px" }} />
        <Button variant="secondary" size="small">
          Log in
        </Button>
      </Header>
      <Navbar {...args} />
    </>
  ),
};
