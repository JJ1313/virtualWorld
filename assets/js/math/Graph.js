class Graph{
  constructor(points = [], segments = []){
    this.points = points;
    this.segments = segments;
  }
  draw(ctx){
    for(const seg of this.segments){
      seg.draw(ctx)
    }
    for(const point of this.points){
      point.draw(ctx)
    }
  }
  addPoint(point){
    this.points.push(point);
  }
  
  containsPoint(point){
    return this.points.find((p) => p.isEqualsTo(point));
  }

  tryAddPoint(point){
    if(!this.containsPoint(point)){
      this.addPoint(point);
      return true;
    }
    return false;
  }

  removePoint(point){
    const segments = this.getSegmentWithPoint(point);
    for(const seg of segments){
      this.removeSegment(seg);
    }
    this.points.splice(this.points.indexOf(point), 1);
  }

  addSegment(segment){
    this.segments.push(segment);
  }
  containsSegment(segment){
    return this.segments.find((s) => s.isEqualsTo(segment));
  }
  tryAddSegment(segment){
    if(!this.containsSegment(segment) && !segment.p1.isEqualsTo(segment.p2)){
      this.addSegment(segment);
      return true;
    }
    return false;
  }
  removeSegment(segment){
    this.segments.splice(this.segments.indexOf(segment), 1);
  }
  getSegmentWithPoint(point){
    let segments = [];
    for(const seg of this.segments){
      if (seg.includes(point) && !segments.includes(seg)){
        segments.push(seg);
      }
    }
    return segments;
  }
  dispose(){
    this.segments.length = 0;
    this.points.length = 0;
  }
}