import { Meta, StoryObj } from "@storybook/react";

import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({
  pageId: "logout-confirm.ftl",
});

const meta = {
  title: "login/LogoutConfirm",
  component: KcPageStory,
  parameters: {},
} satisfies Meta<typeof KcPageStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <KcPageStory />,
};
