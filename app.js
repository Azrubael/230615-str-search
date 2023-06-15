// You have to print out only emails, each one in a string

const input = [
    'vvccfffttt ddfrrtt <vvccfffttt.e05$gmail.com>',
    'sfdgfdgfsdgsfd fvbcvbxc <sfdgfdgfsdgsfd.q5$promgidro.com.kz>',
    'wer@.i.us'
    ]
 
// first method    
const trimEmail = email => {
    let result = ''
    for (let el of input) {
        let i = el.indexOf('<')
        if (i !== -1) {
            result += (el.slice(i+1, el.length-1)) + '\n'
        } else {
            result += el + '\n'
        }
    }
    return result
}

console.log('First output of angled bracket search:')
console.log(trimEmail(input))

//second method
const pattern = /(?<=\<)(\S+)(\@)(\S+)(?=\>)/g
const regexpEmail = email => {
    let result = ''
    for (let el of input) {
        let test = el.match(pattern)
        if (test) {
            result += test[0] + '\n'
        } else {
            result += el + '\n'
        }
    }
    return result
} 
console.log('Second output of regexp search:')
console.log(regexpEmail(input))