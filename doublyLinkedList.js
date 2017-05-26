function doublyLinkedListGenerator(){

  var head = {};
  var tail = {};
  var size = 0;

  function _node(value){

    return{
      value: value,
      next: null,
      prev: null
    };

  }

  var _getHead = function(){

    if ( size === 0 ){

      return null;

    } else {

      return head;

    }

  };

  var _getTail = function(){

    if ( size === 0 ){

      return null;

    } else {

      return tail;

    }

  };

  var _add = function( value ){

    var toAdd = {};

    if( size === 0 ){

      size++;
      head = _node( value );
      tail = head;
      return head;

    } else {

      size++;
      toAdd = _node( value );
      tail.next = toAdd;
      toAdd.prev = tail;
      tail = toAdd;
      return tail;

    }

  };

  var _get = function(index) {

    var ourNode = head;

    if( index >= size ){

      return false;

    } else {

      for(var i = 0; i < (index-1); i++){
        ourNode = ourNode.next;
      }

    }

    return ourNode;
  };

  var _remove = function( index ) {

    var toRemove = head;

    if( index >= size ){

      return false;

    } else {

      for(var i = 0; i < index; i++){
        toRemove = toRemove.next;
      }

      toRemove.prev.next = toRemove.next;
      toRemove.next.prev = toRemove.prev;
      size--;

    }

  };

  var _insert = function( index, value ){

    var toInsert = {};

    if( index >= size || index < 0 ){

      return false;

    } else if( index === 0 ) {

      toInsert = _node( value );
      head.prev = toInsert;
      toInsert.next = head;
      head = toInsert;

    } else if( index === size ) {

      toInsert = _node( value );
      tail.next = toInsert;
      toInsert.prev = tail;
      tail = toInsert;

    } else {

      var cursor = head;

      for(var i = 0; i < index; i++){
        cursor = cursor.next;
      }

      toInsert = _node( value );
      toInsert.prev = cursor;
      toInsert.next = cursor.next;
      cursor.next.prev = toInsert;
      cursor.next = toInsert;

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