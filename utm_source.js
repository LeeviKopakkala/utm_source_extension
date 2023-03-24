const params = new URLSearchParams(window.location.search);
const url = new URL(window.location.href)
const utm_source = sessionStorage.getItem("utm_source")
if (!utm_source && params.get('utm_source')) {
  sessionStorage.setItem('utm_source', params.get('utm_source'))
  const session = sessionStorage.getItem('utm_source')
  utm_source = params.get(utm_source)
}
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.forms
  for (let form of forms) {
    let input = document.createElement('input')
    input.setAttribute('name', 'utm_source')
    input.setAttribute('value', utm_source)
    input.setAttribute('type', "hidden")
    form.appendChild(input)
  }
});
