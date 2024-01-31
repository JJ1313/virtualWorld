class GraphEditor{
  constructor(canvas, graph){
    this.canvas = canvas;
    this.graph = graph;
    this.ctx = this.canvas.getContext('2d');
    this.#addEventListeners();
  }
  #addEventListeners(){
    this.canvas.addEventListener('mousedown', (event) => {
      const mouse = new Point(event.offsetX, event.offsetY);
      this.graph.addPoint(mouse);
    });
  }
  display(){
    this.graph.draw(this.ctx);
  }  
}