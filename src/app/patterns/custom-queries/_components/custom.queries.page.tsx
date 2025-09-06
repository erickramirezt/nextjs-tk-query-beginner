'use client'

import { Button } from '@/components/ui/button'
import { useContacts } from '../_hooks/use.contacts'

export default function CustomQueriesPage() {
  const { data, isLoading, isError, error, refetch } = useContacts()

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
