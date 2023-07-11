import React, { useState, useRef } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import CustomInputToolBar from './CustomInputToolBar'
import SendButton from './chat/SendButton'
import Message from './Message'
import Draw from './Draw'
import { useMessageCreate } from '../queries/useMessages'

IMAGE_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&q=32g.com/140/140/any'

const Chat = ({ messages }) => {
  const [paths, setPaths] = useState([])
  const pathCoordinates = useRef([])
  const { mutateAsync: sendMessage } = useMessageCreate()

  const formattedMessages = messages.map(({ id, content, user_type, date }) => ({
    _id: id,
    image: content,
    user: {
      _id: user_type === 'device' ? 1 : 2,
      name: user_type === 'device' ? 'Moi' : 'Lui',
      avatar: IMAGE_URL,
    },
    createdAt: date,
  }))

  const onSend = async () => {
    await sendMessage({
      coordinates: pathCoordinates.current,
    })
    setPaths([])
  }

  return (
    <GiftedChat
      messages={formattedMessages}
      renderMessageImage={({ currentMessage }) => <Message message={currentMessage} />}
      renderInputToolbar={(props) => <CustomInputToolBar {...props} />}
      renderComposer={(props) => (
        <Draw paths={paths} setPaths={setPaths} pathCoordinates={pathCoordinates} />
      )}
      alwaysShowSend={true}
      renderSend={() => <SendButton onSend={onSend} />}
    />
  )
}

export default Chat
