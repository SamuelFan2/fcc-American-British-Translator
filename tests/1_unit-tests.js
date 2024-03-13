const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {

    // # 1
    test('Translate "Mangoes are my favorite fruit." to British English', () => {
        let output = translator.translate('Mangoes are my favorite fruit.', 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.')
    })

    // # 2
    test('Translate "I ate yogurt for breakfast." to British English', () => {
        let output = translator.translate('I ate yogurt for breakfast.', 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.')
    })

    // # 3
    test(`Translate "We had a party at my friend's condo." to British English`, () => {
        let output = translator.translate("We had a party at my friend's condo.", 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `We had a party at my friend's <span class="highlight">flat</span>.`);
    })

    // # 4
    test(`Translate "Can you toss this in the trashcan for me?" to British English`, () => {
        let output = translator.translate("Can you toss this in the trashcan for me?", 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `Can you toss this in the <span class="highlight">bin</span> for me?`);
    })

    // # 5
    test(`Translate "The parking lot was full." to British English`, () => {
        let output = translator.translate("The parking lot was full.", 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `The <span class="highlight">car park</span> was full.`);
    })

    // # 6
    test(`Translate "Like a high tech Rube Goldberg machine." to British English`, () => {
        let output = translator.translate("Like a high tech Rube Goldberg machine.", 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `Like a high tech <span class="highlight">Heath Robinson device</span>.`);
    })

    // # 7
    test(`Translate "To play hooky means to skip class or work." to British English`, () => {
        let output = translator.translate("To play hooky means to skip class or work.", 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `To <span class="highlight">bunk off</span> means to skip class or work.`);
    })

    // # 8
    test(`Translate "No Mr. Bond, I expect you to die." to British English`, () => {
        let output = translator.translate("No Mr. Bond, I expect you to die.", 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `No <span class="highlight">Mr</span> Bond, I expect you to die.`);
    })

    // # 9
    test(`Translate "Dr. Grosh will see you now." to British English`, () => {
        let output = translator.translate("Dr. Grosh will see you now.", 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `<span class="highlight">Dr</span> Grosh will see you now.`);
    })

    // # 10
    test(`Translate "Lunch is at 12:15 today." to British English`, () => {
        let output = translator.translate("Lunch is at 12:15 today.", 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `Lunch is at <span class="highlight">12.15</span> today.`);
    })

    // # 11
    test(`Translate "We watched the footie match for a while." to American English`, () => {
        let output = translator.translate("We watched the footie match for a while.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `We watched the <span class="highlight">soccer</span> match for a while.`);
    })

    // # 12
    test(`Translate "Paracetamol takes up to an hour to work." to American English`, () => {
        let output = translator.translate("Paracetamol takes up to an hour to work.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
    })

    // # 13
    test(`Translate "First, caramelise the onions." to American English`, () => {
        let output = translator.translate("First, caramelise the onions.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `First, <span class="highlight">caramelize</span> the onions.`);
    })

    // # 14
    test(`Translate "I spent the bank holiday at the funfair." to American English`, () => {
        let output = translator.translate("I spent the bank holiday at the funfair.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`);
    })

    // # 15
    test(`Translate I had a bicky then went to the chippy." to American English`, () => {
        let output = translator.translate("I had a bicky then went to the chippy.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`);
    })

    // # 16
    test(`Translate "I've just got bits and bobs in my bum bag." to American English`, () => {
        let output = translator.translate("I've just got bits and bobs in my bum bag.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
    })

    // # 17
    test(`Translate "The car boot sale at Boxted Airfield was called off." to American English`, () => {
        let output = translator.translate("The car boot sale at Boxted Airfield was called off.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`);
    })

     // # 18
     test(`Translate "Have you met Mrs Kalyani?" to American English`, () => {
        let output = translator.translate("Have you met Mrs Kalyani?", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `Have you met <span class="highlight">Mrs.</span> Kalyani?`);
    })

    // # 19
    test(`Translate "Prof Joyner of King's College, London." to American English`, () => {
        let output = translator.translate("Prof Joyner of King's College, London.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `<span class="highlight">Prof.</span> Joyner of King's College, London.`);
    })

    // # 20
    test(`Translate "Tea time is usually around 4 or 4.30." to American English`, () => {
        let output = translator.translate("Tea time is usually around 4 or 4.30.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `Tea time is usually around 4 or <span class="highlight">4:30</span>.`);
    })

    // # 21
    test('Translate "Mangoes are my favorite fruit." to British English', () => {
        let output = translator.translate('Mangoes are my favorite fruit.', 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.')
    })

    // # 22
    test('Translate "I ate yogurt for breakfast." to British English', () => {
        let output = translator.translate('I ate yogurt for breakfast.', 'american-to-british');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, 'I ate <span class="highlight">yoghurt</span> for breakfast.')
    })

    // # 23
    test(`Translate "We watched the footie match for a while." to American English`, () => {
        let output = translator.translate("We watched the footie match for a while.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `We watched the <span class="highlight">soccer</span> match for a while.`);
    })

    // # 24
    test(`Translate "Paracetamol takes up to an hour to work." to American English`, () => {
        let output = translator.translate("Paracetamol takes up to an hour to work.", 'british-to-american');
        
        assert.property(output, 'text');
        assert.property(output, 'translation');
        assert.strictEqual(output.translation, `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
    })
});
