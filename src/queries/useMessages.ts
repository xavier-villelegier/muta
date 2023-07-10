import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

interface Point {
  x: number
  y: number
}

export const useMessageCreate = () =>
  useMutation(
    ['messages'],
    async ({ coordinates }: { coordinates: Point[] }) =>
      await axios.post('/messages', {
        content: {
          coordinates,
        },
      })
  )
