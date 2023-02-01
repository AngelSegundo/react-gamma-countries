import '../countryDetails/CountryDetails.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = (props) => {

    const { countriesData } = props

    const [foundCountry, setFoundCountry] = useState(null)
    const { countryId } = useParams()

    useEffect(() => {
        const country = countriesData.find((country) => {
            return country.alpha3Code === countryId
        })

        if (country) {
            setFoundCountry(country)
        }

    }, [countryId, countriesData])

    return (
        <div>

            {!foundCountry &&
                <h3>Country Not Found
                    <div class="semicircle">
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </h3>
            }

            {foundCountry &&
                <div className="col-7">
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}></img>
                    <h1>{foundCountry.name.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{foundCountry.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {foundCountry.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    {foundCountry.borders.map((borderCountry) => {
                                        const countryBorder = countriesData.find((foundBorder) => {
                                            return foundBorder.alpha3Code === borderCountry
                                        })
                                        return (
                                            <Link to={`/${borderCountry}`}><div>{countryBorder.name.common}</div></Link>
                                        )
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )

}

export default CountryDetails