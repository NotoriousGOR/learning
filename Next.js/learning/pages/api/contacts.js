// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 'alfreds-futterkiste',
      name: 'Alfreds Futterkiste',
      country: 'Germany',
    },
    {
      id: 'francisco-chang',
      name: 'Francisco Chang',
      country: 'Mexico',
    },
    {
      id: 'ernst-handel',
      name: 'Ernst Handel',
      country: 'Austria',
    },
    {
      id: 'helen-bennett',
      name: 'Helen Bennett',
      country: 'UK',
    },
    {
      id: 'yoshi-tannamuri',
      name: 'Yoshi Tannamuri',
      country: 'Canada',
    },
    {
      id: 'giovanni-rovelli',
      name: 'Giovanni Rovelli',
      country: 'Italy',
    },
  ]
  )
}