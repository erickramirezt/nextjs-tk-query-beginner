'use client'

import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'

export default function SimpleQueriesPage() {
  const { data, isLoading, isError, error, refetch } = useQuery({
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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.message}</div>
        <Button onClick={() => refetch()}>Retry</Button>
      </div>
    )
  }

  return (
    <div>
      <h1>Simple Queries</h1>
      <div>
        {data?.contacts.map((contact) => (
          <div key={contact.id}>{contact.name}</div>
        ))}
      </div>
    </div>
  )
}
