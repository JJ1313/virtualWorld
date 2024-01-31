class Segment{
  constructor(p1, p2){
    this.p1 = p1;
    this.p2 = p2;
  }
  draw(ctx, width = 2, color = "black"){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }
  isEqualsTo(segment){
    return  this.includes(segment.p1) && this.includes(segment.p2)
  }
  includes(point){
    return this.p1.isEqualsTo(point) || this.p2.isEqualsTo(point)
  }
}