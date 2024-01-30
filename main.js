myCanvas.width = 700;
myCanvas.height = 700;

const ctx = myCanvas.getContext("2d");
console.log(ctx);

const p1 = new Point(200, 200);
const p2 = new Point(300, 400);
const p3 = new Point(600, 500);
const p4 = new Point(100, 600);

const s1 = new Segment(p1, p2)
const s2 = new Segment(p1, p3)
const s3 = new Segment(p1, p4)
const s4 = new Segment(p2, p4)

const graph = new Graph([p1,p2,p3,p4], [s1,s2,s3, s4]);
graph.draw(ctx);