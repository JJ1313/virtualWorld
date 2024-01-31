class GraphEditor{
  constructor(canvas, graph){
    this.canvas = canvas;
    this.graph = graph;
    this.selected = null;
    this.hovered = null;
    this.ctx = this.canvas.getContext('2d');
    this.#addEventListeners();
  }
  #addEventListeners(){
    this.canvas.addEventListener('mousedown', (event) => {
      const mouse = new Point(event.offsetX, event.offsetY);
      this.hovered = getNearestPoint(mouse, this.graph.points, 13);
      if(this.hovered){
        this.selected = this.hovered;
        return
      }
      this.graph.addPoint(mouse);
      this.selected = mouse;
    });

    this.canvas.addEventListener('mousemove', (event) => {

    });
  }
  display(){
    this.graph.draw(this.ctx);
    if(this.selected){
      this.selected.draw(this.ctx, {outline:  true})
    }
  }  
}