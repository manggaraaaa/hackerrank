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
function insert(head, data) {
   let newNode = new Node(data);
   let pointer = head;
   if(head == null){
       head = newNode;
       return head;
   }
    if(head.next == null){
        head.next = newNode;
        return head;
    }
    while(pointer.next.next != null){
        pointer = pointer.next;
    }
    
    pointer.next.next = newNode;
    return head;
    
}