import "./App.css"
import Footer from "./modules/footer/Footer"
import Navbar from "./modules/navbar/Navbar"
import Searchbar from "./modules/searchbar/Searchbar"
import Trending from "./modules/trending/Trending"

function App() {

  return (
    <>
      <div className="container">
          <nav>
            <Navbar />
          </nav>

          <div className="main">
            
            <div className="search">
              <Searchbar/>
            </div>

            <div className="content">
              <Trending title="TRENDING NOW"/>

              <Trending title="ALL TIME POPULAR"/>

              <Trending title="RANDOM ANIME"/>

              <Trending title="MANGA"/>
            </div>

          </div>

          <div className="footer">
              <Footer/>
            </div>
      </div>
    </>
  )
}

export default App
