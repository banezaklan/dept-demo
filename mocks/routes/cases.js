// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// users data
const DATA = [
  {
    id: 1,
    client: 'BOL.COM',
    description: 'A summer island in the Netherlands',
    industry: { id: 1, name: 'e-commerce' },
    categories: [{ id: 1, name: 'design' }],
    image: 'https://picsum.photos/1920/1080?random=1',
  },
  {
    id: 2,
    client: 'Kempen',
    description: 'Not some average banking website',
    industry: { id: 6, name: 'fintech'},
    categories: [{ id: 1, name: 'design' },{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=2',
  },
  {
    id: 3,
    client: 'Philips',
    description: 'Beautiful design meets innovative technology',
    industry: { id: 7, name: 'interior architecture' },
    categories: [{ id: 1, name: 'design' },{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=3',
  },
  {
    id: 4,
    client: 'Gemeentemusem',
    description: 'A 100 years of Mondriaan & De Stijl',
    industry: { id: 6, name: 'culture'},
    categories: [{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=4',
  },
  {
    id: 5,
    client: 'Microsoft',
    description:
      'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
    industry: { id: 5, name: 'technology'},
    categories: [{ id: 2, name: 'development' }],
    image: '',
  },
  {
    id: 6,
    client: 'O’NEILL',
    description:
      'Integrating existing content into O’Neill’s new e-commerce platform',
    industry: { id: 1, name: 'e-commerce' },
    categories: [{ id: 2, name: 'development' }],
    image: '',
  },
  {
    id: 7,
    client: 'Florensis',
    description:
      'Rethinking the entire online ecosystem',
    industry: { id: 1, name: 'e-commerce' },
    categories: [{ id: 1, name: 'design' },{ id: 2, name: 'development' }],
    image: 'images/Header.jpg',
  },
  {
    id: 8,
    client: 'Be Lighting',
    description:
      'Delivering clarity on a global scale',
    industry: { id: 3, name: 'urban development' },
    categories: [{ id: 1, name: 'design' },{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=6',
  },
  {
    id: 9,
    client: 'TUI',
    description:
      'Swipe to find your next holiday destination',
    industry: { id: 2, name: 'tourism' },
    categories: [{ id: 1, name: 'design' },{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=7',
  },
  {
    id: 10,
    client: 'BUTLINS',
    description:
      'Enhancing customer experience for personalised holiday planning using real time data',
    industry: { id: 2, name: 'tourism' },
    categories: [{ id: 1, name: 'design' }],
    image: '',
  },
  {
    id: 11,
    client: 'Vacanseselect',
    description:
      'Predicting booking behavior for holidays with smart data, voice search and machine learning',
    industry: { id: 2, name: 'tourism' },
    categories: [{ id: 2, name: 'development' }],
    image: '',
  },
  {
    id: 12,
    client: 'Chocomel',
    description:
      'A campaign for the limited edition letter packs',
    industry: { id: 4, name: 'food industry'},
    categories: [{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=8',
  },
  {
    id: 13,
    client: 'JBL',
    description:
      'Live like a champion with Jerome Booteng',
    industry: { id: 5, name: 'technology'},
    categories: [{ id: 1, name: 'design' },{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=9',
  },
  {
    id: 14,
    client: 'ZALANDO',
    description:
      'Innovative SEO and content strategy for Zalando',
    industry: { id: 5, name: 'technology'},
    categories: [{ id: 1, name: 'design' },{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=10',
  },
  {
    id: 15,
    client: 'Koninklijke Bibliotheek',
    description:
      'The search for the most influential book ever',
    industry: { id: 5, name: 'technology'},
    categories: [{ id: 1, name: 'design' }],
    image: 'https://picsum.photos/1920/1080?random=11',
  },
  {
    id: 16,
    client: 'Koninklijke Bibliotheek',
    description:
      'The search for the most influential book ever',
    industry: { id: 6, name: 'culture'},
    categories: [{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=12',
  },
  {
    id: 17,
    client: 'Liberty Global',
    description:
      'Delivering complex commerce solutions',
    industry: { id: 1, name: 'e-commerce' },
    categories: [{ id: 1, name: 'design' },{ id: 2, name: 'development' }],
    image: 'https://picsum.photos/1920/1080?random=13',
  },
  {
    id: 18,
    client: 'Arla',
    description:
      'Swipe to find your next holiday destination',
    industry: { id: 2, name: 'tourism' },
    categories: [{ id: 1, name: 'design' }],
    image: 'https://picsum.photos/1920/1080?random',
  },
]

module.exports = [
  {
    id: 'get-cases', // id of the route
    url: '/api/cases', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // id of the variant
        response: (req, res) => {
          const industryId = parseInt(req.query.industryId) || 0
          const categoryId = parseInt(req.query.categoryId)  || 0
          console.log('industryId', industryId, 'categoryId', categoryId)
          const rec = DATA.filter((item) => {
            const hasCategory = item.categories.find( cat => cat.id === categoryId) || !categoryId
            const isIndustry = item.industry.id === industryId || !industryId
            console.log('hasCategory', hasCategory, 'isIndustry', isIndustry)
            return hasCategory && isIndustry
          })
          if (rec) {
            res.status(200)
            res.send(rec)
          } else {
            res.status(404)
            res.send({
              message: 'Record not found'
            })
          }
        }
      },
      {
        id: 'error', // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: 'Error'
          }
        }
      }
    ]
  },
  {
    id: 'get-case', // id of the route
    url: '/api/cases/:id', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // id of the variant
        response: {
          status: 200, // status to send
          body: DATA[0] // body to send
        }
      },
      {
        id: 'real', // id of the variant
        response: (req, res) => {
          const id = req.params.id
          const rec = DATA.find((item) => item.id === Number(id))
          if (rec) {
            res.status(200)
            res.send(rec)
          } else {
            res.status(404)
            res.send({
              message: 'Record not found'
            })
          }
        }
      }
    ]
  },
  {
    id: 'get-cases-hero', // id of the route
    url: '/api/cases-hero/', // url in express format
    method: 'GET', // HTTP method
    variants: [
      {
        id: 'success', // id of the variant
        response: (req, res) => {
          console.log('here')
          const heroId = 7
          const rec = DATA.find((item) => item.id === heroId)
          if (rec) {
            res.status(200)
            res.send(rec)
          } else {
            res.status(404)
            res.send({
              message: 'Record not found'
            })
          }
        }
      }
    ]
  }
]
