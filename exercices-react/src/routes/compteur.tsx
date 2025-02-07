import { createFileRoute } from '@tanstack/react-router'
import Compteur from '../pages/compteur'

export const Route = createFileRoute('/compteur')({
  component: Compteur,
})
