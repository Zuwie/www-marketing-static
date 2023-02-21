export const COMPANY = {
  NAME: 'Wiener Würfel Wappler'
}

export const ROUTES = {
  WAPPLER: '/members',
  EVENTS: '/events',
  KONTAKT: '/contact',
}

export const MAIN_NAVIGATION = Object.entries(ROUTES).map((key) => {
  return {
    name: key[0],
    href: key[1]
  }
})

export const SOCIALS = {
  FACEBOOK: '#',
  INSTAGRAM: '#',
  DISCORD: 'https://discord.gg/sXryDQNA'
}
