class Segment{
  constructor(p1, p2){
    this.p1 = p1;
    this.p2 = p2;
  }
  draw(ctx, {width = 2, color = "#000", dash = []} = {}){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.setLineDash(dash);
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  isEqualsTo(segment){
    return  this.includes(segment.p1) && this.includes(segment.p2)
  }
  includes(point){
    return this.p1.isEqualsTo(point) || this.p2.isEqualsTo(point)
  }
}