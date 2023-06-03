class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }

}

class BinarySearch {
    constructor(){
        this.node = null
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null ){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }

    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left === node
            }
            else{
                this.insertNode(root.left,node)
            }

        }else{
            if(root.right === null){
                root.right === node
            }
            else{
                this.insertNode(root.right,node)
            }
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
}

