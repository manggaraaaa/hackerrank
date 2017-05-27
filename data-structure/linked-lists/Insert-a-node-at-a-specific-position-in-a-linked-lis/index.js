/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
    let newNode = new Node(data);
    if (head == null) {
        head = new Node(data);
        head.data = data;
        head.next = null;
    } else {
        if(position == 0) {
            newNode.next = head;
            head = newNode;
        } else {
            let n = 0;
            let curr = head;
            let prev = head;
            while(n != position) {
                prev = curr
                curr = curr.next;
                n++;
            }
            newNode.next = curr;
            prev.next = newNode;
        }
    }
    return head;

    
}
