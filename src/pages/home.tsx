import { Card } from "../components/card";
import { Profile } from "../components/profile";
import { SearchForm } from "../components/search-form";

export function Home() {
  return (
    <section className="mx-auto max-w-[864px] space-y-12">
      <Profile />

      <SearchForm />
      <main className="grid grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map(() => (
          <Card />
        ))}
      </main>
    </section>
  )
}