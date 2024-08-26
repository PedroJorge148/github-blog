export function Card() {
  return (
    <a href="/project/test" className="flex flex-col gap-5 p-8 w-full bg-basepost rounded-lg">
      {/* <a href="/project/test"> */}
        <div className="flex items-start justify-between gap-1">
          <h2 className="text-xl font-bold">JavaScript data types and data structures</h2>
          <span className="shrink-0 text-sm text-basespan leading-relaxed">Há 1 dia</span>
        </div>
        <div>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...
        </div>
      {/* </a> */}
    </a>
  )
}