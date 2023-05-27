class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
        }
}

class InsertionBinary{
    constructor(){
        this.root = null
    }

    insert(value){
        var newnode = new Node(value)
        if(this.root === null ){
            this.root = newnode
            return this;
        }else{
            var current = this.root
            while(true){
               if (value < current.value) {
                if(current.left === null){
                    current.left = newnode
                    return this
                }else{
                    current = current.left
                }
                
               } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newnode
                        return this
                        
                    } else {
                        current = current.right
                        
                    }
                
               }

            }
        }
    }
}


var tree = new InsertionBinary() 
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree);