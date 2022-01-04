## Dept Demo Project

## Build the web app and the mock rest server

```bash
# install NUXT framework dependencies and the Mocks rest server
$ npm install
```

## Run mock rest server
Note: you should run it as a separate process from the Nuxt web app.
```bash
$ npm run mocks
```

Check that the mock rest server is running:
```bash
http://localhost:3100/api/cases
```

## Run the Nuxt web app
```bash
$ npm run dev
```

The web app should be visible at:
```bash
http://localhost:3000
```
