# Micro-frontend-reactapp

This repository serves to demonstrate an example of micro-frontend implementation. It consists of the container app and two micro-frontend app `marketing` and `auth` in the respective directories.

## Getting started

1. Clone the repo

```bash
https://github.com/AvaniBataviya/micro-frontend-reactapp.git
```
2. Install dependencies in respective directories & start app

```bash
cd container
yarn install
yarn start
```

```bash
cd marketing
yarn install
yarn start
```

```bash
cd auth
yarn install
yarn start
```
3.Visit the following URLS:


```
import foobar

# renders both apps
http://localhost:8080/

# renders only marketing
http://localhost:8081/

# renders only auth
http://localhost:8083/
```

## Output


https://user-images.githubusercontent.com/35954780/187223323-2f4caa94-195c-4e42-87f7-2e50454a8222.mp4

