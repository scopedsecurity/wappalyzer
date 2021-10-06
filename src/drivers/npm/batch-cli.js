#!/usr/bin/env node

const Wappalyzer = require('./driver')

const args = process.argv.slice(2)

const options = {}

let urls
let arg

arg = args.shift()
urls = arg.split(',')

if (!urls || options.help) {
  process.stdout.write(`Usage:
  wappalyzer <url> [options]

Examples:
  wappalyzer https://www.example.com
  node cli.js https://www.example.com -r -D 3 -m 50
  docker wappalyzer/cli https://www.example.com --pretty

Options:
  -b, --batch-size=...     Process links in batches
  -d, --debug              Output debug messages
  -t, --delay=ms           Wait for ms milliseconds between requests
  -h, --help               This text
  --html-max-cols=...      Limit the number of HTML characters per line processed
  --html-max-rows=...      Limit the number of HTML lines processed
  -D, --max-depth=...      Don't analyse pages more than num levels deep
  -m, --max-urls=...       Exit when num URLs have been analysed
  -w, --max-wait=...       Wait no more than ms milliseconds for page resources to load
  -p, --probe              Perform a deeper scan by performing additional requests and inspecting DNS records
  -P, --pretty             Pretty-print JSON output
  -r, --recursive          Follow links on pages (crawler)
  -a, --user-agent=...     Set the user agent string
  -n, --no-scripts         Disabled JavaScript on web pages
`)

  process.exit(1)
}


;(async function() {
  const wappalyzer = new Wappalyzer()
  try {
    await wappalyzer.init()

    const results = await Promise.all(
      urls.map(async (url) => ({
        url,
        results: await wappalyzer.open(url).analyze()
      }))
    )

  process.stdout.write(
      `${JSON.stringify(results, null, options.pretty ? 2 : null)}\n`
    )
  } catch (error) {
    console.error(error)
  }

  await wappalyzer.destroy()
})()
