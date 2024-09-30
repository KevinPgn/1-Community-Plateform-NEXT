import { Textarea } from "@/components/ui/textarea"
import {useDebounce} from "use-debounce"
export const ContentPost = ({content, setContent}: {content: string, setContent: (content: string) => void}) => {
  const [debouncedValue] = useDebounce(content, 500)
  return <>
    <div className="w-full flex flex-col gap-2 mb-5">
      <label htmlFor="content" className="text-sm font-medium">Post Content</label>
      <Textarea
        id="content"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full min-h-[150px] resize-none"
      />
    </div>
  </>
}