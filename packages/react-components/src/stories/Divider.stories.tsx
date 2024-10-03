import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../components";
import { DividerProps } from "@/components/Divider";

const meta = {
  title: "Utility/Divider",
  component: Divider,
  parameters: { layout: "centered" },
  argTypes: {
    isDashed: {
      control: { type: "boolean" },
      description: "Toggles between solid and dashed styles",
    },
    isVertical: {
      control: { type: "boolean" },
      description: "Toggles between default horizontal and vertical layout",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DividerTemplate: Story = {
  args: {},
  render: ({ ...args }: DividerProps) => (
    <>
      <div>This is some text before the divider</div> <Divider {...args} />{" "}
      <div>This is some text after the divider.</div>
    </>
  ),
};

export const VerticalDivider: Story = {
  args: { isVertical: true },
  render: ({ ...args }: DividerProps) => (
    <>
      <div style={{ display: "flex" }}>
        <div>This is some text before the divider</div>
        <Divider {...args} /> <div>This is some text after the divider.</div>
      </div>
    </>
  ),
};
