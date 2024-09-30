import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import {cn} from "@/lib/utils"

export const ContentPost = ({content, setContent}: {content: string, setContent: (content: string) => void}) => {
  const limitChar = 280
  const [charCount, setCharCount] = useState(0)

  return <>
    <div className="w-full flex flex-col gap-2 mb-5">
      <label htmlFor="content" className="text-sm font-medium">Post Content</label>
      <div className="w-full flex flex-col gap-2">
        <Textarea
          value={content}
          onChange={(e) => {
            const newContent = e.target.value.slice(0, limitChar);
            setContent(newContent);
            setCharCount(newContent.length);
          }}
          id="content"
          placeholder="What's on your mind?"
          className={cn("w-full min-h-[150px] resize-none", {
            "border-red-500 text-red-500": charCount === limitChar,
          })}
          maxLength={limitChar}
        />
        <p className="text-sm text-muted-foreground">
          {charCount}/{limitChar}
        </p>
      </div>
    </div>
  </>
}