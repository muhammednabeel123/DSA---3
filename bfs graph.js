class Graph{
    constructor(){
        this.list =[]
    }
    addVertex(key){
        if(!this.list[key]){
            this.list[key]  = new Set()
        }
    }
    addEdges(vertex,edge){
        if(!this.list[vertex]){
            this.addVertex(vertex)
        }
        if(!this.list[edge]){
            this.addVertex(edge)
        }
        this.list[vertex].add(edge)
        this.list[edge].add(vertex)
    }
    removeEdge(vertex,edge){
        this.list[vertex].delete(edge)
        this.list[edge].delete(vertex)
    }
    removeVertex(vertex){
        if(!this.item[vertex]){
            return null
        }
        for(let values  of this.list[vertex]){
            this.removeEdge(vertex,values)
        }
        delete this.item[vertex]
    }
    display(){
        for(let vertex in this.list){
            console.log(vertex +'->'+[...this.list[vertex]]);
        }
    }
    dfs(vertex){
        let visited = new Set()
        this.dfsHelper(vertex,visited)
    }
    dfsHelper(vertex,visited){
        visited.add(vertex)
        console.log(visited);
        for(let vertices of this.list[vertex]){
            if(!visited.has(vertices)){
                this.dfsHelper(vertices,visited)
            }
        }
    }
    bfs(vertex){
        let visited = new Set()
        visited.add(vertex)
       
        let queue =[]
        queue.push(vertex)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr);
            for(let vertices of this.list[vertex]){
                if(!visited.has(vertices)){
                    visited.add(vertices)
                    queue.push(vertices)
                }
            }
        }
        for(let key in this.list){
            if(!visited.has(key)){
                console.log(key,"this is key");
            }
        }
    }
}
const graph = new Graph()

graph.addVertex('P')
graph.addVertex('R')
graph.addEdges('P','R')

graph.addEdges('R','A')


graph.dfs('P')
console.log('......');
graph.bfs('P')
graph.display()