export type Projeto = {
  nome: string;
  desc: string;
  img: string;
  href: string;
}

export const DATA: Projeto[] = [
  {
    nome: 'Arquivo 2021',
    desc: 'Meu primeiro portfolio',
    img: '/2021.png',
    href: 'https://osprojetos.web.app/2021'
  },
  {
    nome: 'Cidades 3.0',
    desc: 'As principais capitais do Brasil',
    img: '/cidades3.png',
    href: 'https://osprojetos.web.app/2021/0903'
  },
  {
    nome: 'Arquivo 2022',
    desc: 'Meu segundo portfolio, feito com design responsivo em mente',
    img: '/2022.png',
    href: 'https://osprojetos.web.app/2022'
  },
  {
    nome: 'StarWars API',
    desc: 'Front-end com mock-API do StarWars',
    img: '/starwars.png',
    href: 'https://osprojetos.web.app/2022/1020'
  },
  {
    nome: 'Arquivo 2023',
    desc: 'Terceiro portfolio, com PHP e SSR',
    img: '/2023.png',
    href: 'https://etec199-danilolima.xp3.biz/'
  },
  {
    nome: 'Gatopédia!',
    desc: 'Uma enciclopédia de gatos!',
    img: '/gagopedia.png',
    href: 'https://osprojetos.web.app/2023/gatopedia'
  }
]