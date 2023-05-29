class Heap {
    constructor(){
        this.heap = []
    }

    Minheap(array){
        this.buildheap(array)
    }
    buildheap(array){
            this.heap = array
            for(let i = this.parent(this.heap.length-1);i >=0;i-- ){
                this.shiftDown(i)
            }
    }

    shiftDown(current){
        let endindex = this.heap.length-1;
        let leftindex = this.leftChild(current);
        while(leftindex <= endindex){
            let rightindex = this.rightChild(current);
            let shifttobe;
            if(rightindex <= endindex&&this.heap[rightindex] < this.heap[leftindex]){
                shifttobe = rightindex;
            }else{
                shifttobe = leftindex;
            }
            if(this.heap[current]>this.heap[shifttobe]){
                [this.heap[current],this.heap[shifttobe]] = [this.heap[shifttobe],this.heap[current]];
                current = shifttobe
                leftindex = this.leftChild(current)
            }else{
                return
            }
        }
    }

    shiftup(current){
        let parent = this.parent(current)
        while(this.heap[current] < this.heap[parent] && current > 0 ){
            [this.heap[current],this.heap[parent] ] = [this.heap[parent],this.heap[current]]
                        current = parent ;
                        parent = this.parent(current)
        }

    }


    parent(i){
        return Math.floor((i-1)/2)
    }

    leftChild(i){
        return (i*2)+1
    }

    rightChild(i){
        return (i*2)+2
    }
    insert(element){
        this.heap.push(element) 
        this.shiftup(this.heap.length-1)
    }
    remove(){
        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[this.heap[0]]]
       let number =  this.heap.pop()
        this.shiftDown(0)
        return number;
    }
    display(){
        for(let i = 0 ; i<this.heap.length;i++  ){
            console.log(this.heap[i]);
        }
    }

}

const heap = new Heap()
let array = [10,5,15,3,8]
heap.buildheap(array);

heap.display()
