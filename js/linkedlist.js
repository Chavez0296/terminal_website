export class Link{
    constructor(data, next = null, prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
export class dlList{
    #first;
    #last; 
    #current;
    constructor(){
        this.#first = null;
        this.#last = null;
        this.#current = null;
    }

    isEmpty(){
        return ( this.#first === null);
    }

    getFirst(){
        return this.#first;
    }

    getLast(){
        return this.#last;
    }

    getCurrent(){
        return this.#current;
    }

    insertFirst(dd){
        let newLink = new Link(dd);

        if( this.isEmpty())
            this.#last = newLink;                               
        else
            this.#first.prev = newLink;

        newLink.next = this.#first;
        this.#first = newLink;
    }
    
    insertLast(dd){
        let newLink = new Link(dd)

        if( this.isEmpty())
            this.#first = newLink;
        else
        {
            this.#last.next = newLink;
            newLink.prev = this.#last;
        }
        this.#last = newLink;
    }

    findSize(curr){
        let size = 0;
        while(curr !== null){
            size++;
            curr = curr.next;
        }

        return size;
    }

    forward() {
        if (this.#current === null) {
            this.#current = this.#first;
        } else if (this.#current.next) {
            this.#current = this.#current.next;
        }
        return this.#current ? this.#current.data : "";
    }

    backward() {
        if (this.#current && this.#current.prev) {
            this.#current = this.#current.prev;
            return this.#current.data;
        }
        this.#current = null;
        return "";
    }

    resetTraversal() {
        this.#current = null;
    }

    toFront(link){
        if( !link || link === this.#first ) return;

        if(link.prev) link.prev.next = link.next;
        if(link.next) link.next.prev = link.prev;

        if(link === this.#last ){
            this.#last = link.prev;
        }

        link.prev = null;
        link.next = this.#first;
        if(this.#first){
            this.#first.prev = link;
        }

        this.#first = link;

        if(!this.#last){
            this.#last = link;
        }
    }
    
    getHistory() {
        const arr = [];
        let curr = this.#last;
        while (curr) {
        arr.push(curr.data);
        curr = curr.prev;
        }
        return arr;
    }
}