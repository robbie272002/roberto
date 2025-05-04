import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Team from './components/Team.jsx'
import Collab from './components/Collab.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {


  return (
    <> 
    <main class="main" id="top" scroll-to-top="scroll-to-top">
      <div class="content">
       
           <Nav/>

       <div data-bs-target="#navbar" data-bs-spy="scroll" tabindex="0">
          <Hero/>
          <Team/>
          <Collab/>
          <Footer/>
      </div>

     </div>
    </main>

    </>
  )
}

export default App
