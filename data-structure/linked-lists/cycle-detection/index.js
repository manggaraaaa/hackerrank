/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle(head) {
    
     if (head == null){
        return 0;
    }
    
    let first = head;
    let second = head;

    while (first != null && first.next != null){
        second = second.next;
        first = first.next.next;

        if (first == second){
            return 1;
        }
    }

    return 0;
    
}
