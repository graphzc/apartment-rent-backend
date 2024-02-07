# Apartment rent

## Introduction

This is a backend API for apartment rent application.

## Getting Started

### Pre-requisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/GraphZC/apartment-rent-backend.git
```

2. Install NPM packages

```sh
npm install
```

3. Create .env file

```sh
cp .env.example .env
```

config your .env file

4. Run docker

```sh
docker compose up -d
```

5. Run migration

```sh
npx prisma migrate dev
```

6. Run seed

```sh
npx prisma db seed
```

## Usage

### Development

```sh
npm run dev
```

### Production

```sh
npm run build
npm run start
```
