import { Entries } from "./Entries.js"

export const DailyJournal = () => {
    return `
        <div class="entryList">
            ${ Entries() }
        </div>

        <article class="entryForm">
            Use interpolation to put the HTML that the form function generates here
        </article>
    `
}