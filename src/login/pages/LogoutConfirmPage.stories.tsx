import { Meta, StoryObj } from "@storybook/react";

import { createPageStory } from "../createPageStory";

const { PageStory } = createPageStory({
  pageId: "logout-confirm.ftl",
});

const meta = {
  title: "login/LogoutConfirm",
  component: PageStory,
  parameters: {},
} satisfies Meta<typeof PageStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PageStory />,
};
