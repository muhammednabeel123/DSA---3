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
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v !== vertex2 )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1 )

    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjustVertex = this.adjacencyList[vertex].pop
        }
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;
    
        visited[start] = true;
        while (stack.length) {
            console.log("Stack:", stack);
            currentVertex = stack.pop();
            console.log("Current Vertex:", currentVertex);
            result.push(currentVertex);
    
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
    
        return result;
    }
    
}

const g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addVertex("H")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")


const result = g.depthFirstIterative("A");
console.log("DFS Result:", result);
