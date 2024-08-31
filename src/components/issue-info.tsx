import { LuExternalLink as ExternalLink } from "react-icons/lu";
import {
  FaChevronLeft as ChevronLeft,
  FaGithub as Github,
  FaCalendarDay  as CalendarDay,
  FaComment  as Comment 
} from "react-icons/fa6";
import { formatDate } from "../lib/utils";

interface IssueInfoProps {
  title: string
  html_url: string
  profile_name: string
  comments_count: number
  created_at: Date
}

export function IssueInfo({
  title, 
  html_url, 
  profile_name,
  comments_count,
  created_at
}: IssueInfoProps) {
  return (
    <div className="relative z-10 mx-auto -mt-40 flex flex-col gap-8 rounded-lg bg-baseprofile px-10 py-8 w-full">
      <div className="flex items-center justify-between text-xs">
        <a href="/" className="flex items-center gap-1 text-primary hover:underline leading-none">
          <ChevronLeft />
          VOLTAR
        </a>
        <a href={html_url} className="flex items-center gap-1 text-primary hover:underline leading-none">
          GITHUB
          <ExternalLink />
        </a>
      </div>
      <h1 className="text-basetitle text-2xl font-bold">
        {title}
      </h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Github className="text-baselabel" />
          <span>{profile_name}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDay className="text-baselabel" />
          <span>{formatDate(created_at)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Comment className="text-baselabel" />
          <span>{comments_count} comentários</span>
        </div>
      </div>
    </div>
  )
}