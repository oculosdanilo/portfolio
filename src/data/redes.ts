export const DATA: Rede[] = [
  {
    nome: "Meu currículo",
    img: "/cu-rriculo.png",
    href: "/curriculo.pdf",
  },
  {
    nome: "Github",
    href: "https://github.com/oculosdanilo",
    img: "/github.png",
  },
  {
    nome: "Linkedin",
    img: "/linkedin.png",
    href: "https://www.linkedin.com/in/danilo-lima-99bb57304"
  },
  {
    nome: "Bluesky",
    img: "/bsky.png",
    href: "https://bsky.app/profile/odanilo05.bsky.social"
  },
  {
    nome: "X (antigo Twitter)",
    img: "/x.png",
    href: "https://twitter.com/oDanilo05"
  }
]

export type Rede = {
  nome: string;
  img: string;
  href: string;
}
