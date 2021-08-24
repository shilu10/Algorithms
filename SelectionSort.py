class SelectionSort{
    constructor(array){
      this.array=array;
    }
  
  
  selectionsort(){
    let array=this.array
  for (let i=0;i<array.length;i++){ 
       let smallest=i
       let valueofi=array[i]
       
      for (let j=i+1;j<array.length;j++){
        if (array[j]<array[smallest]){
          //console.log(array[j])
          //console.log(smallest)
          smallest=j
          
        }
       
      }
      array[i]=array[smallest]
      array[smallest]=valueofi
      
  }
  return array
}
}


myselectionsort=new SelectionSort([4,3,2,1])

myselectionsort.selectionsort()
