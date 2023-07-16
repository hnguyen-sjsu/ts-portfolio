import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { OverlayIcons } from './components/OverlayIcons'
import Projects from './components/Projects'
import { Skills } from './components/Skills'

const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>
            <div className='app'>
                <Navbar />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </main>
    )
}

export default App
