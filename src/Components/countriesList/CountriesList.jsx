import './CountriesList.css';
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const countryApiURL = 'https://ih-countries-api.herokuapp.com/countries'

const CountriesList = () => {
    const [countries, setCountries] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        axios
            .get(countryApiURL)
            .then((response) => {
                setCountries(response.data)
                setFetching(false)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
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

            {countries.map((country) => {
                return (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5'>
                                <div className='list-group'>
                                    <Link to={country.alpha3Code}>
                                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
                                        <p>{country.alpha3Code}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}

export default CountriesList