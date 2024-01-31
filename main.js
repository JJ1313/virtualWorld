myCanvas.width = 600;
myCanvas.height = 600;
/**
 * @type {number} gridScale separation between lines on the grid
 * @type {Graph} graph
 * 
 */

const ctx = myCanvas.getContext("2d");

const gridScale= 50;
const grid = new Grid(gridScale);

const p1 = new Point(200, 200);
const p2 = new Point(300, 400);
const p3 = new Point(200, 500);
const p4 = new Point(100, 300);

const s1 = new Segment(p1, p2)
const s2 = new Segment(p1, p3)
const s3 = new Segment(p1, p4)
const s4 = new Segment(p2, p4)

const graph = new Graph([p1,p2,p3,p4], [s1,s2,s3, s4]);
grid.draw(ctx);
graph.draw(ctx);


function addRandomPoint(){
  const px = Math.random() * myCanvas.width;
  const py = Math.random() * myCanvas.height;
  const success = graph.tryAddPoint(new Point(px, py));
  console.log(`addPoint: ${success}`);
  reloadCanvas(ctx);
}

function addRandomSegment(){
  const index1 = Math.floor(Math.random() * graph.points.length);
  const index2 = Math.floor(Math.random() * graph.points.length);
  const success = graph.tryAddSegment(new Segment(graph.points[index1], graph.points[index2]));

  console.log(`addSegment: ${success}`);

  reloadCanvas(ctx);
}

function removeRandomSegment(){
  if(graph.segments.length == 0){
    console.log("No segment to remove");
    return
  }
  const index = Math.floor(Math.random() * graph.segments.length);
  graph.removeSegment(graph.segments[index]);
  reloadCanvas(ctx);
}
function removeRandomPoint(){
  if(graph.points.length == 0){
    console.log("No points to remove");
    return
  }
  const index = Math.floor(Math.random() * graph.points.length)
  graph.removePoint(graph.points[index]);
  reloadCanvas(ctx);
}
function removeAll(){
  graph.dispose();
  reloadCanvas(ctx);
}

function reloadCanvas(ctx){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  grid.draw(ctx);
  graph.draw(ctx);
}