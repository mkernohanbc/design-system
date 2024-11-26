import type { Meta, StoryObj } from "@storybook/react";
import { Separator, ButtonGroup, Button, TextField } from "../components";
import { SeparatorProps } from "@/components/Separator/Separator";

const meta = {
  title: "Utility/Separators",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
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
