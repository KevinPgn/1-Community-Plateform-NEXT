export const SelectVisibility = ({visibility, setVisibility}: {visibility: boolean, setVisibility: (visibility: boolean) => void}) => {
  return <div className="w-full flex flex-col gap-2">
  <label htmlFor="visibility" className="text-sm font-medium">Post Visibility</label>
  <select 
      id="visibility" 
      name="visibility" 
      className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      value={visibility ? "public" : "private"}
      onChange={(e) => setVisibility(e.target.value === "public")}
  >
      <option value="public">Public</option>
      <option value="private">Private</option>
  </select>
</div>
}