myCanvas.width = 600;
myCanvas.height = 600;

const ctx = myCanvas.getContext("2d");

const p1 = new Point(200, 200);
const p2 = new Point(300, 400);
const p3 = new Point(200, 500);
const p4 = new Point(100, 300);

const s1 = new Segment(p1, p2)
const s2 = new Segment(p1, p3)
const s3 = new Segment(p1, p4)
const s4 = new Segment(p2, p4)

const graph = new Graph([p1,p2,p3,p4], [s1,s2,s3, s4]);

const viewport = new Viewport(myCanvas);
const graphEditor = new GraphEditor(viewport, graph);

animate();

function removeAll(){
  graph.dispose();
  animate();
}

function animate(){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.save();
  ctx.scale(1 / viewport.zoom, 1 / viewport.zoom);
  const offset = viewport.getOffset();
  ctx.translate(offset.x, offset.y);
  graphEditor.display();
  ctx.restore();
  requestAnimationFrame(animate);
}