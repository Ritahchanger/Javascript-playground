class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
      this.head = new Node(0, 0);
      this.tail = new Node(0, 0);
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
    
    _remove(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    
    _add(node) {
      node.prev = this.head;
      node.next = this.head.next;
      this.head.next.prev = node;
      this.head.next = node;
    }
    
    get(key) {
      if (!this.cache.has(key)) return -1;
      const node = this.cache.get(key);
      this._remove(node);
      this._add(node);
      return node.value;
    }
    
    put(key, value) {
      if (this.cache.has(key)) {
        this._remove(this.cache.get(key));
      }
      const newNode = new Node(key, value);
      this._add(newNode);
      this.cache.set(key, newNode);
      if (this.cache.size > this.capacity) {
        const lru = this.tail.prev;
        this._remove(lru);
        this.cache.delete(lru.key);
      }
    }
  }
  

  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  console.log(cache.get(1)); 
  cache.put(3, 3);           
  console.log(cache.get(2));
  