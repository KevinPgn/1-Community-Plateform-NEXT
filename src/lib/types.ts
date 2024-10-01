import {z} from 'zod';

export interface PostProps {
  post: {
    author: {
      id: string;
      name: string;
      image: string;
      username?: string;
    };
    content: string;
    createdAt: string;
    image?: string;
    _count: {
      likes: number;
      comments: number;
      reposts: number;
    };
  };
}