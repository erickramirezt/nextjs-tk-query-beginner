import { Metadata } from 'next'
import ContactPage from './_components/contact.page'
import { getContact } from '../actions/get.contact'

type Props = {
  params: Promise<{ contactId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { contactId } = await params

  const { contact } = getContact({ contactId: Number(contactId) })

  return {
    title: `Contacto ${contact?.name}`,
    description: `Contacto ${contact?.name}`,
  }
}

export default async function Page({ params }: Props) {
  const { contactId } = await params

  return <ContactPage contactId={Number(contactId)} />
}
