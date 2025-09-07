'use client'

import { useContact } from '../../_hooks/use.contact'

export default function ContactPage({ contactId }: { contactId: number }) {
  const { data, isLoading, isError, error, refetch } = useContact({
    contactId,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.message}</div>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Contacto</h1>
      <div>
        <h2>{data?.contact?.name}</h2>
      </div>
    </div>
  )
}
