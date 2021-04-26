import { DailyJournal } from "./DailyJournal.js"
import { Entries } from "./Entries.js"

const entry_container = document.querySelector("#container")
const oldEntry_container = document.querySelector("#old__entries")

const render = () => {
    entry_container.innerHTML = DailyJournal()
    oldEntry_container.innerHTML = Entries()
}

render();