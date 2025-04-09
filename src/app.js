/*
* File: app.js
* Author: Vámosi László Ádám
* Copyright: 2025, Vámosi László Ádám
* Group: Szoft I-N
* Date: 2025-04-09
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

const radiusInput = document.querySelector('#radius')
const heightInput = document.querySelector('#height')
const volumeInput = document.querySelector('#volume')
const calcButton = document.querySelector('#calcButton')

calcButton.addEventListener('click', () => {
    const radius = Number(radiusInput.value);
    const height = Number(heightInput.value);
    const volume = 1.0/3.0 * Math.pow(radius, 2) * Math.PI * height;

    console.log(volume.toFixed(2))
    volumeInput.value = String(volume.toFixed(2));
})