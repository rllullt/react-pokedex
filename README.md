# Pokedex

Pokedex made in React that consumes the PokeAPI [PokeAPI](https://pokeapi.co/).

## What’s included in this exercise

1. Landing Page

1. PokeGrid

1. Pokedex


## Running the application

To run the application, it is important to have installed `npm` and `NodeJS`.
This can be done with a virtual environment not to interfere with different versions of different applications.

With Python, you can do the following to install the latest LTS version of node:
```
python3 -m venv env
source ./env/bin/activate
python3 -m pip install nodeenv
nodeenv --python-virtualenv --node=lts
```

Now, the application can be run as follows:
```
npm run dev
```


## React + Vite + Tailwind CSS

This application was started with Vite, following the Tailwind CSS [instructions](https://tailwindcss.com/docs/guides/vite), and selecting the React framework with Javascript + SWC (Speedy Web Compiler) variant.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
