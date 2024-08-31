import { formatDistanceToNow } from "date-fns"
import { ptBR } from 'date-fns/locale'
import { formatDate } from "../lib/utils"

interface IssueCardProps {
  id: number
  title: number
  excerpt: string
  created_at: Date
}

export function IssueCard({
  id,
  title,
  excerpt,
  created_at
}: IssueCardProps) {
  return (
    <a href={`/project/${id}`} className="flex flex-col gap-5 p-8 w-full bg-basepost rounded-lg">
      <div className="flex items-start justify-between gap-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="shrink-0 text-sm text-basespan leading-relaxed">
          {formatDate(created_at)}
        </span>
      </div>
      <div className="line-clamp-3">
        {excerpt}
      </div>
    </a>
  )
}