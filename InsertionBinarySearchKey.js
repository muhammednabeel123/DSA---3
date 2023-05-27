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
        }
    }
}

