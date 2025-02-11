import Header from "./components/Header"
import Hero from "./components/Hero"
import WaitlistForm from "./components/WaitlistForm"
import Background from "./components/Background"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Background />
      <div className="relative z-10 flex-grow flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <Hero />
          <WaitlistForm />
        </div>
      </div>
    </main>
  )
}

