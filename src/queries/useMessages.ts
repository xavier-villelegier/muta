import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type Point = [number, number]

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
