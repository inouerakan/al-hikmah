import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeatureChat from "./components/FeatureChat"
import AiChatHook from "./components/AiChatHook"
import Features from "./components/Features"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="overflow-x-hidden relative bg-[#08140E]">
      <Navbar />
      <Hero />
      <AiChatHook />
      <FeatureChat />
      <Features />
      <Contact />
    </div>
  )
}
