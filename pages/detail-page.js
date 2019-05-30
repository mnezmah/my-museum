function submitComment() {
  const inputField = document.getElementById('name')
  const name = inputField.value
  const textArea = document.getElementById('msg')
  const message = textArea.value

  //creating new section
  const comment = document.createElement('section')
  const heading = document.createElement('h3')
  const paragraph = document.createElement('p')

  //adjusting newly created section
  heading.innerHTML = `${name} said:`
  paragraph.innerHTML = message
  comment.classList.add('comment')
  comment.appendChild(heading)
  comment.append(paragraph)

  //displaying elements on page
  commentSection = document.getElementById('comments')
  console.log(commentSection)
  commentSection.appendChild(comment)

  //clearing the form
  inputField.value = null
  textArea.value = null

  //error messages
  if (!name || !message) {
    alert("Please fill in both, your name and the message")
    return null
  }
  if (message.lenght > 280) {
    alert('your message is too long')
    return true
  }
  return false
}

