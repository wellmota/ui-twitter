import { Divider } from "../components/Divider"
import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"
import "./Status.css"

const answers = ["Concordo...", "Faz sentido", "Parabéns pelo progresso"]

export function Status() {
  return (
    <main className="status">
      <Header title="Status" />
      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis sit iste eos. In, dicta quod reprehenderit, veritatis a aliquid animi modi ipsam temporibus provident nulla fuga repellat eos at natus!" />
      <Divider />
      <form action="" className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/wellmota.png" alt="Wellington Mota" />
          <textarea id="tweet" placeholder="Tweet your Answer"></textarea>
        </label>
        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
