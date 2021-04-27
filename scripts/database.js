/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            entryDate: "04/14/2021",
            conceptsCovered: "Working with GitHub Repos",
            textBody: "learned the basic workflow of GitHub; still unsure about how merging should work outside of the cloud",
            feeling: "brainded"
        },
        {
            id: 2,
            entryDate: "04/14/2021",
            conceptsCovered: "Data Structures",
            textBody: "Introduction to Arrays const Array = [], including implementing arrays with key-vale pairs {} and how to embed arrays inside of one another [{},{},{}]",
            feeling: "content"
        },
        {
            id: 3,
            entryDate: "04/23/2021",
            conceptsCovered: "Debugging and Integrating HTML and JS",
            textBody: "Spent the week learning how to use dev tools to debug as well as integrate basic JS functions into HTML",
            feeling: "brainded"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = [...database.entries]
    return copyOfData
}