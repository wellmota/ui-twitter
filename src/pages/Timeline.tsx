import { Divider } from "../components/Divider"
import { Tweet } from "../components/Tweet"
import { Header } from "../components/Header"
import { FormEvent, KeyboardEvent, useState } from "react"
import "./Timeline.css"

export function Timeline() {
  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Teste",
    "Deu certo tweetar!",
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet("")
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet("")
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/wellmota.png" alt="Wellington Mota" />
          <textarea
            id="tweet"
            placeholder="Whats'happening?"
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          ></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Divider />
      {tweets.map((tweet, index) => {
        return <Tweet key={index} content={tweet} />
      })}
    </main>
  )
}
