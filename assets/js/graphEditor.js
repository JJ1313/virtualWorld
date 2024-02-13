class GraphEditor{
  constructor(viewport, graph){
    this.viewport = viewport;
    this.canvas = viewport.canvas;
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
    this.canvas.addEventListener('mouseup', () => {
      this.dragging = false;
    });
  }
  #handleMouseDown(event){
    // --- Right Click
    if(event.button == 2){
      if(this.selected){
        this.selected = null;
      }
      else if(this.hovered){
        this.#removePoint(this.hovered);
      }
    }
    // --- Left Click
    if(event.button == 0){
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
    this.mouse = this.viewport.getMouse(event);
    this.hovered = getNearestPoint(this.mouse, this.graph.points, 13 );
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
