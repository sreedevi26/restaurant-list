import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllRestuarant from './Components/AllRestuarant';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewRestuarant from './Components/ViewRestuarant';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path='/' element={<AllRestuarant />}/>
          <Route path='/View-Restuarant/:id' element={<ViewRestuarant/>}/>
        </Routes>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
