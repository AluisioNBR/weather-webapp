import {
  formatCurrentWeather,
  formatHourWeather,
  formatDayWeather
} from '../../components/api/dataFormatation'
import { returnGeocodingLocalization, returnWeatherData } from '../../components/api/dataReqs'
import type { Local, CityFound, DataToUse, DataFailed } from '../../components/api/dataReqs'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { FoundDataOfRequest, NotFoundDataOfRequest } from '../../types/submitCity/data.types'

export default async function returnData(req: NextApiRequest, res: NextApiResponse) {
  if(req.query.myApiSecret === process.env.MY_API_SECRET)
    res.status(200).json(await verifyInformations(req.query.city as string))
  else
    res.status(200).json({
      cod: 403,
      msg: "Você não tem autorização para fazer esta requisição!"
    })
}

async function verifyInformations(city: string){
  const data = await verifyCity(city)
  return verifyApiData(data)
}

async function verifyCity(city: string): Promise<DataToUse | DataFailed>{
  const localization = await returnGeocodingLocalization(city)
  try {
    if(localization.found == 'notFound')
      throw new Error(`City not found!`)

    else {
      const local: CityFound = localization as CityFound
      return await returnWeatherData(local.local as Local)
    }
  }
  catch (error) {
    return { cod: 404 }
  }
}

function verifyApiData(data: DataToUse | DataFailed){
  const ifNotFound = (data.cod === 404) || (data.cod === 400)
  return ifNotFound ? notFoundDataOfRequest(): foundDataOfRequest(data as DataToUse)
}

function foundDataOfRequest(data: DataToUse): FoundDataOfRequest{
  return {
    cod: 200,
    city: `${data.localization.city}`,
    state: `${data.localization.state}`,
    current: formatCurrentWeather(data.weather.current),
    hourly: formatHourWeather(data.weather.hourly),
    daily: formatDayWeather(data.weather.daily)
  }
}

function notFoundDataOfRequest(): NotFoundDataOfRequest{
  return {
    cod: 404,
    msg: "Cidade não encontrada! Tente outra cidade!"
  }
}