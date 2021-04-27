/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries();
    let allEntriesAsHTML = "<article>"


    for (const entry of entries) {
        allEntriesAsHTML += `
           <div>
           Topic: ${ entry.conceptsCovered }
           Entry Date: ${ entry.entryDate }
           Mood: ${ entry.feeling }

           ${ entry.textBody }

           Entry Id: ${ entry.id }
           </div>
        `
    }

    allEntriesAsHTML += "</article>"

    return allEntriesAsHTML
}