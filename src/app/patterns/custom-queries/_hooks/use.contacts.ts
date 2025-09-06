import { useQuery } from '@tanstack/react-query'

export function useContacts() {
  return useQuery({
    queryKey: ['contacts', 'find'],
    queryFn: async () => {
      return {
        contacts: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Doe' },
          { id: 3, name: 'Bob Smith' },
          { id: 4, name: 'Alice Brown' },
          { id: 5, name: 'Charlie Davis' },
        ],
      }
    },
  })
}
