'use client'

import { Button } from '@/components/ui/button'
import { useContacts } from '../../custom-queries/_hooks/use.contacts'
import Link from 'next/link'

export default function ParameterizedQueriesPage() {
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
      <h1>Parameterized Queries</h1>
      <div>
        {data?.contacts.map((contact) => (
          <Button variant={'link'} key={contact.id} asChild>
            <Link href={`/patterns/parameterized-queries/${contact.id}`}>
              {contact.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
