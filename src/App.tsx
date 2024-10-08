import './App.css'
import { Advantages } from './components/Advantages'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Methods } from './components/Methods'
import { Section } from './components/Section'
import { Tips } from './components/Tips'

function App() 
{
  return (
    <>
      <Header />
      <Advantages />
      <Methods />
      <Tips />
      <Section />
      <Footer />
    </>
  )
}

export default App
