class AudioManager {
    constructor() {
      this.audio = null;
    }
  
    play(src) {
      if (this.audio) {
        this.audio.pause();
      }
      this.audio = new Audio(src);
      this.audio.play();
    }
  
    pause() {
      if (this.audio) {
        this.audio.pause();
      }
    }
  
  }
  
  export default new AudioManager();
  