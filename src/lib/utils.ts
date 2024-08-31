import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function normalizeString(input: string) {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function formatDate(date: Date) {
  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR
  })
}