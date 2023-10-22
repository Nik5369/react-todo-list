import { useState } from 'react'

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [postError, setPostError] = useState('')

  const fetching = async () => {
    try {
      setIsLoading(true)
      await callback()
    } catch (e) {
      setPostError(e.message)
    } finally {
      setIsLoading(false)
    }
  }
  return [fetching, isLoading, postError]
}
