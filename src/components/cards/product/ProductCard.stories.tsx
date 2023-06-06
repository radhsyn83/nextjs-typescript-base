import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';
import { mockProductCardProps } from './ProductCard.mocks';

const meta: Meta<typeof ProductCard> = {
  title: 'Card/Product',
  component: ProductCard,
  //   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  //   tags: ['autodocs'],
  //   parameters: {
  //     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'fullscreen',
  //   },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const LoggedIn: Story = {
  args: {
    ...mockProductCardProps.base,
  },
};

export const LoggedOut: Story = {};
