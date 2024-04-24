import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getC, setC } from '@/services/cookies'

export enum Tema {
  claro = 'light',
  escuro = 'dark',
}

export function getTemaCookie() {
  if (getC('tema') == 'light')
    return Tema.claro
  else
    return Tema.escuro
}

export const useThemeStore = defineStore('tema', () => {
  const tema = ref(Tema.escuro)

  function mudarTema(novoTema: Tema) {
    tema.value = novoTema
    setC('tema', novoTema == Tema.escuro ? 'dark' : 'light', 365)
  }

  return { tema, mudarTema }
})