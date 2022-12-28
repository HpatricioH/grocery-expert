export const getURL = () => {
  let url =
    import.meta.env.VITE_SITE_URL ?? // Set this to your site URL in production env.
    import.meta.env.VITE_VERCEL_URL ?? // Automatically set by Vercel.
    'http://127.0.0.1:8080/'
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}
