class BubbleSort{
  constructor(array){
      this.array=array
  }
 bubblesort(){
  for (let i=0;i<this.array.length;i++){
    for (let j=i;j<this.array.length;j++){
      let currenti=this.array[i]
     // console.log(currenti)
      if (this.array[j]<this.array[i]){
        this.array[i]=this.array[j]
        this.array[j]=currenti
        

      }
    }
  }
  return this.array
}
}

mybubblesort=new BubbleSort([83,32,2,3,4444,32,1,23,113,2])

mybubblesort.bubblesort()
