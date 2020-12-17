function hideSelf() {
  document.querySelector('.hide-self-button').addEventListener('click', (event) => {
    let target = event.target
    target.hidden = !target.hidden;
  })
}
