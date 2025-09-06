import { Button } from '@/components/ui/button'
import { patterns } from '../_constants/patterns'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className='grid items-center justify-center min-h-screen gap-2'>
      {patterns.map((pattern) => {
        if (pattern.href) {
          return (
            <Button asChild key={pattern.id} variant={'link'}>
              <Link href={`/patterns/${pattern.href}`}>
                {pattern.id} - {pattern.name}
              </Link>
            </Button>
          )
        }
      })}
    </main>
  )
}
