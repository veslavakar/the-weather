import MainPage from '../layouts/main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../layouts/login'
import Header from './header'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<MainPage />}></Route>
          <Route path="/fav" element={<MainPage />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
