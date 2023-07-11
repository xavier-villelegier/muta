import React, { useState, useCallback, useEffect } from 'react'
import { Image } from 'react-native'
import { GiftedChat, Send } from 'react-native-gifted-chat'
import CustomInputToolBar from './CustomInputToolBar'

IMAGE_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&q=32g.com/140/140/any'
const renderInputToolbar = (props) => {
  return <CustomInputToolBar {...props} />
}

const Chat = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello edeveloper',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: IMAGE_URL,
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      renderInputToolbar={renderInputToolbar}
      user={{
        _id: 1,
        name: 'Moi',
        avatar: 'https://placeimg.com/140/140/any',
      }}
    />
  )
}

export default Chat
