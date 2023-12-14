import { process } from '/env';
import { Configuration, OPENAIApi } from 'openai';


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = openAIApi(configuration)

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

function fetchBotReply() {
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "Application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      'model': 'text-davinci-003',
      'prompt': 'Sound enthusiastic in five words or less'
    })
  }).then(r => r.json().then(data => 
    movieBossText.innerText = data.choices[0].text
  ))
}