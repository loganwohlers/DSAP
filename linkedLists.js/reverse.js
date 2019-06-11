function reverse(list) {
    let prev = null;
    let current = list.head;
    let next;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    list.head = prev;
    return list;
} 