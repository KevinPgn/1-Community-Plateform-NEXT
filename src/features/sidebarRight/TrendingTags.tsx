import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import formatPostCount from '@/components/utils/FormatPostCount';

interface TrendingTag {
  id: string;
  rank: number;
  category?: string;
  tag: string;
  postCount: number;
}

const trendingTags: TrendingTag[] = [
  { id: '1', rank: 1, category: 'The Legend of Zelda', tag: '#EchoesOfWisdom', postCount: 33600 },
  { id: '2', rank: 2, tag: 'OQTF', postCount: 88500 },
  { id: '3', rank: 3, tag: 'Philippine', postCount: 168000 },
  { id: '4', rank: 4, category: 'Gaming', tag: '#IPlayYuGiOhTCG', postCount: 1023 },
];

function TrendingTagItem({ tag }: { tag: TrendingTag }) {
  return (
    <div className="py-2 hover:bg-gray-800 cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          {tag.category && (
            <p className="text-xs text-gray-500">{tag.rank} · {tag.category} · Trending</p>
          )}
          {!tag.category && (
            <p className="text-xs text-gray-500">{tag.rank} · Trending</p>
          )}
          <p className="font-bold text-sm">{tag.tag}</p>
          <p className="text-xs text-gray-500">{formatPostCount(tag.postCount)} posts</p>
        </div>
        <button className="text-gray-500 hover:text-blue-400">···</button>
      </div>
    </div>
  );
}

export function TrendingTags() {
  return (
    <Card className="bg-[#000000] text-white border-white/10">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Trending Tags</CardTitle>
      </CardHeader>
      <CardContent>
        {trendingTags.map((tag) => (
          <TrendingTagItem key={tag.id} tag={tag} />
        ))}
      </CardContent>
    </Card>
  );
}