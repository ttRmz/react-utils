export function copyToClipboard(text, callback = () => {}) {
  const createdElement = document.createElement('textarea')
  const iOSNavigator = window.navigator.userAgent.match(/ipad|iphone/i)
  const yPosition = window.pageYOffset || document.documentElement.scrollTop

  createdElement.contentEditable = true
  createdElement.readOnly = false
  createdElement.value = text
  createdElement.style.border = '0'
  createdElement.style.padding = '0'
  createdElement.style.margin = '0'
  createdElement.style.position = 'absolute'

  createdElement.style.top = `${yPosition}px`

  document.body.appendChild(createdElement)

  if (iOSNavigator) {
    const range = document.createRange()
    range.selectNodeContents(createdElement)

    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
    createdElement.setSelectionRange(0, 999999)
  } else {
    createdElement.select()
  }

  let error = null

  try {
    document.execCommand('copy')
  } catch {
    try {
      window.clipboardData.setData('text', text)
    } catch (err) {
      error = err
    }
  }

  document.body.removeChild(createdElement)

  callback(error)
}
