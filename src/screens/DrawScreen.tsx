import { Button, View } from 'native-base'
import DrawCanvas from '../components/DrawCanvas'
import { useMessageCreate } from '../queries/useMessages'

const DrawScreen = () => {
  const { mutateAsync: sendMessage } = useMessageCreate()
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
    <View flex={1} alignItems="center" justifyContent="center">
      <DrawCanvas />
      <Button onPress={handleSend}>Send</Button>
    </View>
  )
}

export default DrawScreen
