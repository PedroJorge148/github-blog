import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useDebounce } from "../hooks/use-debounce"

interface SearchFormProps {
  issues_count: number
}

export function SearchForm({ issues_count }: SearchFormProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const debouncedQuery = useDebounce(query, 1000)

  useEffect(() => {
    setSearchParams(params => {
      debouncedQuery ?
        searchParams.set('q', debouncedQuery) : searchParams.delete('q')

      return params
    })
  }, [debouncedQuery])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-basesubtitle font-bold">Publicações</h3>
        <span className="text-sm text-basespan">
          {issues_count} 
          {issues_count === 1 ? ' publicação' : ' publicações'}
        </span>
      </div>
      <form>
        <input
          type="text"
          name="q"
          placeholder="Buscar conteúdo"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 bg-baseinput border border-baseborder rounded-md placeholder:text-baselabel outline-none"
        />
      </form>
    </div>
  )
}