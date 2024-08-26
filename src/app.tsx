import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="space-y-16 mb-10">
      <Header />
      <Outlet />
    </div>
  )
}

