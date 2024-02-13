class Viewport{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.zoom = 1;

    this.#addEventListener();
  }

  #addEventListener(){
    this.canvas.addEventListener('wheel', this.#handleMouseWheel.bind(this));
  }

  #handleMouseWheel(event){
    const dir = Math.sign(event.deltaY);
    this.zomm += dir;
    console.log(dir);
  }
}