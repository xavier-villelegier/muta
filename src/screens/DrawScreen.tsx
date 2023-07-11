import { useLastMessagesIndex } from '../queries/useLastMessages'

import Navbar from '../components/Navbar'
import { ScrollView, View, useTheme } from 'native-base'
import Draw from '../components/Draw'
import { ReceivedDrawing } from '../components/ReceivedDrawing'
import Chat from '../components/Chat'
import { useMessagesIndex } from '../queries/useMessages'
import Message from '../components/Message'
// import { ReceivedCoordinates } from '../components/ReceivedCoordinates'

const DrawScreen = () => {
  const { colors } = useTheme()
  const { data: messages, isSuccess } = useMessagesIndex()
  // const { data: lastMessageReceived } = useLastMessagesIndex()

  return (
    <View style={{ backgroundColor: colors.primary['600'], height: '100%' }}>
      <Navbar />
      {isSuccess && <Chat messages={messages} />}
      {/* {isSuccess && (
        <ScrollView>
          {messages.map((message) => (
            <View p={20}>
              <Message message={{ image: message.content }} />
            </View>
          ))}
        </ScrollView>
      )} */}
      {/* <Draw />  */}
      {/* <ReceivedDrawing content={lastMessageReceived?.content} /> */}
      {/* <ReceivedCoordinates message={lastMessageReceived} /> */}
    </View>
  )
}

export default DrawScreen
