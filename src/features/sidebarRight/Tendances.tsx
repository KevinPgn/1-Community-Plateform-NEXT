import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TrendItem {
  tag: string;
  count: number;
  category: string;
}

// Simulons des données de tendances
// Dans une application réelle, ces données viendraient probablement d'une API
const trendingData: TrendItem[] = [
  { tag: "NextJS14", count: 52000, category: "Technologie" },
  { tag: "AIRevolution", count: 123000, category: "Tech" },
  { tag: "ClimateAction", count: 89000, category: "Environnement" },
  { tag: "CryptoNews", count: 34000, category: "Finance" },
];

function formatCount(count: number): string {
  return count > 1000 ? `${(count / 1000).toFixed(1)}K` : count.toString();
}

export function Tendances() {
  return (
    <Card className="w-full bg-secondary/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Top 10 Tendances</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {trendingData.map((item, index) => (
            <li key={index} className="border-b cursor-pointer hover:bg-secondary/30 p-2 rounded-md transition-all duration-300 border-secondary pb-2 last:border-b-0">
              <p className="text-sm text-muted-foreground">{item.category}</p>
              <h3 className="text-lg font-semibold">#{item.tag}</h3>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs">
                  {formatCount(item.count)} posts
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}