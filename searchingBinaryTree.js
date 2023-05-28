class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearch{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }
        

    }

    search(root,value){
        if(!root){
            return false
        }
        else{
            if(root.value === value){
                return true
            }
            else if(value < root.value){
                return this.search(root.left,value)
            }
            else {
                return this.search(root.right,value)
            }
        }
    }

} 