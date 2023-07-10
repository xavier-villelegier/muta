import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useLastMessagesIndex = () =>
  useQuery(
    ['last_messages'],
    async () => {
      const { data } = await axios.get('/last_messages')
      return data
    },
    { refetchInterval: 1000 }
  )
