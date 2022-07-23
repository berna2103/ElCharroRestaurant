import { useEffect, useState } from 'react'

import { getSinglePromotion } from '../../Functions/Contentful'

export default function useSinglePost(slug) {
  const promise = getSinglePromotion(slug)

  const [promotion, setPromotion] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(result => {
      setPromotion(result[0].fields)
      setLoading(false)
    })
  }, [])

  return [promotion, isLoading]
}