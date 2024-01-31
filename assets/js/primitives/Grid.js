class Grid{
  /**
   * @param {number} scale  separation between lines on the grid
   */

  constructor(scale){
    this.scale = scale;
  }
  draw(ctx, width = 1, color = "gray"){
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    for(let i=0; i < myCanvas.width; i += this.scale){
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, myCanvas.height);
      ctx.stroke();
    }
    for(let i=0; i < myCanvas.height; i += this.scale){
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(myCanvas.width, i);
      ctx.stroke();
    } 
  }
}