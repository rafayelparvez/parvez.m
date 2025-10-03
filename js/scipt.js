




  // Color list
  const colors = [
    "#ff004f", // col3
    "#01c986", // col1
    "#ae01c9", // col9
    "#01b5c9", // col8
    "#c93001", // col7
    "#c9a101", // col6
    "#19c901", // col5
    "#f518ba"  // col4
  ];

  let index = 0;

  function changeMainColor() {
    document.documentElement.style.setProperty("--col1", colors[index]);
    index = (index + 1) % colors.length;
  }

  // প্রথমবার রান হবে
  changeMainColor();

  // প্রতি ২ মিনিটে auto change
  setInterval(changeMainColor, 10000);



// ABOUT TAB JS
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabname){
  for(tabLink of tabLinks){
    tabLink.classList.remove("active-link");
  }
  for(tabContent of tabContents){
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");

}

// FORM QUERY JS
const scriptURL = 'https://script.google.com/macros/s/AKfycbwmFSio5GcAN8Ad2une9BU8LMtq2cv4tLaVkfxQiFnJVl5-jiZacHw3PTSXJAVOHQhk/exec '
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent succcessfully"
        setTimeout(function(){
          msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


// MEDIA QUREY JS
var offCanvs = document.getElementById('offcanvas')

function openMenu(){
  offCanvs.style.right = '0';
}
function closeMenu(){
  offCanvs.style.right = '-200px';
}