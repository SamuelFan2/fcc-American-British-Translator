const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

    // # 1
    test('Translation with text and locale fields: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({text: 'Mangoes are my favorite fruit.', locale: 'american-to-british'})
            .end((err, res) => {
                assert.strictEqual(res.status, 200, 'Response status should be 200');
                assert.notProperty(res.body, 'error');
                assert.property(res.body, 'text');
                assert.property(res.body, 'translation');
                assert.strictEqual(res.body.text, 'Mangoes are my favorite fruit.');
                assert.strictEqual(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
                done();
            })
    })

    // # 2
    test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({text: 'Mangoes are my favorite fruit.', locale: 'testing invalid locale'})
            .end((err, res) => {
                assert.strictEqual(res.status, 200, 'Response status should be 200');
                assert.property(res.body, 'error');
                assert.notProperty(res.body, 'text');
                assert.notProperty(res.body, 'translation');
                assert.strictEqual(res.body.error, 'Invalid value for locale field');
                done();
            })
    })

    // # 3
    test('Translation with missing text field: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({locale: 'american-to-british'})
            .end((err, res) => {
                assert.strictEqual(res.status, 200, 'Response status should be 200');
                assert.property(res.body, 'error');
                assert.notProperty(res.body, 'text');
                assert.notProperty(res.body, 'translation');
                assert.strictEqual(res.body.error, 'Required field(s) missing');
                done();
            })
    })

    // # 4
    test('Translation with missing locale field: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({text: 'Mangoes are my favorite fruit.'})
            .end((err, res) => {
                assert.strictEqual(res.status, 200, 'Response status should be 200');
                assert.property(res.body, 'error');
                assert.notProperty(res.body, 'text');
                assert.notProperty(res.body, 'translation');
                assert.strictEqual(res.body.error, 'Required field(s) missing');
                done();
            })
    })

    // # 5
    test('Translation with empty text: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({text: '', locale: 'american-to-british'})
            .end((err, res) => {
                assert.strictEqual(res.status, 200, 'Response status should be 200');
                assert.property(res.body, 'error');
                assert.notProperty(res.body, 'text');
                assert.notProperty(res.body, 'translation');
                assert.strictEqual(res.body.error, 'No text to translate');
                done();
            })
    })

    // # 6
    test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
        chai
            .request(server)
            .keepOpen()
            .post('/api/translate')
            .send({text: 'nothing to translate!', locale: 'american-to-british'})
            .end((err, res) => {
                assert.strictEqual(res.status, 200, 'Response status should be 200');
                assert.notProperty(res.body, 'error');
                assert.property(res.body, 'text');
                assert.property(res.body, 'translation');
                assert.strictEqual(res.body.text, 'nothing to translate!');
                assert.strictEqual(res.body.translation, 'Everything looks good to me!');
                done();
            })
    })
});
