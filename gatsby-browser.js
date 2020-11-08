// custom CSS styles
require("./src/style.css")
// import 'typeface-montserrat'
// import "fontsource-montserrat/500-normal.css"
require("fontsource-montserrat/latin-400-normal.css")
require("fontsource-montserrat/latin-500-normal.css")

exports.onInitialClientRender = () => {
  // 最初の一回のみ
}
exports.onRouteUpdate = ({ location, prevLocation }) => {
  // ページを開くたび
  console.log('new pathname', location.pathname)
  console.log('old pathname', prevLocation ? prevLocation.pathname : null)

  function myFunc() {
    const mymenu = document.querySelector('.headB')
    if (mymenu.style.maxHeight) {
      mymenu.style.maxHeight = null
    } else {
      mymenu.style.maxHeight = mymenu.scrollHeight + 'px'
    }
  }
  const headC = document.querySelector('.headC')
  headC.addEventListener('click', function() {
    myFunc()
  })
}