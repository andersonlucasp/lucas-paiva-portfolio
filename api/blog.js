export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=60')

  try {
    const response = await fetch('https://medium.com/feed/@andersonlucaspaiva', {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)' },
    })

    if (!response.ok) throw new Error(`Medium RSS returned ${response.status}`)

    const xml = await response.text()

    const items = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match

    while ((match = itemRegex.exec(xml)) !== null) {
      const block = match[1]

      const get = (tag) => {
        const m = block.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`)
          ) || block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))
        return m ? m[1].trim() : ''
      }

      const categories = []
      const catRe = /<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g
      let cat
      while ((cat = catRe.exec(block)) !== null) categories.push(cat[1])

      const link = (block.match(/<link>(https?:\/\/[^<]+)<\/link>/) || [])[1] || ''
      const guid = (block.match(/<guid[^>]*>(https?:\/\/[^<]+)<\/guid>/) || [])[1] || ''

      items.push({
        title:       get('title'),
        pubDate:     get('pubDate'),
        link,
        guid,
        author:      get('dc:creator'),
        description: get('description'),
        content:     get('content:encoded'),
        thumbnail:   '',
        categories,
      })
    }

    res.json({ status: 'ok', items })
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
}
