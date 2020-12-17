function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', () => {
    let text = document.getElementById('text')
    text.hidden = !text.hidden
  })
}
