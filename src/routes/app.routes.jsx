import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PageLayout } from "../pages/PageLayout"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/menu" element={<Header />} />
      <Route path="/rodape" element={<Footer />} />
    </Routes>
  )
}