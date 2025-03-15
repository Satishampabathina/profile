document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() !== "") {
    addMessage(userInput, 'user');
    document.getElementById('user-input').value = ""; // clear the input field
    botResponse(userInput);
  }
}

function addMessage(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender + '-message');
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function botResponse(userInput) {
  let response = "Sorry, I didn't quite get that.";
  
  if (userInput.toLowerCase().includes('restaurant')) {
    response = "We have a variety of restaurants. What type of cuisine are you looking for?";
  } else if (userInput.toLowerCase().includes('pizza')) {
    response = "Here are some popular pizza options: Margherita, Pepperoni, BBQ Chicken.";
  } else if (userInput.toLowerCase().includes('burger')) {
    response = "Try our delicious burgers: Classic Cheeseburger, Veggie Burger, BBQ Burger.";
  } else if (userInput.toLowerCase().includes('order')) {
    response = "You can place an order by visiting your preferred restaurant on the app.";
  } else if (userInput.toLowerCase().includes('food')) {
    response = "We offer a variety of cuisines including Indian, Chinese, Italian, and more!";
  }
  
  setTimeout(() => addMessage(response, 'bot'), 1000);
}
