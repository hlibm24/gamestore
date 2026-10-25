# GameStore

A video game store simulation built with React and TypeScript. Browse and search games, view detailed game pages, add items to your cart, buy them with virtual money, and build your own library.

**[Live demo](https://gamestoreapp.vercel.app/)**

https://github.com/user-attachments/assets/ca16fdd6-42cb-488c-a091-df6d2f796535

## Why I built this

A learning project inspired by Steam and Epic Games. I wanted to understand how this type of product works from the inside and to practice real-world React Patterns.

## Features

- Responsive design for desktop and mobile
- Home page with a banner and a genre carousel, plus search and navigation
- Game page with screenshots, description, system requirements and other details
- Cart: save games to buy later
- Wallet that is topped up automatically every minute and transactions history
- Library of purchased games; bought games are marked as "Purchased" on their pages

> This is a simulation project: no real payments are made.

## Tech stack

- React 
- TypeScript
- Vite
- React Router
- Context API for state management (cart, wallet, library)
- CSS
- MockAPI as a backend

## Getting started

Requires [Node.js](https://nodejs.org/) (v20.19 or newer).

```bash
git clone https://github.com/hlibm24/gamestore.git
cd gamestore
npm install
npm run dev
​```