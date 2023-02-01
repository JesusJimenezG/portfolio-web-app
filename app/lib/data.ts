export async function getOpenAIDescription(): Promise<any> {
  return await (
    await fetch(`${process.env.BASE_FETCH_URL}/api/completion/`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json()
}

export async function getProfile(): Promise<any> {
  return await (
    await fetch(`${process.env.BASE_FETCH_URL}/api/profile/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json()
}
