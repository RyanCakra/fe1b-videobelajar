import { Home, Register, Login, Product } from './components/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="font-Lato max-w-screen-xl sm:max-w-screen-2xl md:max-w-screen-3xl lg:max-w-screen-4xl xl:max-w-screen-5xl mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
