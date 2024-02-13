class GraphEditor{
  constructor(canvas, graph){
    this.canvas = canvas;
    this.graph = graph;

    this.selected = null;
    this.hovered = null;
    this.mouse = null;
    this.dragging = true;

    this.ctx = this.canvas.getContext('2d');
    this.#addEventListeners();
  }
  #addEventListeners(){

    this.canvas.addEventListener('mousedown', this.#handleMouseDown.bind(this));

    this.canvas.addEventListener('mousemove', this.#handleMouseMove.bind(this));

    this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
    this.canvas.addEventListener('mouseup', () => this.dragging = false);
  }
  #handleMouseDown(event){
    if(event.button == 2){ // Right Click
      if(this.selected){
        this.selected = null;
      }
      else if(this.hovered){
        this.#removePoint(this.hovered);
      }
    }
    if(event.button == 0){ // Left Click
      if(this.hovered){
        this.#selectPoint(this.hovered)
        this.dragging = true;
        return
      }
      this.graph.addPoint(this.mouse);
      this.#selectPoint(this.mouse);
      this.hovered = this.mouse;
    }
  }

  #handleMouseMove(event){
    this.mouse = new Point(event.offsetX, event.offsetY);
    this.hovered = getNearestPoint(this.mouse, this.graph.points, 13);
    if(this.dragging && this.selected){
      this.selected.x = this.mouse.x;
      this.selected.y = this.mouse.y;
    }
  }

  #selectPoint(point){
    if(this.selected){
      this.graph.tryAddSegment(new Segment(this.selected, point));
    }
    this.selected = point;
  }

  #removePoint(point){
    this.graph.removePoint(point);
    if(this.selected == point){
      this.selected = null;
    }
    this.hovered = null;
  }
  display(){
    this.graph.draw(this.ctx);
    if(this.hovered){
      this.hovered.draw(this.ctx, {outline: true})
    }
    if(this.selected){
      const intent = this.hovered ? this.hovered : this.mouse;
      new Segment(this.selected, intent).draw(ctx, {dash: [5,5]});
      this.selected.draw(this.ctx, {fill:  true})
    }
  }  
}
