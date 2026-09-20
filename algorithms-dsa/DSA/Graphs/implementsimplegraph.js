class Graph{
    constructor(){
        this.adjacenyList = {}
    }
    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.adjacenyList[vertex] = []
        }
    }
    addEdge(v1,v2){
        this.adjacenyList[v1].push(v2)
        this.adjacenyList[v2].push(v1)
    }
    removeEdge(v1,v2){
        this.adjacenyList[v1] = this.adjacenyList[v1].filter(v=>v!==v2);
        this.adjacenyList[v2] = this.adjacenyList[v2].filter(v=>v!==v1);
    }
    removeVertex(vertex){
        while(this.adjacenyList[vertex].length){
            const adjacentVertex = this.adjacenyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacenyList[vertex]
    }
    printGraph(){
        for(let vertex in this.adjacenyList){
            console.log(`${vertex} -> ${this.adjacenyList[vertex].join(", ")}`)
        }
    }

}



const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","C")
graph.printGraph()