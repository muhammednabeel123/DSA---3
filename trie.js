class node{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class trie{
    constructor(){
        this.root = new node()
    }

    insert(word){
        let current = this.root
        for(let i = 0;i < word.length;i++){
            let charToInsert = word[i]
            if(!current.children[charToInsert]){
                current.children[charToInsert] = new node()
            }
            current = current.children[charToInsert]
          
        }
        current.isEnd = true
        return this.root
    }

    contains(word){
        let current = this.root
        console.log(word.length);
        for(let i = 0;i < word.length;i++){
            let charFind = word[i]
            console.log(charFind);
            if(!(charFind in current.children)){
                 return false
            }
            current = current.children[charFind]
        }
        return current.isEnd
    }
        
    startWithPrefix(prefix){
        let current = this.root
        for(let i= 0; i < prefix.length;i++){
            let charToFind = prefix[i]
            if(!(charToFind in current.children)){
                return false
            }
            current = current.children[charToFind]
        }
        return true
    }
    suffixTree(word){
        let current = this.root
        let charToInsert
        for(let i = 0;i < word.length;i++){
            for(let j = i;j < word.length;j++){
            
                charToInsert = word[i]
                if(!current.children[charToInsert]){
                    current.children[charToInsert] = new node()
                }
                current = current.children[charToInsert]
            }
            current.isEnd = true
            current = this.root
        }
        return this.root
    }

}

let Trie = new trie()



console.log(Trie.suffixTree('set over'));
console.log(Trie.contains('set'));
