class Heap{
    constructor(){
        this.heap = [];
    }
    minheap(array){
        this.buildheap(array)
    }

    buildheap(array){
        this.heap = array
        for(let i = this.parent(this.heap.length-1);i>=0;i--){
            this.shiftDown(i)
            
        }
    }

    shiftDown(current){
        let endindex = this.heap.length - 1;
        let leftindex = this.leftchild(current)
        while(leftindex <= endindex){
            let rightindex = this.rightchild(current)
            let shifttobe;
            if(rightindex < endindex && this.heap[rightindex] < this.heap[leftindex] ){
                shifttobe = rightindex
            }else{
                shifttobe = leftindex
            }
            if(this.heap[current] > this.heap[shifttobe] ){
                [this.heap[current],this.heap[shifttobe]] = [this.heap[shifttobe],this.heap[current]]
                    current = shifttobe
                    leftindex = this.leftchild(current)
            }
            else{
                return;
            }
        }

    }

    shiftup(current){
        let parent = this.parent(current)
        while(this.heap[current] < this.heap[parent] &&  current > 0 ){
            [this.heap[parent],this.heap[current]] = [this.heap[current],this.heap[parent]];
            current = parent;
            parent = this.parent(current);
        }

    }
    peek(){
        return this.heap[0]
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    leftchild(i){
        return (i*2)+1
    }
    rightchild(i){
        return(i*2)+2

    }
    remove(){
        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]];
        let number = this.heap.pop()
        this.shiftdown(0)
        return number;
    }
    insert(value){
        this.heap.push(value);
        this.shiftup(this.heap.length-1)
    }

}

const heap = new Heap()
let array = [10,5,15,3,8]
heap.buildheap(array);
heap.insert(1)
heap.remove()
heap.display()
heap.heapsort(array);