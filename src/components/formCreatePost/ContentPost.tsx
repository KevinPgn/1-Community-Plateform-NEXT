import { Textarea } from "@/components/ui/textarea"
import {useDebounce} from "use-debounce"
import { useState } from "react"

export const ContentPost = ({content, setContent}: {content: string, setContent: (content: string) => void}) => {
  const [debouncedValue] = useDebounce(content, 500)
  const limitChar = 280
  const [charCount, setCharCount] = useState(0)

  return <>
    <div className="w-full flex flex-col gap-2 mb-5">
      <label htmlFor="content" className="text-sm font-medium">Post Content</label>
      <div className="w-full flex flex-col gap-2">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="content"
          placeholder="What's on your mind?"
          className="w-full min-h-[150px] resize-none"
        />
        <p className="text-sm text-muted-foreground">
          {charCount}/{limitChar}
        </p>
      </div>
    </div>
  </>
}