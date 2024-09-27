import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SuggestedUser {
  id: string;
  username: string;
  handle: string;
  color: string;
}

const suggestedUsers: SuggestedUser[] = [
  {
    id: '1',
    username: 'Alex Doe',
    handle: '@alexcodes',
    color: '#FF6B6B',
  },
  {
    id: '2',
    username: 'Sam Smith',
    handle: '@samdev',
    color: '#4ECDC4',
  },
  {
    id: '3',
    username: 'Jordan Lee',
    handle: '@jordantech',
    color: '#45B7D1',
  },
];

function UserSuggestion({ user }: { user: SuggestedUser }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: user.color }}
        >
          {user.username[0]}
        </div>
        <div>
          <p className="font-semibold text-sm">{user.username}</p>
          <p className="text-gray-500 text-xs">{user.handle}</p>
        </div>
      </div>
      <Button variant="outline" size="sm" className="rounded-full px-4 text-black">
        Suivre
      </Button>
    </div>
  );
}

export function SuggestionsUsers() {
  return (
    <Card className="text-white bg-[#000000] border-white/10">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Suggestions</CardTitle>
      </CardHeader>
      <CardContent>
        {suggestedUsers.map((user) => (
          <UserSuggestion key={user.id} user={user} />
        ))}
        <Button variant="link" className="text-blue-400 hover:text-blue-300 mt-2">
          Voir plus
        </Button>
      </CardContent>
    </Card>
  );
}