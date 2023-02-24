export const COMPANY = {
  NAME: 'Wiener Würfel Wappler'
}

export const WEB3FORMS_KEY = "15554bb9-29c7-40dc-90ad-e4a654df9a42"

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
