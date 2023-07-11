import { Canvas, Path, Skia, runTiming, useValue } from '@shopify/react-native-skia'
import { Point } from './Draw'
import { useEffect } from 'react'

export const ReceivedDrawing = ({ message }: { message: Point[] }) => {
  const end = useValue(0)

  let path = Skia.Path.Make()

  useEffect(() => {
    if (!message) return

    path.moveTo(message[0].x, message[0].y)
    message.map(({ x, y }: Point) => {
      path.lineTo(x, y)
    })

    runTiming(end, { from: 0, to: 1 }, { duration: 1000 })
  }, [message])

  if (!message) return null

  return (
    <Canvas style={{ flex: 1 }}>
      <Path path={path} strokeWidth={5} style="stroke" color="#000000" start={0} end={end} />
    </Canvas>
  )
}
