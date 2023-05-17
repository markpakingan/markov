const { MarkovMachine } = require("./markov");


describe("markov functions", ()=> {

    test("makeChains functions", () => {
        const text = "the cat in the hat";
        const markov = new MarkovMachine(text);
        const expectedChains = {
        'the': ['cat', 'hat'],
        'cat': ['in'],
        'in': ['the'],
        'hat': [null]
        }; 
        const actualChains = markov.makeChains();
        console.log(`actualChains = ${actualChains}`);
        expect(actualChains).toEqual(expectedChains);
    })
})

