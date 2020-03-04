const quoteCollection = [
    {
        quote: '"Do not tell fish stories where the people know you; but particularly, don\'t tell them where they know the fish." -Mark Twain'
    },
    {
        quote: '"Last year I went fishing with Salvador Dali. He was using a dotted line. He caught every other fish." -Steven Wright'
    },
    {
        quote: '"No human being, however great, or powerful, was ever so free as a fish." -John Ruskin'
    }
]

export const useQuotes = () => {
    return quoteCollection.slice()
}