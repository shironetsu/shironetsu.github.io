//年月日時分秒を逆順にしてMD5ハッシュ化
const getHasedDate = (date) => {
    const reversed = Array.from(date).reverse().join('')
    const md5 = CryptoJS.MD5(reversed)
    return String(md5)
        .match(/[0-9a-f]{2}/g)
        .join(':')
}

const clock = () => {
    const now = new Date().toLocaleString('ja-JP')
    const concat = now.replace(
        /(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/g,
        (match, p1, p2, p3, p4, p5, p6, offset, string) =>
            [p1, p2, p3, p4, p5, p6]
                .map((str, i) => str.padStart([4, 2, 2, 2, 2, 2][i], '0'))
                .join('')
    )
    document.getElementById('clock-inner').innerText = getHasedDate(concat)
}

//demo
console.log(String(CryptoJS.MD5('解けばわかる')))
console.log('まままままままま...ぽん！')
console.log(getHasedDate('20300721125353'))
console.log(getHasedDate('20300729202808'))
console.log(getHasedDate('20300729203329'))

setInterval(clock, 1000)
