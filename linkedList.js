/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var node = function(data) {
    return { 'data': data,
              'next': null };
  };

  var head = {};
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
    else if ( node.next === null ){
      return node;
    } else {
     getTail(node.next);
   }
  };

  var _add = function(data){
    if(size === 0){
      size++;
      head = node(data);
    } else {
      size++;
      var tail = getTail( head );
      tail.next = node(data);
      return tail.next;
    }
  };

  var _get = function(position){
    var node = head;
    for(var i = 0; i < position; i++){
      node = node.next;
    }
    return node;
  };

  var _remove = function(position){
    var previous = head;
    for(var i = 0; i < (position-1) ; i++){
      previous = previous.next;
    }
    var toRemove = previous.next;
    previous.next = toRemove.next;
  };

  var _insert = function(data, position){
    var previous = head;
    for(var i = 0; i < (position-1) ; i++){
      previous = previous.next;
    }
    var toInsert = node(data);
    toInsert.next = previous.next;
    previous.next = toInsert;
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