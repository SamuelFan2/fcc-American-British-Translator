const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(text, locale) {
        // check error
        // if one or more of the required fields is missing
        if (text === undefined || locale === undefined) {
            return {error: 'Required field(s) missing'};
        }
        //if text is empty
        if (!text) {
            return {error: 'No text to translate'};
        }
        console.log(locale);

        // check locale
        switch (locale) {
            case 'american-to-british':
                return this.americanToBritish(text);
            
            case 'british-to-american':
                return this.britishToAmerican(text);

            default:
                return {error: 'Invalid value for locale field'}

        }
    }


    americanToBritish(text) {

        let newText = text;

        for (let i in americanToBritishSpelling) {
            let regex = new RegExp(`(\[\w-])?(${i.toLowerCase()})(\\w)?(\.)?`,'gi');
            newText = newText.replace(regex, (_match, a, b, c, d) => {
                console.log(a,b,c, d);
                // if a is beginning or c is endding
                if (a === undefined) {
                    a = "";
                }

                if (c === undefined) {
                    c = "";
                }

                if (d === undefined) {
                    d = "";
                }

                if (a || c) {
                    return a + b + c + d
                } else {
                    return `<span class="highlight">${americanToBritishSpelling[i]}</span>` + d;
                }
            });
        }

        for (let i in americanOnly) {
            let regex = new RegExp(`(\[\w-])?(${i.toLowerCase()})(\\w)?(\.)?`,'gi');
            newText = newText.replace(regex, (_match, a, b, c, d) => {
                console.log(a,b,c, d);
                // if a is beginning or c is endding
                if (a === undefined) {
                    a = "";
                }

                if (c === undefined) {
                    c = "";
                }

                if (d === undefined) {
                    d = "";
                }

                if (a || c) {
                    return a + b + c + d
                } else {
                    return `<span class="highlight">${americanOnly[i]}</span>` + d;
                }
            });
            
        }

        for (let i in americanToBritishTitles) {
            let regex = new RegExp(`(\[\w-])?(${i.toLowerCase()})(\\w)?(\.)?`,'gi');
            newText = newText.replace(regex, (_match, a, b, c, d) => {
                console.log(a,b,c, d);
                // if a is beginning or c is endding
                if (a === undefined) {
                    a = "";
                }

                if (c === undefined) {
                    c = "";
                }

                if (d === undefined) {
                    d = "";
                }

                if (a || c) {
                    return a + b + c + d
                } else {
                    let result = americanToBritishTitles[i][0].toUpperCase() + americanToBritishTitles[i].slice(1);
                    return `<span class="highlight">${result}</span>` + d;
                }
            });
        }

        // time convert
        let timeRegex = /(\d{1,2})(:)(\d{1,2})/g;
        newText = newText.replace(timeRegex, (_match, a, b, c) => {
            return `<span class="highlight">${a}.${c}</span>`
        })

        // if no word need to be translate
        if (!/span/.test(newText)) {
            return {text:text, translation: "Everything looks good to me!"}
        }

        return {text:text ,translation: newText};
    }

    britishToAmerican(text) {
        
        let newText = text;

        for (let i in americanToBritishSpelling) {
            let regex = new RegExp(`(\[\w-])?(${americanToBritishSpelling[i].toLowerCase()})(\\w)?(\.)?`,'gi');
            newText = newText.replace(regex, (_match, a, b, c, d) => {
                console.log(a, b, c, d);
                // if a is beginning or c is endding
                if (a === undefined) {
                    a = "";
                }

                if (c === undefined) {
                    c = "";
                }

                if (d === undefined) {
                    d = "";
                }

                if (a || c) {
                    return a + b + c + d
                } else {
                    return `<span class="highlight">${i}</span>` + d;
                }
            });
        }

        for (let i in britishOnly) {
            let regex = new RegExp(`(\[\w-])?(${i.toLowerCase()})(\\w)?(\.)?`,'gi');
            newText = newText.replace(regex, (_match, a, b, c, d) => {
                console.log(a,b,c, d);
                // if a is beginning or c is endding
                if (a === undefined) {
                    a = "";
                }

                if (c === undefined) {
                    c = "";
                }

                if (d === undefined) {
                    d = "";
                }

                if (a || c) {
                    return a + b + c + d
                } else {
                    console.log(_match, `<span class="highlight">${britishOnly[i]}</span>` + d );
                    return `<span class="highlight">${britishOnly[i]}</span>` + d;
                }
            });
            
        }

        for (let i in americanToBritishTitles) {
            let regex = new RegExp(`(\[\w-])?(${americanToBritishTitles[i].toLowerCase()})(\\w)?(\.)?`,'gi');
            newText = newText.replace(regex, (_match, a, b, c, d) => {
                console.log(a, b, c, d);
                // if a is beginning or c is endding
                if (a === undefined) {
                    a = "";
                }

                if (c === undefined) {
                    c = "";
                }

                if (d === undefined) {
                    d = "";
                }

                if (a || c) {
                    return a + b + c + d
                } else {
                    let result = i[0].toUpperCase() + i.slice(1);
                    return `<span class="highlight">${result}</span>` + d;
                }
            });
        }

        // time convert
        let timeRegex = /(\d{1,2})(.)(\d{1,2})/g;
        newText = newText.replace(timeRegex, (_match, a, b, c) => {
            return `<span class="highlight">${a}:${c}</span>`
        })

        // if no word need to be translate
        if (!/span/.test(newText)) {
            return {text:text, translation: "Everything looks good to me!"}
        }

        return {text:text, translation: newText};
     
    }
}

module.exports = Translator;