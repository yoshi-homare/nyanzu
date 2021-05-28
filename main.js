'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const neko = ['うに', 'ぎん', 'さくら', 'つくよ']
    const n = Math.floor(Math.random() * neko.length);
    btn.textContent = neko[n];
  });
}