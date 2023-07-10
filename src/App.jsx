import { Header } from "./components/Header"
import { MainSection } from "./components/MainSection"
import {CardsSection} from "./components/CardsSection"


function App() {


  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <MainSection />
        <CardsSection/>
      </main>

    </div>
  )
}

export default App
