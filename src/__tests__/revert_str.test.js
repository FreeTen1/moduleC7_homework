import {revertStr} from "../revert_str";

describe('revert test', () => {
    it('test something string', () => {
        expect(revertStr('123456789')).toBe('987654321')
    })
    it('test "" string', () => {
            expect(revertStr('')).toBe('')
        })
    it('dont string', () => {
        expect(revertStr(3)).toBe('это не строка')
    })
})

