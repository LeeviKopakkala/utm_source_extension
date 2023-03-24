# utm_source_extension

Universal JS script to find utm_source in website url, attach it to session and add as hidden field to all forms.

## Usage

### General usage

1. Copy content of utm_source_inline.html.
2. Paste it to end of site `body` tag.

Field `utm_source` is automatically attached to all forms within the page.

### Webflow

1. Copy content of utm_source_inline.html.
2. Paste it to Project settings -> Custom Code -> Footer Settings.

Example:

```html
<!--UTM_SOURCE CODE-->
<script>
const TAG = 'utm_source'

const params = new URLSearchParams(window.location.search);
const url = new URL(window.location.href)
const utm_source = sessionStorage.getItem(TAG)
if (!utm_source && params.get(TAG)) {
  sessionStorage.setItem(TAG, params.get(TAG))
  const session = sessionStorage.getItem(TAG)
  utm_source = params.get(utm_source)
}
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.forms
  for (let form of forms) {
    let input = document.createElement('input')
    input.setAttribute('name', TAG)
    input.setAttribute('value', utm_source)
    input.setAttribute('type', "hidden")
    form.appendChild(input)
  }
});
</script>
<!--UTM_SOURCE CODE END-->
```

Field `utm_source` is automatically attached to all forms within the page.
