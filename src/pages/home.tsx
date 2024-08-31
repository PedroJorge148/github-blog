import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { api } from "../lib/api";
import { normalizeString } from "../lib/utils";

import { Profile } from "../components/profile";
import { IssueCard } from "../components/issue-card";
import { SearchForm } from "../components/search-form";

interface IssueItem {
  id: number
  title: number
  excerpt: string
  html_url: string
  created_at: Date
}

interface IssuesProps {
  total_items: number
  items: IssueItem[]
}

export function Home() {
  const [issues, setIssues] = useState<IssuesProps | null>(null)
  const [searchParams] = useSearchParams()

  const filter = normalizeString(searchParams.get('q') || '')

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('https://api.github.com/search/issues', {
        params: {
          q: `${filter} repo:rocketseat-education/reactjs-github-blog-challenge`
        }
      })
      const formattedIssues: IssuesProps = {
        total_items: data.total_count,
        items: data.items.map((item: any) => ({
          id: item.number,
          title: item.title,
          excerpt: item.body && item.body.substring(0, 150),
          html_url: item.html_url,
          created_at: new Date(item.created_at),
        })),
      };

      setIssues(formattedIssues)
    }
    fetchData()
  }, [filter])

  return (
    <section className="mx-auto max-w-[864px] space-y-12">
      <Profile />

      <SearchForm issues_count={issues?.total_items || 0} />

      <main className="grid grid-cols-2 gap-4">
        {issues?.items.map((item) => (
          <IssueCard
            key={item.id}
            id={item.id}
            title={item.title}
            excerpt={item.excerpt}
            created_at={item.created_at}
          />
        ))}
      </main>
    </section>
  )
}