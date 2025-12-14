<x-layout title="Animation loops in JS" stylesheet="js-animation.css" script="js-animation.ts">
  <div class="square"></div>

  <div class="controls">
    <button id="pause">Pause</button>
    <button id="play">Play</button>
    <button id="reverse">Reverse</button>
    <input id="slider" type="range" value="0" min="0" max="1" step="0.01">
  </div>
  <p>The current progress of the animation is <span id="progress"></span></p>
</x-layout>