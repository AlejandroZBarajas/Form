import { Node } from "./Node.js"

export class LinkedList{
    #head=undefined
    #tail=undefined
    #size=0

    constructor(){}

    addElement(element){
        let newNode = new Node( element )
       
        if(this.#head==undefined){
            this.#head=newNode
        }else{
            if(this.#tail==undefined){
                this.#tail=newNode
                this.#tail.setPrevious(this.#head)
            }else{
                let aux= this.#tail
                this.#tail=newNode
                this.#tail.setPrevious(aux)
            }
        }
        this.#size++
    }
    getSize(){
        return this.#size
    }
    funca(){
        console.log("tenemos lista chavos!")
    }

    getHead(){
        return this.#head
    }

    getTail(){
        return this.#tail
    }
}
