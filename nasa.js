const div = document.getElementById('content');
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const p = document.querySelector('p');

const getImage = async function () {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=HUWYPwJ3rbnsa7cJzd4DIqETXNV6cFzeFMAUoVoA');
  const data = await response.json();
  console.log(data);
  return data;
} 

const loadPage = async function () {
  const data = await getImage();
  h1.textContent = data.title;
  img.src = data.url;
  p.textContent = data.explanation;
  console.log(data.title);
  console.log(data.url);
  console.log(data.explanation);
  console.log(data);
}

btn.addEventListener('click', () => {
  loadPage();
})

