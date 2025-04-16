export function getSiteName(): string {
  if ("SITE_NAME" in process.env) {
    return <string>process.env.SITE_NAME
  }

  console.warn("ENV 'SITE_NAME' has no value, using default:", "Watch2Gether")
  return "Watch2Gether"
}

export function getSiteDomain(): string {
  return "http://localhost:3000";
}

export function getRedisURL(): string {
  if ("REDIS_URL" in process.env) {
    return <string>process.env.REDIS_URL
  }

  console.warn(
    "ENV 'REDIS_URL' has no value, using default:",
    "redis://localhost:6379"
  )
  return "redis://localhost:6379"
}

export function getDefaultSrc(): string {
  if ("DEFAULT_SRC" in process.env) {
    return <string>process.env.DEFAULT_SRC
  }

  // console.warn("ENV 'DEFAULT_SRC' has no value, using no src")
  return "https://youtu.be/NcBjx_eyvxc4"
}
