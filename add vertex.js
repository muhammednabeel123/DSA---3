class Graph{
    constructor(){
        this.adjacencyList = {}

    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
        
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
}

const g = new Graph()

g.addVertex("tokyo")
g.addVertex("dallas")
g.addVertex("aspin")

g.addEdge("tokyo","dallas")
g.addEdge("dallas","aspin")
console.log(g);