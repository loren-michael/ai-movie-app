import { process } from '/env';
// import openai from 'openai';
import { Configuration, OPENAIApi } from 'openai';


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = OPENAIApi(configuration)

const setupTextarea = document.getElementById('setup-textarea') ;
const setupInputContainer = document.getElementById('setup-input-container');
const movieBossText = document.getElementById('movie-boss-text');

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    const userInput = setupTextarea.value
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`;
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
    fetchBotReply(userInput);
  }
});

async function fetchBotReply(outline) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Generate a short message to say "${outline}" sounds interesting and that you need some minutes to think about it. Mention one aspect of the sentence.`,
    max_tokens: 60
  });
  movieBossText.innerText = response.data.choices[0].text.trim();
}