import { Button, Text, View } from 'native-base'
import { useMessageCreate } from '../queries/useMessages'
import { useLastMessagesIndex } from '../queries/useLastMessages'
import Draw from '../components/Draw'

const DrawScreen = () => {
  const { data: lastMessageReceived } = useLastMessagesIndex()

  return (
    <>
      <Draw />
      <View flex={1} alignItems="center" justifyContent="center">
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
