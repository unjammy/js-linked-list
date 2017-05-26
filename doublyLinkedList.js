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

  return {
    getHead: _getHead,
    getTail: _getTail,
    add: _add,
    get: _get
  };

}