import { useQuery } from '@tanstack/react-query'
import { getContact } from '../actions/get.contact'

export function useContact({ contactId }: { contactId: number }) {
  return useQuery({
    queryKey: ['contacts', contactId],
    queryFn: async () => {
      return getContact({ contactId })
    },
  })
}
