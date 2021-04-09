import axios from "axios"
import { MutableRefObject, useRef } from "react"
import { QueryClient, QueryFunction } from "react-query"

const useQueryClientRef = () => {
  const queryClientRef = useRef() as MutableRefObject<QueryClient>
  if (!queryClientRef.current) {
    const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
      const { data } = await axios.get(`${queryKey[0]}`)
      return data
    }
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          queryFn: defaultQueryFn,
        },
      },
    })
  }
  return queryClientRef
}

export default useQueryClientRef
