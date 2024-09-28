import {z} from 'zod';

export interface PostProps {
    post: {
      id: string;
      author: {
        id: string;
        name: string;
        image: string;
        pseudo?: string;
      };
      createdAt: string;
      content: string;
      image?: string;
      tags: string[];
      _count: {
        comments: number;
        reposts: number;
        likes: number;
      };
      isLiked: boolean;
      isReposted: boolean;
      isBookmarked: boolean;
    }
  }