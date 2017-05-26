/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var node = function(data) {
    return { 'value': data,
              'next': null };
  };

  var head = {};
  var tail = {};
  var size = 0;

  var _getHead = function(){
    if (size === 0){
      return null;
    } else {
    return head;
    }
  };

  var _getTail = function(node){
    if ( size === 0 ){
      return null;
    }
    else {
      return tail;
    }
  };

  var _add = function(data){
    if(size === 0){
      size++;
      head = node(data);
      tail = head;
      return head;
    } else {
      size++;
      tail.next = node(data);
      tail = tail.next;
      return tail;
    }
  };

  var _get = function(position){
    var node = head;
    if( position >= size ){
      return false;
    } else {

      for(var i = 0; i < position; i++){
       node = node.next;
      }
      return node;
    }
  };

  var _remove = function(position){

    if ( !(position < size) ) {
      return false;
    }

    size--;
    var previous = head;

    for(var i = 0; i < (position-1) ; i++){
      previous = previous.next;
    }

    if ( position === 0 ){

      head = head.next;

    } else if ( position === size ){

      tail = previous;

    } else {

      var toRemove = previous.next;
      previous.next = toRemove.next;

    }
  };

  var _insert = function(data, position){
    var toInsert = {};
    console.log("i have a size of..." + size);
    console.log("you just asked for position..." + position);
    if( !(position <= size && position >= 0) ){
      return false;
    }

    size++;
    var previous = head;

    for(var i = 0; i < (position-1) ; i++){
      previous = previous.next;
    }

    if( position === 0 ) {
      toInsert = head;
      head = node(data);
      head.next = toInsert;

    } else {
      toInsert = node(data);
      toInsert.next = previous.next;
      previous.next = toInsert;
    }
  };

  return {
    getHead: _getHead,
    getTail: _getTail,
    add: _add,
    get: _get,
    remove: _remove,
    insert: _insert
  };
}

