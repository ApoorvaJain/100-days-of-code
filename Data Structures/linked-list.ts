class Node {
    value: any;
    next: Node;
}

export class LinkedList {
    head: Node = null;
    
    public get length() : number {
        let _l = 0;
        let current = this.head;
        while(current) {
            _l++;
            current = current.next;
        } 
        return _l;
    }
    

    getHead() {
        return this.head;
    }

    addNode(value: any) {
        let newNode = new Node();
        newNode.value = value;
        newNode.next = null;
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;

    }

    traverse() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
        console.log("Length: " + this.length);
    }

    deleteNode(node: Node) {
        if (!node) {
            return; 
        }
        let current = this.head;
        let next = node.next;
        while(current.next != node){
            current = current.next;
        }

        current.next = next;
    }
}

(function main() {
    console.log('Created New List\n');
    let linkedList = new LinkedList();
    for(let i=0; i<10; i++) {
       linkedList.addNode(i); 
    }
    linkedList.traverse();
})();
