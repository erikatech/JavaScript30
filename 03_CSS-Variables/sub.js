'use strict';

{
  const hl = document.querySelector('hl');
  const img = document.getElementById('img');
  const spacing = document.getElementById('spacing');
  const blur = document.getElementById('blur');
  const base = document.getElementById('base');

  blur.addEventListener('input', () => {
    img.style.filter = `blur(${blur.value}px)`;
  });

  spacing.addEventListener('input', () => {
    img.style.padding = `${spacing.value}px`;
  });

  base.addEventListener('input', () => {
    hl.style.color = `${base.value}`;
    img.style.background = `${base.value}`;
  });
}