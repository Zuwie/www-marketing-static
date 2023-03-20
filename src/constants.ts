export const COMPANY = {
  NAME: 'Wiener Würfel Wappler',
  DISCORD: 'https://discord.gg/YkXFvfwKRH'
}

export const WEB3FORMS_KEY = "15554bb9-29c7-40dc-90ad-e4a654df9a42"

export const ROUTES = {
  BLOG: '/posts',
  WAPPLER: '/members',
  EVENTS: '/events',
  KONTAKT: '/contact',
  LOCATION: '/location',
  CALENDER: '/calender',
}

export const MAIN_NAVIGATION = Object.entries(ROUTES).map((key) => ({
  name: key[0],
  href: key[1]
}))

export const SOCIALS = {
  FACEBOOK: '#',
  INSTAGRAM: '#',
  DISCORD: 'https://discord.gg/sXryDQNA'
}
