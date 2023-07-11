import React, { useState, useCallback, useEffect } from 'react'
import { Avatar } from 'native-base'
import { Image } from 'react-native'
import { GiftedChat, MessageContainer, InputToolbar, Send, Actions } from 'react-native-gifted-chat'
import DrawInput from '../components/DrawInput'

IMAGE_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&q=32g.com/140/140/any'
const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: '#222B45',
      paddingTop: 6,
    }}
    primaryStyle={{ alignItems: 'center' }}
  />
)

const renderSend = (props) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    }}>
    <Image
      style={{ width: 32, height: 32 }}
      source={{
        uri: IMAGE_URL,
      }}
    />
  </Send>
)

const renderActions = (props) => (
  <Actions
    {...props}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 4,
      marginRight: 4,
      marginBottom: 0,
    }}
    icon={() => (
      <Image
        style={{ width: 32, height: 32 }}
        source={{
          uri: IMAGE_URL,
        }}
      />
    )}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library')
      },
      Cancel: () => {
        console.log('Cancel')
      },
    }}
    optionTintColor="#222B45"
  />
)

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
      renderActions={renderActions}
      renderSend={renderSend}
      user={{
        _id: 1,
        name: 'Moi',
        avatar: 'https://placeimg.com/140/140/any',
      }}
    />
  )
}

export default Chat
