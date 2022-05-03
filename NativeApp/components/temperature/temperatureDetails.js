import { View, StyleSheet } from 'react-native';
import { AdditionalInf } from './additionalInf'
import { colors } from '../colors';

const styles = StyleSheet.create({
  temperatureDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containterDetails: {
    backgroundColor: colors.black2,
    borderRadius: 100,
    padding: 4
  }
})

function TemperatureDetails({
  humidity,
  uvi,
  rain,
  snow
}) {
  if(rain.rainy === "rain")
    return(
      <View style={[{ alignItems: 'center' }, styles.containterDetails]}>
        <View style={styles.temperatureDetails}>
          <AdditionalInf value={`${humidity}%`}>
            Humidade
          </AdditionalInf>

          <AdditionalInf value={`${uvi}%`}>
            Índice UV
          </AdditionalInf>
        </View>

        <View style={{ alignItems: 'center' }}>
          <AdditionalInf value={`${rain.rain}mm`}>Chuva</AdditionalInf>
        </View>
      </View>
    )
  else if(snow.snowed === "snow")
    return(
      <View style={[{ alignItems: 'center' }, styles.containterDetails]}>
        <View style={styles.temperatureDetails}>
          <AdditionalInf value={`${humidity}%`}>
            Humidade
          </AdditionalInf>

          <AdditionalInf value={`${uvi}%`}>
            Índice UV
          </AdditionalInf>
        </View>

        <View style={{ alignItems: 'center' }}>
          <AdditionalInf value={`${snow.snow}mm`}>Neve: </AdditionalInf>
        </View>
      </View>
    )
  else
    return (
      <View style={[styles.temperatureDetails, styles.containterDetails]}>
        <AdditionalInf value={`${humidity}%`}>
          Humidade
        </AdditionalInf>

        <AdditionalInf value={`${uvi}%`}>
          Índice UV
        </AdditionalInf>
      </View>
    );
}

export { TemperatureDetails }