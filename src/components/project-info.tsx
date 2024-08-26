import { LuExternalLink as ExternalLink } from "react-icons/lu";
import {
  FaChevronLeft as ChevronLeft,
  FaGithub as Github,
  FaCalendarDay  as CalendarDay,
  FaComment  as Comment 
} from "react-icons/fa6";

export function ProjectInfo() {
  return (
    <div className="relative z-10 mx-auto -mt-40 flex flex-col gap-8 rounded-lg bg-baseprofile px-10 py-8 w-full">
      <div className="flex items-center justify-between text-xs">
        <a href="/" className="flex items-center gap-1 text-primary hover:underline leading-none">
          <ChevronLeft />
          VOLTAR
        </a>
        <a href="#" className="flex items-center gap-1 text-primary hover:underline leading-none">
          GITHUB
          <ExternalLink />
        </a>
      </div>
      <h1 className="text-basetitle text-2xl font-bold">JavaScript data types and data structures</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Github className="text-baselabel" />
          <span>pedrojorge148</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDay className="text-baselabel" />
          <span>Há 1 dia</span>
        </div>
        <div className="flex items-center gap-2">
          <Comment className="text-baselabel" />
          <span>5 comentários</span>
        </div>
      </div>
    </div>
  )
}