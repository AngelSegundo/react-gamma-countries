import './App.css'
import Navbar from './Components/navbar/Navbar'
import CountriesList from './Components/countriesList/CountriesList'
import CountryDetails from './Components/countryDetails/CountryDetails'
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'


const countryApiURL = 'https://ih-countries-api.herokuapp.com/countries'

function App() {

  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    axios
      .get(countryApiURL)
      .then((response) => {
        setCountries(response.data.sort((a, b) => a.name.common > b.name.common ? 1 : -1, 0))
        setFetching(false)
      })
      .catch(err => console.error(err))
  }, [])

    return (
    <div className="App">
      <Navbar />

      {fetching &&
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
          <div class="wheel"></div>
          <div class="hamster">
            <div class="hamster__body">
              <div class="hamster__head">
                <div class="hamster__ear"></div>
                <div class="hamster__eye"></div>
                <div class="hamster__nose"></div>
              </div>
              <div class="hamster__limb hamster__limb--fr"></div>
              <div class="hamster__limb hamster__limb--fl"></div>
              <div class="hamster__limb hamster__limb--br"></div>
              <div class="hamster__limb hamster__limb--bl"></div>
              <div class="hamster__tail"></div>
            </div>
          </div>
          <div class="spoke"></div>
        </div>
      }

      {<Routes>
        <Route path="/" element={<CountriesList countriesData={countries} />} />
        <Route path="/:countryId" element={<CountryDetails countriesData={countries} />} />
      </Routes>
      }

    </div>
  )
}

export default App;
