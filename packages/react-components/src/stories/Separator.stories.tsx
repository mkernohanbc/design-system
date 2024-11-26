import type { Meta, StoryObj } from "@storybook/react";
import { Separator, ButtonGroup, Button, TextField } from "../components";
import { SeparatorProps } from "@/components/Separator/Separator";

const meta = {
  title: "Utility/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Sets orientation of separator within its parent container",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "Sets thickness of separator line",
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SeparatorTemplate: Story = {
  args: { size: "small" },
  render: ({ ...args }: SeparatorProps) => (
    <>
      <TextField />
      <Separator {...args} />
      <TextField />
    </>
  ),
};

export const VerticalSeparator: Story = {
  args: { orientation: "vertical", size: "small" },
  render: ({ ...args }: SeparatorProps) => (
    <>
      <ButtonGroup>
        <Button>Button 1</Button>
        <Separator {...args} />
        <Button>Button 2</Button>
      </ButtonGroup>
    </>
  ),
};

export const SmallSeparator: Story = {
  args: { size: "small" },
  render: ({ ...args }: SeparatorProps) => (
    <>
      <TextField />
      <Separator {...args} />
      <TextField />
    </>
  ),
};

export const MediumSeparator: Story = {
  args: { size: "medium" },
  render: ({ ...args }: SeparatorProps) => (
    <>
      <TextField />
      <Separator {...args} />
      <TextField />
    </>
  ),
};

export const LargeSeparator: Story = {
  args: { size: "large" },
  render: ({ ...args }: SeparatorProps) => (
    <>
      <TextField />
      <Separator {...args} />
      <TextField />
    </>
  ),
};
