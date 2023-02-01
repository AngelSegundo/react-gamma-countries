import './CountriesList.css';
import CountryDetails from '../countryDetails/CountryDetails'
import { Link } from 'react-router-dom'

const CountriesList = (props) => {

    const { countriesData, isDetails } = props

    return (
        <div className='container'>
            <div>
                {isDetails && <CountryDetails countriesData={countriesData} />}

                {countriesData.map((country) => {
                    return (
                        <div className='col-5' key={country.alpha3Code}>
                            <div className='list-group'>
                                <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" key={country._id}>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
                                    <h2>{country.name.common} <h6>( {country.alpha3Code} )</h6></h2>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CountriesList