import React, { useActionState, useState } from "react"
import { languages } from './languages.js'
import { clsx } from 'clsx';
import { getFarewellText } from "./utils.js";
import { randomWord } from "./utils.js";
import Confetti from "react-confetti";

export default function AssemblyEndGame() {


    const [currentWord, setCurrentWord] = useState(() => randomWord())

    const [guessedLettters, setGuessedLetter] = useState([])

    const wrongGuessCount = guessedLettters.filter(letter => {
        return (
            !currentWord.includes(letter)
        )
    }).length

    const numGuessesLeft = languages.length-1
    const isGameWon = currentWord.split("").every(letter => guessedLettters.includes(letter))

    const isGameLost = wrongGuessCount >= numGuessesLeft
    const isGameOver = isGameLost || isGameWon

    const lastGuessedLetter = guessedLettters[guessedLettters.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)


    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setGuessedLetter(prevLetters => {
            return (
                prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
            )
        })
    }


    const keyboard = alphabet.split("").map((l, index) => {
        const isGuessed = guessedLettters.includes(l)
        const isCorrect = isGuessed && currentWord.includes(l)
        const isWrong = isGuessed && !currentWord.includes(l)

        const className = clsx({
            correct: isCorrect,
            wrong: isWrong,
        });
        return (
            <button
                className={className}
                onClick={() => addGuessedLetter(l)} key={index}
                disabled={isGameOver}
            >
                {l.toUpperCase()}
            </button>
        )
    })

    const correctWord = currentWord.split("").map((l, index) => {
        return (
            <span className="letter" key={index}>{l.toUpperCase()}</span>
        )
    })

    const letter = currentWord.split("").map((l, index) => {
        const isCorrect = guessedLettters.includes(l)
        return (
            <span className="letter" key={index}>
                {isCorrect && l.toUpperCase()}
            </span>
        )
    })

    const language_chips = languages.map((language, index) => {
        console.log('wrongGuessCount : ', wrongGuessCount)
        console.log('index : ', index)

        const isLanguageLost = index < wrongGuessCount

        const className = clsx("chip", isLanguageLost && "lost")


        console.log("className : ", className)

        return (
            <span
                className={className}
                style={
                    {
                        color: language.color,
                        background: language.backgroundColor
                    }
                }
                key={index}
            >
                {language.name}
            </span>
        )
    })

    const gameStatusClass = clsx('game-status', {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    function renderGameStatus() {

        if (!isGameOver && isLastGuessIncorrect) {
            return (
                <>
                    <p className="farewell-message">{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
                </>
            )
        }
        if (isGameOver && isGameWon) {
            return (
                <>
                    <h2>You Win!</h2>
                    <p>Well done</p>
                </>
            )
        } else if (isGameOver && isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    }

    function reset() {

        setGuessedLetter([null])
        setCurrentWord(randomWord())
    }

    return (
        <main >

            {
                isGameWon
                &&
                <Confetti
                    recycle={false}
                    numberOfPieces={1000}
                />
            }
            <header className="header">

                <h1>Assembly: Endgame</h1>

                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>

            </header>
            <section
                aria-live="polite"
                role="status"
                className={gameStatusClass}>
                {renderGameStatus()}
            </section>

            <section className="language-chips">

                {language_chips}
            </section>

            <section className="word">
                {isGameLost ? correctWord : letter}
            </section>

            {/* Combined visually-hidden aria-live region for status updates */}
            <section
                className="sr-only"
                aria-live="polite"
                role="status"
            >

                <p>
                    {currentWord.includes(lastGuessedLetter) ?
                        `Correct! The letter ${lastGuessedLetter} is in the word.` :
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>

                <p>Current word: {currentWord.split("").map(letter =>
                    guessedLettters.includes(letter) ? letter + "." : "blank.")
                    .join(" ")}</p>

            </section>

            <section className="keyboard">
                {!isGameOver ? keyboard : null}
            </section>
            {isGameOver && <button className="new-game" onClick={reset}>New Game</button>}
        </main>
    )
}
