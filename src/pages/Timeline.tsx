import { Divider } from "../components/Divider"
import { Tweet } from "../components/Tweet"
import { Header } from "../components/Header"
import "./Timeline.css"
const tweets = ["Meu primeiro tweet", "Teste", "Deu certo tweetar!"]

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form action="" className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/wellmota.png" alt="Wellington Mota" />
          <textarea id="tweet" placeholder="Whats'happening?"></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Divider />
      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}
