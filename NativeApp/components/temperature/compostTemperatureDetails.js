import { TemperatureDetails } from './temperatureDetails'
import { View, Text } from 'react-native'
import { useFonts } from 'expo-font';
import { colors } from '../colors';

function CompostTemperatureDetails({ data }){
	const [loaded] = useFonts({
    'Poppins': require('../../assets/Poppins/Poppins-Regular.ttf'),
  })
	return(
		<View>
			<TemperatureDetails
				humidity={data.humidity}
        uvi={data.uvi}
        rain={data.rain}
        snow={data.snow}
			/>
			
			<View style={{ alignItems: 'center' }}>
        <Text style={{
          fontSize: 14,
          color: colors.gray1,
          margin: 8,
      		fontFamily: 'Poppins'
        }}>
          Precipitação: {`${data.pop}%`}
        </Text>
			</View>
		</View>
	)
}

export { CompostTemperatureDetails }