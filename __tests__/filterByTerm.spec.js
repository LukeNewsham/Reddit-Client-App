const filterByTerm = require('../src/filterByTerm.js');


describe('Filter Function', () => {
    test('it should filter by a search term (link)', () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const outputLink = [{ id: 3, url: "https://www.link3.dev" }];
        const outputUrl = [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev" }];        

        expect(filterByTerm(input, 'link')).toEqual(outputLink);
        expect(filterByTerm(input, 'LINK')).toEqual(outputLink);

    });    


    test('it should filter by a search term (url)', () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev" }];
        

        expect(filterByTerm(input, 'url')).toEqual(output);
        expect(filterByTerm(input, 'URL')).toEqual(output);


    });    
}) 