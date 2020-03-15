import React, {useState, useEffect, useContext, Fragment} from 'react'
import {AddressContext} from '../../context/AddressContext'
import FetchWeatherData from '../../utils/FetchWeatherData'
import {isUndefined, isEmpty} from 'lodash-es'
import WeatherForecastContainer from '../weather-forecast/WeatherForecastContainer'
import LoaderComponent from '../../components/loader/LoaderComponent'
import ErrorComponent from '../../components/error/ErrorComponent'
import * as Sentry from '@sentry/browser'

const WeatherContainer = () => {
  const addressContext = useContext(AddressContext)

  const [weatherForecast, setWeatherForecast] = useState({})
  const [weatherCurrent, setWeatherCurrent] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  // check whether the cityName is valid
  const validCityName = () => {
    if (
      !isEmpty(addressContext.address) &&
      !isUndefined(addressContext.address)
    ) {
      const cityName = addressContext.address.cityName
      return (
        !isEmpty(cityName) &&
        !isUndefined(cityName) &&
        cityName !== 'undefined, undefined, undefined'
      )
    }
    return false
  }

  const setWeatherData = (current, forecast) => {
    if (!isEmpty(current) && !isEmpty(forecast)) {
      setWeatherCurrent(current)
      setWeatherForecast(forecast)
    }
  }

  const fetchWeatherData = async () => {
    setIsLoading(true)
    await FetchWeatherData(addressContext)
      .then(response => {
        const {weatherCurrent, weatherForecast} = response
        // set the weatherCurrent and weatherForecast only when the data is non-empty
        // this way, the old fetched data can be preserved when api call fail or limit exceed
        setWeatherData(weatherCurrent, weatherForecast)
      })
      .catch(err => {
        Sentry.captureException(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchWeatherData()
    const timer = setInterval(() => {
      fetchWeatherData()
    }, 3600000)

    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line
  }, [addressContext])

  return (
    <Fragment>
      {!isUndefined(weatherCurrent) && !isEmpty(weatherCurrent) ? (
        <WeatherForecastContainer
          weatherCurrent={weatherCurrent}
          weatherForecast={weatherForecast}
          address={addressContext.address}
          latlong={addressContext.latlong}
          urbanArea={addressContext.urbanArea}
        />
      ) : (
        <Fragment>
          {isLoading ? (
            <LoaderComponent
              loaderText={`Fetching weather forecast ${
                validCityName() ? `for ${addressContext.address.cityName}` : ''
              } 😎`}
            />
          ) : (
            <div>
              {validCityName() ? (
                // show error component only when addressContext cityName is valid
                // since by default on component load, addressContext address is empty
                // this extra check will hide error and show only when api call fetch fail for fetching weatherData
                <div className='flex justify-center'>
                  <div className='sm:w-full lg:w-2/3 xl:w-1/2'>
                    <ErrorComponent
                      errorMessage={`Something went wrong. Failed to fetch weather forecast ${
                        validCityName()
                          ? `for ${addressContext.address.cityName}`
                          : ''
                      }! 😢`}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export default WeatherContainer