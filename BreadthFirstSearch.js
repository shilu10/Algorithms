class NewNode{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
class BinarySearchTree{
  constructor(value){
    this.node=null;
    this.length=0;

  }
  append(value){
    let currentnode=this.node
    let newnode=new NewNode(value)
    if (currentnode===null){
      this.node=newnode
      this.length++
    }
    else{
     while (currentnode){
    if (value<currentnode.value){
      if (!currentnode.left){
      currentnode.left=newnode
      this.length++;
      return this
      }
      else{
      currentnode=currentnode.left
      }
      }
      
      else{
      if (!currentnode.right){
       currentnode.right=newnode;
       this.length++;
       return this;
      }
       else{
       currentnode=currentnode.right}
      
    }
    }}}

    lookup(value){
      let currentnode=this.node;
      while(currentnode){
      if (value<currentnode.value){
        currentnode=currentnode.left
      }
       
        else if(value>currentnode.value){
            currentnode=currentnode.right
          }
          else if(currentnode.value===value){
           return currentnode;
        
        }
        }
        return "None"
      }
    breadthfirstsearch(){
      let currentnode=this.node;
      let queue=[]
      let list=[]
      queue.push(currentnode)

      while (queue.length>0){
        currentnode=queue.shift()
        console.log(currentnode)
        list.push(currentnode.value)
        if (currentnode.left){
          console.log("yes")
          queue.push(currentnode.left)
        }
        if (currentnode.right){
          console.log("yes")
          queue.push(currentnode.right)
        }
      }
      return list


    }

   
  
  }


tree=new Tree()
tree.append(2)
tree.append(1)
tree.append(13)
tree.append(33)
tree.append(11)
console.log(tree.breadthfirstsearch())

