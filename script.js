console.log("script.js loaded!");

const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to add a message to the chat display
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender + '-message'); // 'user-message' or 'bot-message'
    messageDiv.textContent = message;
    chatContainer.appendChild(messageDiv);

    // Scroll to the bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to generate bot responses based on user input
function getBotResponse(input) {
    if (input.includes('hi') || input.includes('hello')){
        return "Hello! What's on your mind regarding sleep today? You can ask me about: Sleep hygiene, Relaxation techniques, Foods for sleep, Sleep Gear, or Trouble Sleeping?";
    // Sleep Hygiene Responses
    } else if (input.includes('sleep hygiene') || input.includes('hygiene') || input.includes('habits') || input.includes('routine') || input.includes('best practices') || input.includes('tips')) {
        return "Good sleep hygiene involves several practices. Do you want to know about: consistent schedule, bedroom environment, pre-sleep routine, or what to avoid?";
    } else if (input.includes('consistent schedule') || input.includes('schedule')) {
        return "Try to go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's natural sleep-wake cycle.";
    } else if (input.includes('bedroom environment') || input.includes('environment')) {
        return "Make sure your bedroom is dark, quiet, and cool. Consider blackout curtains, earplugs, or a fan for white noise.";
    } else if (input.includes('pre-sleep routine') || input.includes('routine') ) {
        return "Establish a relaxing routine before bed, like reading a book, taking a warm bath, or listening to calming music. Avoid screens for at least an hour before sleep.";
    } else if (input.includes('what to avoid')) {
        return "Avoid caffeine and heavy meals close to bedtime. Nicotine and alcohol can also disrupt sleep, even if they initially make you feel drowsy.";
    // Relaxation Techniques Responses
    } else if (input.includes('relax') || input.includes('calm down') || input.includes('meditation') || input.includes('breathing') || input.includes('stress')) {
        return "Relaxation can significantly improve sleep. Would you like to hear about: deep breathing, mindfulness, or gentle stretching?";
    } else if (input.includes('deep breathing') || input.includes('breathing')) {
        return "Try 4-7-8 breathing: Inhale for 4 seconds, hold for 7, exhale for 8. Repeat a few times. It's very calming!";
    } else if (input.includes('mindfulness')) {
        return "Focus on the present moment. Notice your breath, the feel of your bed, and sounds around you without judgment. If your mind wanders, gently bring it back.";
    } else if (input.includes('gentle stretching') || input.includes('stretching')) {
        return "Light stretches, especially for your neck, shoulders, and legs, can release tension. Avoid vigorous exercise close to bedtime.";
    // Foods for Sleep (What to eat/avoid)
    } else if (input.includes('food') || input.includes('eat') || input.includes('diet') || input.includes('drink') || input.includes('nutrition')) {
        return "Certain foods can help or hinder sleep. Would you like to know about: foods to eat or foods to avoid?";
    } else if (input.includes('foods to eat')){
        return "Foods rich in tryptophan (like turkey, chicken, nuts, seeds, milk) or magnesium (leafy greens, almonds) can sometimes promote sleep. A light snack is best if you're hungry before bed.";
    } else if (input.includes('foods to avoid')){
        return "Definitely avoid heavy, fatty, or spicy meals close to bedtime. Also, limit caffeine and alcohol several hours before you plan to sleep.";
    //Sleep Gear 
    } else if (input.includes('gear') || input.includes('equipment') || input.includes('products') || input.includes('sheets') || input.includes('comforter') || input.includes('duvet') || input.includes('bedding') || input.includes('pillow') || input.includes('mattress')) { 
        return "Great question! The right sleep gear can make a big difference. Are you interested in: sheets, comforters, pillows, mattresses, or general bedding tips?";
    } else if (input.includes('sheets') || input.includes('bed sheets') || input.includes('sheet type') || input.includes('thread count')) {
        return "Choosing the right sheets depends on your preference and climate. For breathability and coolness, consider cotton (especially percale weaves) or linen. For softness and warmth, flannel or sateen cotton can be good. Thread count often indicates softness, but anything from 200-800 is generally good. Beyond that, it's often marketing.";
    } else if (input.includes('comforters') || input.includes('duvets') || input.includes('blankets') || input.includes('warmth') || input.includes('material')) {
        return "Comforters and duvets come in various fills and weights. Down or down alternative are popular for their warmth-to-weight ratio and fluffiness. Wool is great for temperature regulation, keeping you warm in winter and cool in summer. Cotton or synthetic fills are often more affordable and hypoallergenic. Consider your room temperature and personal warmth preference when choosing the right 'tog' rating (for duvets) or fill power.";
    } else if (input.includes('pillows') || input.includes('neck support') || input.includes('pillow type') || input.includes('sleep position')) {
        return "The best pillow supports your head and neck, keeping your spine aligned. Your sleep position is key: Side sleepers often need a firmer, thicker pillow to fill the gap between their head and shoulder. Back sleepers typically need a medium-firm pillow that supports the neck's natural curve without pushing the head too far forward. Stomach sleepers usually need a very soft, flat pillow, or sometimes no pillow at all, to avoid straining the neck. Common materials include memory foam (conforming), latex (supportive and resilient), down/feather (moldable and soft), or synthetic fills (hypoallergenic and adjustable).";
    } else if (input.includes('mattresses') || input.includes('bed') || input.includes('firmness') || input.includes('mattress type') || input.includes('support')) {
        return "A good mattress is crucial for sleep quality and spinal health. Innerspring mattresses offer good bounce and airflow. Memory foam conforms closely to your body, relieving pressure points. Latex mattresses are durable, resilient, and can be natural. Hybrid mattresses combine elements of innerspring and foam for a balanced feel. Firmness is subjective but generally, it should provide support without being uncomfortably hard. Your ideal firmness depends on your weight, sleep position, and personal preference. Look for one that keeps your spine in a neutral alignment.";
    } else if (input.includes('general bedding') || input.includes('bedding tips') || input.includes('care for bedding') || input.includes('bedding')|| input.includes('general')) {
        return "Here are some general tips for your bedding: Wash sheets regularly (every 1-2 weeks) for hygiene. Consider layering so you can adjust your warmth easily throughout the night. Replace pillows every 1-2 years, as they lose support and accumulate allergens. Mattresses usually need replacing every 7-10 years, depending on their type and quality.";
    //Why can't I sleep
    } else if (input.includes("can't sleep") || input.includes('insomnia') || input.includes('awake') || input.includes('trouble sleeping')) {
        return `Many things can contribute to not being able to sleep. Common reasons include:stress or worry, poor sleep habits, too much screen time, caffeine or alcohol, irregular schedule.
        _____________________________ Important disclaimer: If your sleep problems are severe or persistent, please consult a healthcare professional. I am a chatbot and cannot provide medical advice.`;
    //thanks done  good bye
    } else if (input.includes("thanks") || input.includes('done') || input.includes('goodbye') || input.includes('see you')) {
        return "You're welcome! I hope I was able to help. Sweet dreams! Come back anytime.";
    //error message
    } else
        return "I'm sorry, I didn't understand that. Can you ask about sleep hygiene, relaxation techniques, foods for sleep, sleep gear, or why you can't sleep?"; 
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) { // Only send if message is not empty
        addMessage(message, 'user');
        userInput.value = ''; // Clear input field

        // Generate bot response based on user input
        setTimeout(() => {
            let botResponse = getBotResponse(message.toLowerCase());
            addMessage(botResponse, 'bot');
        }, 500); // Simulate typing delay
    }
});

// Event listener for Enter key press
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click(); // Trigger the send button click
    }
});
