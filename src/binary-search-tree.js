const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.top = null;
  }


   root() {
      if (!this.top){
        return null;
      } else return this.top;
  }

  add(data) {

    this.top = addWithin(this.top, data);

    function addWithin(node, data){

      if (!node) {
        return new Node(data);
      }

      if (node.data === data){
        return node;
      }
      if (data < node.data){
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.top, data);

    function searchWithin(node, data){
        if (!node){
          return false;
        }
        if (node.data === data){
          return true;
        }
        if (data < node.data){
         return searchWithin(node.left, data);
        } else {
         return searchWithin(node.right, data);
        }
    }
    
  }

  find(data) {

    return findData(this.top, data);

    function findData(node, data){
      if (!node){
        return null;
      }

      if (node.data === data){
        return node;
      }
      if (data < node.data){
        return findData(node.left, data);
      } else return findData(node.right, data);
    }
    
  }

  remove(data) {
    this.top = removeValue(this.top, data);

    function removeValue(node, data){
      if (!node){
        return null;
      }

      if (data < node.data){
         node.left = removeValue(node.left, data);
         return node;
      } else if (node.data < data){
         node.right = removeValue(node.right, data);
         return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }

        if (!node.left){
          node = node.right;
          return node;
        }
        if (!node.right){
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left){
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeValue(node.right, minRight.data);

        return node;
      }
    }

  }

  min() {

    if (!this.top){
      return;
    }

    if (this.top === null){
      return null;
    }
   
   let minData = this.top;
   while (minData.left){
    minData = minData.left;
   }
   return minData.data;
  }

  max() {
    
    if (this.top === null){
      return null;
    } else {

      let maxData = this.top;
      while (maxData.right){
       maxData = maxData.right;
      };
     
      return maxData.data;
     
       }
    }
 
}

module.exports = {
  BinarySearchTree
};