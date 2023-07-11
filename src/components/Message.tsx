import { ReceivedDrawing } from './ReceivedDrawing'
import { View } from 'native-base'

const Message = ({ message }: any) => {
  return (
    <View width={300} height={300}>
      <ReceivedDrawing content={message.image} />
    </View>
  )
}

export default Message
