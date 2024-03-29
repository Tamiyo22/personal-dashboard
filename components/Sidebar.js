import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
    HashtagIcon,
    InboxIcon,
    UserIcon,
    SunIcon
  } from "@heroicons/react/outline";
  import Image from "next/image";
  

export default function Sidebar() {
  return (
    <div className=" hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
    {/* Twitter Logo */}
    <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
     
    </div>

    {/* Menu */}
 
    <div className="mt-4 mb-2.5 xl:items-start">
      <SidebarMenuItem text="Home" Icon={HomeIcon} active />
      <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
      
          <SidebarMenuItem text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} />
          <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} />
          <SidebarMenuItem text="Weather" Icon={SunIcon} />
          <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
       
        </div>

        {/*Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Tweet
          </button>

 {/* Mini profile */}
 <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
      
        {/* Profile photo goes here */}
        <Image width="50" height="50" src = "https://avatars.githubusercontent.com/u/30645979?v=4"></Image>
        <h4 className="font-bold">
            Melissa
        </h4>
        <p>@Melissa</p>

      <DotsHorizontalIcon className="h-5"/>
        </div>

        


    </div>     

        
  )
}
