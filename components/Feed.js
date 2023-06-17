import { SparklesIcon } from "@heroicons/react/outline";
import Input from "components/Input";
import Post from "components/Post"

function Feed() {
  const posts=[
    {
      id:"1",
      name: "Melissa Hargis",
      username:"syzygy",
      userImg:"https://avatars.githubusercontent.com/u/30645979?v=4",
      img:"https://unsplash.com/photos/xkaO0pO-GMU",
      text:" Wow! So beautiful.",
      timestamp:" 2 hours ago"
    },
    {
      id:"2",
      name: "Matt Hargis",
      username:"Qd22",
      userImg:"https://www.facebook.com/photo/?fbid=10108333305011830&set=a.10100334542111800&__tn__=%3C",
      img:"https://unsplash.com/photos/xkaO0pO-GMUhttps://unsplash.com/photos/27tDiQxr_-E",
      text:" Great shot.",
      timestamp:" 2 days ago"
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-300  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
       </div>
       <Input />
       {posts.map((post)=>(
        <Post key={post.id} post={post}/>
    
       ))}
      </div>
     
  )
}

export default Feed
