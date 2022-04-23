import { Pressable, View, Text, Image } from 'react-native'
import { useState } from 'react'
import { useFonts } from 'expo-font';
import { DailyModal } from './dailyModal'

function DailyTemperature({ day, date }) {
	const [loaded] = useFonts({
	    'Poppins': require('../../assets/Poppins/Poppins-Regular.ttf'),
	})
	const [modalVisible, setModalVisible] = useState(false)
	const [backgroundColor, setBackgroundColor] = useState('#555')
	return (
		<View>
			<DailyModal
				data={day}
				date={date}
				visible={modalVisible}
				setVisible={setModalVisible}
			/>

			<Pressable
				onPress={() => setModalVisible(true)}
				onPressIn={() => setBackgroundColor('#777')}
				onPressOut={() => setBackgroundColor('#555')}
			>
				<View style={{
					backgroundColor: backgroundColor,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					
					marginBottom: 4,
					marginRight: 8,
					marginLeft: 8,
					padding: 12,
					borderRadius: 10
				}}>
					<Text style={{ color: '#fdfdfd', fontSize: 20, fontFamily: 'Poppins' }}>
						{date}
					</Text>

					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: day.icon }}
							style={{ width: 32, height: 32 }}
						/>

						<Text style={{ color: '#fdfdfd', fontSize: 20, fontFamily: 'Poppins' }}>
							{day.temp.min}°C - {day.temp.max}°C
						</Text>
					</View>
				</View>
			</Pressable>
		</View>
	)
}

export { DailyTemperature }