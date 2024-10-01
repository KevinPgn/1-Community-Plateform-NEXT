import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTrendingsTags } from "./sidebarRight.action";
import { Suspense } from "react";

async function TrendingTags() {
  const trendingTags = await getTrendingsTags();

  return (
    <ul className="space-y-5">
      {trendingTags.map((tag, index) => (
        <li key={index} className="border-b flex flex-col gap-1 cursor-pointer hover:bg-secondary/30 p-2 rounded-md transition-all duration-300 border-secondary pb-2 last:border-b-0">
          <h3 className="text-md font-semibold">#{tag.name}</h3>
          <p className="text-sm text-muted-foreground">
            {tag._count.posts} posts
          </p>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-xs">
              Trending
            </Badge>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Tendances() {
  return (
    <Card className="w-full bg-secondary/20 backdrop-blur-sm border-gray-500/20">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Top 5 Tendances</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<div>Loading trending tags...</div>}>
          <TrendingTags />
        </Suspense>
      </CardContent>
    </Card>
  );
}