import {
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
  } from "@heroicons/react/outline";

const Input = () => {
  return (
    <div className="flex  border-b border-gray-200 p-3 space-x-3">
        <div className="">
      <img src="https://avatars.githubusercontent.com/u/30645979?v=4" alt="user-image" className="h-11 w-ww rounded-full cursor-pointer hover: brightness-95"/>
      <div className="w-full divide-y divide-gray-200">
      <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
         rows ="2" placeholder="Whats going on?">
         </textarea>
         </div>
         <div className="">
            <div className="flex items-center justify-between">
    
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            </div>
            <button  className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Tweet</button>
         </div>
        </div>
        </div>
    
  )
}

export default Input
