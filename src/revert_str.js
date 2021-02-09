export function revertStr(str) {
    if (typeof str == "string"){
        let result = ''
        for (let i = str.length - 1; i !== -1; i--){
            result += str[i]
        }
        return result
    } else {
        return 'это не строка'
    }
}