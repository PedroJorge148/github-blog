import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

import { IssueInfo } from "../components/issue-info";
import { api } from "../lib/api";

interface IssueProps {
  title: string
  profile_name: string
  comments_count: number
  html_url: string
  body: string
  created_at: Date
}

export function Issue() {
  const { issueId } = useParams()
  const [issue, setIssue] = useState<IssueProps | null>(null)

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(
        `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueId}`
      )

      const issue: IssueProps = {
        title: data.title,
        body: data.body,
        comments_count: data.comments,
        profile_name: data.user.login,
        html_url: data.html_url,
        created_at: data.created_at
      }

      setIssue(issue)
    }
    fetchData()
  }, [])


  return (
    <section className="mx-auto max-w-[864px] space-y-12">
      <IssueInfo 
        title={issue?.title || ''}
        profile_name={issue?.profile_name || ''}
        comments_count={issue?.comments_count || 0}
        html_url={issue?.html_url || ''}
        created_at={new Date(issue?.created_at || 0)}
      />

      <main className="flex flex-col px-8 prose lg:prose-xl">
        <ReactMarkdown className="prose:">
          {issue?.body}
        </ReactMarkdown>
      </main>
    </section>
  )
}