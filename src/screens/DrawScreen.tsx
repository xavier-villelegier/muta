import { useLastMessagesIndex } from '../queries/useLastMessages'
// import Draw from '../components/Draw'
// import { ReceivedDrawing } from '../components/ReceivedDrawing'
import Navbar from '../components/Navbar'
import { View, useTheme } from 'native-base'

const DrawScreen = () => {
  const { colors } = useTheme()
  // const { data: lastMessageReceived } = useLastMessagesIndex()

  return (
    <View style={{ backgroundColor: colors.primary['600'], height: '100%' }}>
      <Navbar />
      {/* <ReceivedDrawing message={lastMessageReceived?.content} /> */}
      {/* <Draw /> */}
    </View>
  )
}

export default DrawScreen
