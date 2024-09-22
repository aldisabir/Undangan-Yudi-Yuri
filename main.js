const audio = document.getElementById ('bg-audio')
const playButton = document.getElementById ('play-btn');
const pauseButton = document.getElementById ('pause-btn');
const openButton = document.getElementById ('button')
const cover = document.getElementById ('cover')


playButton.addEventListener('click', function() {

    playButton.className = 'hidden'
    pauseButton.className = 'content min-h-9 min-w-6 max-w-9 rounded-full border-4 border-double bg-black text-sm text-yellow-500 border-yellow-500 py-1 px-2'
    audio.muted = true;
})

pauseButton.addEventListener('click', function() {

    playButton.className = 'content min-h-6 min-w-6 max-w-9 rounded-full border-4 border-double bg-black text-sm text-yellow-500 border-yellow-500 py-1 px-2'
    pauseButton.className = 'hidden'
    audio.muted = false;
})

openButton.addEventListener('click', function() {

    audio.muted = false;
    cover.className = 'hidden'
})