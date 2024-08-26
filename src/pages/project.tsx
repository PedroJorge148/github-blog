import { ProjectInfo } from "../components/project-info";

export function Project() {
  return (
    <section className="mx-auto max-w-[864px] space-y-12">
      <ProjectInfo />

      <main className="flex flex-col px-8">
        <div className="whitespace-pre-line">
          <b>Programming languages all have built-in data structures, but these often differ from one language to another.</b> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          {'\n\n'}
          <a href="#" className="flex items-center gap-1 text-primary hover:underline leading-none">
            Dynamic typing
          </a>
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </div>
        <div className="mt-6 bg-basepost p-4 rounded-sm whitespace-pre-line">
          let foo = 42;   // foo is now a number{'\n'}
          foo = ‘bar’;    // foo is now a string{'\n'}
          foo = true;     // foo is now a boolean{'\n'}
        </div>
      </main>
    </section>
  )
}