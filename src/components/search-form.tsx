export function SearchForm() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-basesubtitle font-bold">Publicações</h3>
        <span className="text-sm text-basespan">6 publicações</span>
      </div>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Buscar conteúdo"
          className="w-full px-4 py-3 bg-baseinput border border-baseborder rounded-md placeholder:text-baselabel outline-none"
        />
      </form>
    </div>
  )
}