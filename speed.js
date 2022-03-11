const prev = Date.now()
for(let i = 0; i < 1000000000 ; i++){}
const aft = Date.now()
document.write(`${aft - prev}ms 걸림<br>`)
document.write(navigator.userAgent)