// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import CreateMovie from "./pages/movie/Create"
import TopRatedMovie from "./pages/movie/TopRated"
import PopularMovie from "./pages/movie/Popular";
import Layout from "./Layout/index"
import NowPlayingMovie from "./pages/movie/NowPlaying";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/create" element={<CreateMovie /> } />
        <Route path="/movie/popular" element={<PopularMovie />} />
        <Route path="/movie/now" element={<NowPlayingMovie />} />
        <Route path="/movie/top" element={<TopRatedMovie />} />
      </Routes>
      </Layout>
    </>
    
  );
}

export default App;