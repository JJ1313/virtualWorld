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
  // ============ POINTS ============
  addPoint(point){
    this.points.push(point);
  }
  removePoint(point){
    const segments = this.getSegmentsWithPoint(point);
    for(const seg of segments){
      this.removeSegment(seg);
    }
    this.points.splice(this.points.indexOf(point), 1);
  }
  tryAddPoint(point){
    if(!this.containsPoint(point)){
      this.addPoint(point);
      return true;
    }
    return false;
  }
  containsPoint(point){
    return this.points.find((p) => p.isEqualsTo(point));
  }

  // ============ SEGMENTS ============ 
  addSegment(segment){
    this.segments.push(segment);
  }
  removeSegment(segment){
    this.segments.splice(this.segments.indexOf(segment), 1);
  }
  tryAddSegment(segment){
    if(!this.containsSegment(segment) && !segment.p1.isEqualsTo(segment.p2)){
      this.addSegment(segment);
      return true;
    }
    return false;
  }
  containsSegment(segment){
    return this.segments.find((s) => s.isEqualsTo(segment));
  }
  getSegmentsWithPoint(point){
    let segments = [];
    for(const seg of this.segments){
      if (seg.includes(point) && !segments.includes(seg)){
        segments.push(seg);
      }
    }
    return segments;
  }
  
  // ============ GENERAL ============ 
  dispose(){
    this.segments.length = 0;
    this.points.length = 0;
  }
}