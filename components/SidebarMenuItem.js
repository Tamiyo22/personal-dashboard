import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";


export default function SidebarMenuItems({text,Icon, active}) {
  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
    <Icon className="h-7" />
    <span className={` ${active && "font-bold"} hidden xl:inline`}>{text} </span>
  </div>
  )
}
