// 自動判斷要加幾層 ../
function getPrefixToRoot() {
  const path = location.pathname
  const depth = path.split('/').length - 2 // 減掉空字串和檔名本身
  return '../'.repeat(depth)
}

document.addEventListener('DOMContentLoaded', () => {
  const prefix = getPrefixToRoot()

  fetch(`${prefix}components/header.html`)
    .then(res => res.text())
    .then(data => {
      document.querySelector('#header-include').innerHTML = data
    })

  fetch(`${prefix}components/footer.html`)
    .then(res => res.text())
    .then(data => {
      document.querySelector('#footer-include').innerHTML = data
    })
})
