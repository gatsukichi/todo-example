// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const add: ComponentStory<typeof Button> = () => <Button>ADD</Button>;
export const reload: ComponentStory<typeof Button> = () => (
  <Button>RELOAD</Button>
);

add.args = {
  children: "ADD",
};

reload.args = {
  children: "RELOAD",
};
