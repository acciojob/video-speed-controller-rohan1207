const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



const video=document.querySelector(".video");
const playbutton=document.querySelector(".player__button");
const rewind=document.querySelector(".rewind");
const skip=document.querySelector(".skip");
const progressbar=document.querySelector(".progress");
const progressfield=document.querySelector(".progress__filled");
const volume=document.querySelector(".volume");
const playbackSpeed=document.querySelector(".playbackSpeed");
const speedtext=document.querySelector(".speed");


playbutton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playbutton.textContent = '❚ ❚'; 
  } else {
    video.pause();
    playbutton.textContent = '►'; 
  }
});


video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressfield.style.width = `${progress}%`;
});

progressbar.addEventListener('click', (e) => {
  const clickX = e.offsetX;
  const progressWidth = progressbar.offsetWidth;
  const seekTime = (clickX / progressWidth) * video.duration;
  video.currentTime = seekTime;
});
volume.addEventListener('input', (e) => {
  video.volume = e.target.value;
});

playbackSpeed.addEventListener('input', (e) => {
  const speed = e.target.value;
  video.playbackRate = speed;
  speedtextext.textContent = `${speed}×`;
});

rewind.addEventListener('click', () => {
  video.currentTime -= 10;
});

skip.addEventListener('click',()=>{
	video.currentTime+=25;
})