import { FormEvent, KeyboardEvent, useState } from "react"
import { Divider } from "../components/Divider"
import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"
import "./Status.css"
import { PaperPlaneRight } from "@phosphor-icons/react"

export function Status() {
  const [newAnswer, setNewAnswer] = useState("")
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Faz sentido",
    "Parabéns pelo progresso!",
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers([newAnswer, ...answers])
    setNewAnswer("")
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer("")
    }
  }

  return (
    <main className="status">
      <Header title="Status" />
      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis sit iste eos. In, dicta quod reprehenderit, veritatis a aliquid animi modi ipsam temporibus provident nulla fuga repellat eos at natus!" />
      <Divider />
      <form onSubmit={createNewAnswer} action="" className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/wellmota.png" alt="Wellington Mota" />
          <textarea
            id="tweet"
            placeholder="Tweet your Answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          ></textarea>
        </label>
        <button type="submit">
          <PaperPlaneRight/>
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}
