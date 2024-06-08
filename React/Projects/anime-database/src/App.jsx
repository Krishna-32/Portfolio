import "./App.css"
import Footer from "./modules/footer/Footer"
import Navbar from "./modules/navbar/Navbar"
import Searchbar from "./modules/searchbar/Searchbar"
import Trending from "./modules/trending/Trending"
import Logic from "./logic/Logic"
import Content from "./modules/content/Content"

function App() {

  return (
    <>

<Logic renderValue = {
                (search, handleSearchChange, error, json, topAnime) => 
                <>
                    <div className="container">
                        <nav>
                          <Navbar />
                        </nav>

                        <div className="main">
                          
                          <div className="search">
                            <Searchbar search={search} handleSearchChange={handleSearchChange}/>
                          </div>


                          {error ? (

                            <strong>Error: {error}</strong>

                          ) : 

                          search ? (

                            <div className="sub-content">
                              <Content json={json}/>
                            </div>

                          ) : 

                          (
                            <div className="content">

                              <Trending title="TRENDING NOW" topAnime={topAnime} />

                              {/* <Trending title="ON GOING" />

                              <Trending title="POPULAR MANGA" />

                              <Trending title="TOP CHARACTER" /> */}


                          </div>

                          )}
                          
                        </div>

                        <div className="footer">
                            <Footer/>
                          </div>
                    </div>
                </>
            }/>
      
    </>
  )
}

export default App
