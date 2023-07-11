import React, { useState, useCallback, useEffect } from 'react'
import { Image } from 'react-native'
import { GiftedChat, Send } from 'react-native-gifted-chat'
import CustomInputToolBar from './CustomInputToolBar'
import SendButton from './chat/SendButton'
import Message from './Message'

IMAGE_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&q=32g.com/140/140/any'
const renderInputToolbar = (props) => {
  return <CustomInputToolBar {...props} />
}

const Chat = ({ messages }) => {
  const formattedMessages = messages.map(({ id, content, user_type, date }) => ({
    _id: id,
    text: content,
    user: {
      _id: user_type === 'device' ? 1 : 2,
      name: user_type === 'device' ? 'Moi' : 'Lui',
      avatar: IMAGE_URL,
    },
    createdAt: date,
  }))

  // const onSend = useCallback((messages) => {
  //   setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
  // }, [])

  return (
    <GiftedChat
      messages={formattedMessages}
      renderMessageText={({ currentMessage }) => <Message message={currentMessage} />}
      // onSend={(messages) => onSend(messages)}
      renderInputToolbar={renderInputToolbar}
      user={{
        _id: 1,
        name: 'Moi',
        avatar: 'https://placeimg.com/140/140/any',
      }}
      alwaysShowSend={true}
      renderSend={SendButton}
    />
  )
}

export default Chat
