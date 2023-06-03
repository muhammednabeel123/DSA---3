class heap{
    constructor(){
        this.heap = []
    }
   
   Minheap(array){
    this.buildheap(array)


   }
   
   buildheap(i){
    for(let i = this.parent(this.heap.length-1);i>=0;i--){
        let endindex = this.heap.length-1
        let leftindex = this.leftChild(i)

        while(leftindex <= endindex){
            let rightindex = this.rightChild(i)
            let shifttobe
            if(rightindex <= endindex && this.heap[rightindex] < this.heap[leftindex] ){
                shifttobe = rightindex
            }else{
               shifttobe =  leftindex 
            }

            if(this.heap[current] > this.heap[shifttobe] ){
                [this.heap[current],this.heap[shifttobe] ] = [this.heap[shifttobe],this.heap[current]]
            }


        }
    }
   }

   shiftup(i){
    let parent = this.parent(i)
    while(i>0 && this.heap[i] <this.heap[parent] ){
        [this.heap[i],this.heap[parent] ] = [this.heap[parent],this.heap[i]]
        i = parent
        parent = this.parent(i) 
    }
   }

parent(i){
        return Math.floor((i-1)/2)

    }

remove(){
    [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
    this.heap.pop()
    this.shiftDown(0)
}

leftChild(i){
    return Math.floor((i*2)+1)
}
rightChild(i){
    return Math.floor((i*2)+2)
}

}



class Node {
    constructor(){
        this.children = {}
        this.end = false
    }
    
}

class Trie {
    constructor(){
        this.root = new Node()
    }

    insertion(word){
        let currents = this.root
        for(let i = 0 ; i< word.length ;i++){
            for(let j = i; j<word.length; j++ ){
               let charToinsert = word[i]
                if(!(this.root.children[charToinsert])){
                    this.root.children[charToinsert] = new Node()
                }
                currents = this.root.children[charToinsert]
            }
             
             currents = this.root
        }
        currents.end = true
        return this.root

    }

    contains(word){
        let curr = this.root
        let charToInsert
        for(let i = 0 ; i<word.length ; i++ ){
          for(let j = i; j<word.length; j++){
             charToInsert = word[i]
            console.log(charToInsert,"this");
            if(!(charToInsert in curr.children)){
                return false
            }
            else{
                curr = curr.children[charToInsert]
            }
          }

        }
    }
}

let trie = new Trie()

console.log(trie.insertion("hello"));
console.log(trie.contains("hello"));


class Graph {
    constructor(){
        this.adjacenctlist = {}

    }

    addvertex(vertex){
        this.adjacenctlist[vertex] = []
    }

    addEdge(v1,v2){
        this.addvertex[v1].push(v2)
        this.addvertex[v2].push(v1)
    }

    removeEdge(v1,v2){
        this.adjacenctlist[v1].filter(vertex => vertex !== v2 )
    }

    removeVertex(vertex){
        while(this.adjacenctlist[vertex].length){
         let edge  =  this.adjacenctlist.pop()
         this.removeEdge(edge,vertex)
        }
        delete this.adjacenctlist[vertex]
    }
    dfs(start){
        let stack = [start]
        let visited = {}
        let result = []
        visited[start] = true
        let currentVertex
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacenctlist[currentVertex].forEach(element => { 
                if(!visited[element]){
                    visited[element] = true
                    stack.push(element)
                }
                
            }); 
        }
        return result;
    }

    bfs(start){
       let visited = new Set()
       visited.add(start)
       let queue = []
       queue.push(start)
       while(queue.length){
        let curr = queue.shift()
        for(let vertex of this.adjacenctlist[start]){
            if(!visited){
                visited.add(vertex)
                queue.push(vertex)
            }
        }
       }

       for(let keys of this.adjacenctlist){
        if(!visited.has(keys)){
            console.log(keys);
        }
       }

    }

    depth(start){
        let stack = [start]
        let visited = {}
        let result = []
        visited[start] = true

        while(stack.length){
            curr = stack.pop()
            result.push(curr)
            this.adjacenctlist[curr].forEach(element =>{
                if(!visited[element]){
                    visited[element] = true
                    result.push(element)
                }
            } ) 
        }
        return result
    }

    breath(start){
        let visited = new Set()
        visited.add(start)
        let queue = []
        queue.push(start)
        while(queue.length){
            let current = queue.shift()
            for(let vertex of this.list[current] ){
                if(!visited){
                    visited.add(vertex)
                    queue.push(vertex)
                }
            }
        }
    }

    bfsBinary(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            curr = this.queue.shift()
            if(curr.left){
                queue.push(curr.left)
            }
            else{
                queue.push(curr.right)
            }
        }

    }

    search(root,value){
        if(!root){
            return false
        }

        if(root.value === value){
            return true
        }
        if(root.value < value){
            return this.search(root.left,value)

        }
        if(root.value > value){
            return this.search(root.right,value)
        }

        else{
            return null
        }
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
        }
        else{
            this.insertNode(root,node)
        }

    }

    insertNode(root,node){
       if(node.value < root.value){
        if(root.left === null){
            root.left = node
        }else{
            this.insertNode(root.left,node)
        }
        

       }
       else{
        
       }

    }
}

