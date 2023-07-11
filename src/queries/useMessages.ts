import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Point } from '../components/Draw'

export const useMessagesIndex = () =>
  useQuery(['messages'], async () => {
    const { data } = await axios.get('/messages')
    return data
  })

export const useMessageCreate = () =>
  useMutation(
    ['messages'],
    async ({ coordinates }: { coordinates: Point[] }) =>
      await axios.post('/messages', {
        content: {
          coordinates,
        },
        is_mobile: true,
      })
  )
