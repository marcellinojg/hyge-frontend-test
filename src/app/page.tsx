import ROUTES from '@/routes'
import { redirect } from 'next/navigation'

export default async function Landing() {
  redirect(ROUTES.STATIC.PORTFOLIOS)
}