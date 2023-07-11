import { HStack, Text, useTheme } from 'native-base'
import { Send } from 'react-native-gifted-chat'
import Ionicons from '@expo/vector-icons/Ionicons'

const SendButton = (props: any) => {
  const { colors } = useTheme()

  return (
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 22,
      }}>
      <HStack space={2} alignItems="center">
        <Ionicons name="paper-plane" size={20} color={colors.primary['900']} />
        <Text color={colors.primary['900']}>Envoyer</Text>
      </HStack>
    </Send>
  )
}

export default SendButton
