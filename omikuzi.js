'use strict';

{
  // btnIDを取得。
  // btnIDにクリックイベントを付与。
  // 定数をランダムに表示されるよう挿入。
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const cat = ['うに', 'ぎん', 'さくら', 'つくよ']
    const n = Math.floor(Math.random() * cat.length);
    btn.textContent = cat[n];
  });
}