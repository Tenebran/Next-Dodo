import { Story, StoryItem } from '@prisma/client';
import { instance } from './instance';

export type IStory = Story & {
  items: StoryItem[];
};

export const getAll = async () => {
  const { data } = await instance.get<IStory[]>('/stories');
  return data;
};
