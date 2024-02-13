class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  draw(ctx, {size = 18, color = '#000', outline = false, fill = false} = {}){
    const rad = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
    ctx.fill();
    if(outline){
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#222';
      ctx.arc(this.x, this.y, 1.3 * rad, 0, Math.PI * 2)
      ctx.stroke();
    }
    if(fill){
      ctx.beginPath();
      ctx.fillStyle = '#A9B388';
      ctx.arc(this.x, this.y, rad * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  isEqualsTo(point){
    return this.x == point.x && this.y == point.y;
  }
}
