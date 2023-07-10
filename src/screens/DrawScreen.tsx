import { Button, Text, View } from 'native-base'
import { useMessageCreate } from '../queries/useMessages'
import { useLastMessagesIndex } from '../queries/useLastMessages'
import Draw from '../components/Draw'

const DrawScreen = () => {
  const { mutateAsync: sendMessage } = useMessageCreate()
  const { data: lastMessageReceived } = useLastMessagesIndex()
  const handleSend = async () => {
    await sendMessage({
      coordinates: [
        [0, 0],
        [0, 10],
        [10, 10],
        [10, 0],
      ],
    })
    console.log('Message sent')
  }

  return (
    <>
      <Draw />
      <View flex={1} alignItems="center" justifyContent="center">
        <Button onPress={handleSend}>Send</Button>
        <Text>Last message received</Text>
        {lastMessageReceived && (
          <Text>
            {lastMessageReceived.id} - {lastMessageReceived.content}
          </Text>
        )}
      </View>
    </>
  )
}

export default DrawScreen
