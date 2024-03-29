import React from "react"
import ReactDOM from "react-dom/client"
import "./global.css"
import { Tweet } from "./components/Tweet"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { Divider } from "./components/Divider"

const tweets = ["Meu primeiro tweet", "Teste", "Deu certo tweetar!"]

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title="Home" />
          <form action="" className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/wellmota.png"
                alt="Wellington Mota"
              />
              <textarea id="tweet" placeholder="Whats'happening?"></textarea>
            </label>
            <button type="submit">Tweet</button>
          </form>
          <Divider />
          {tweets.map((tweet) => {
            return <Tweet key={tweet} content={tweet} />
          })}
        </main>
      </div>
    </div>
  </React.StrictMode>
)
