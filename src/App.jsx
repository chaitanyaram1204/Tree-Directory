import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'

function App() {
  const tree = {
    children: [
      {
        name: "frontend",
        children: [
          {
            name: "files"
          }
        ]
      },
      {
        name: "node_modules",
        children: [
          { name: "acron" },
          { name: "vite" },
          { name: "array" },
          { name: "view" }
        ]
      },
      {
        name: "public",
        children: [
          { name: "vite.svg" }
        ]
      },
      {
        name: "src",
        children: [{
          name: "Components",
          children: [
            {
              name: "Footer"
            },
            {
              name: "Header"
            },
            {
              name: "Hero"
            },
            {
              name: "List"
            },
            {
              name: "Navbar"
            },
            {
              name: "Product"
            },
          ]
        },
        {
          name: "context",
          children: [
            {
              name: "ShopContext.jsx"
            }
          ]
        }, {
          name: "App.css"
        }, { name: "App.jsx" },
        {
          name: "index.css"
        }, {
          name: "index.jsx"
        },
        ]
      }, {
        name: ".gitignore"
      }, {
        name: "package.json"
      }
    ]
  }

  return (
    <>
      <Menu tree={tree} />
    </>
  )
}

export default App
