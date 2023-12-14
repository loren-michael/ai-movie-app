import { process } from '/env';
import openai from 'openai';
import { Configuration, OPENAIApi } from 'openai';


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = OPENAIApi(configuration)

const setupTextarea = document.getElementById('setup-textarea') ;
const setupInputContainer = document.getElementById('setup-input-container');
const movieBossText = document.getElementById('movie-boss-text');

document.getElementById("send-btn").addEventListener("click", () => {
  // if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`
  // }
  fetchBotReply();
});

async function fetchBotReply() {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Sound enthusiastic in five words or less'
  });
  movieBossText.innerText = response.data.choices[0].text.trim();
}