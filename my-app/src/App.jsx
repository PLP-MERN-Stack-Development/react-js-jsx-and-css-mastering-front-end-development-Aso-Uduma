import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Tasks from './pages/tasks'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
