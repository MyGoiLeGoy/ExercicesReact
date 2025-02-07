import { createFileRoute } from '@tanstack/react-router'
import Accueil from '../pages'

export const Route = createFileRoute('/')({
  component: Accueil,
})
