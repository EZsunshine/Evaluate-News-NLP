import { handleSubmit } from '../client/js/formHandler'

//test to make sure the handleSubmit function runs as expected
test('should return undefined if no errors', () => {
    const data = [{'result': { 'lang': 'one' }},
     { 'result': { 'polarity': 'two' ,'subjectivity': 'negative'}},
      {'result': {'sentences': ['one sentence', 'two sentence']}}]

    document.body.innerHTML = `<div class="polarity"></div><div class="extra"></div><article></article>`
    window.onload = () => {
        pol = document.querySelector('.polarity')
        extra = document.querySelector('.extra')
        article = document.querySelector('article')

        expect(handleSubmit(data)).toBe(undefined)
    }
})

//test to see if the handleSubmit function handles incomplete data
test('should return undefined after catching undefined field', () => {
    const data = undefined

    document.body.innerHTML = `<div class="polarity"></div><div class="extra"></div><article></article>`
    window.onload = () => {
        pol = document.querySelector('.polarity')
        extra = document.querySelector('.extra')
        article = document.querySelector('article')

        expect(handleSubmit(data)).toBe(undefined)
    }
})