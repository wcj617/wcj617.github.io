const quotes = [
    {
        quote:"Lay a firm foundation with the bricks that others throw at you.",
        author:"David Brinkley",

    },
    {
        quote:"Change the way you look at things and the things you look at change.",
        author:"Wayne Dyer",

    },
    {
        quote:"If you run you stand a chance of losing, but if you don't run you've already lost.",
        author:"Barack Obama",

    },

    {
        quote:"The greatest mistake you can make in life is to be continually fearing you will make one.",
        author:"Elbert Hubbard",

    },
    {
        quote:"Not everything that is faced can be changed, but nothing can be changed until it is faced.",
        author:"James Baldwin",

    },
    {
        quote:"I cannot say whether things will get better if we change; what I can say is they must change if they are to get better.",
        author:"Georg C. Lichtenberg",

    },

    {
        quote:"Only I can change my life. No one can do it for me.",
        author:"Carol Burnett",

    },

    {
        quote:"Things change. And friends leave. Life doesn't stop for anybody",
        author:"Stephen Chbosky",

    },

    {
        quote:"To improve is to chang; to be perfect is to change often.",
        author:"winston Churchil",

    },
    {
        quote:"Do what you want but Do your best.",
        author:"David Woo",

    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const TodayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = TodayQuotes.quote;
author.innerText = TodayQuotes.author;