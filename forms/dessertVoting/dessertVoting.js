let dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
    for (i = 0; i < dessertList.length; i++)
        drpDesserts.addItem(dessertList[i])
  /* add a loop here that adds all the desserts in the array 
     to the dropdown.
  */
}


drpDesserts.onclick=function(s){
// this 'if' kicks user out if they  just clicked on control 
// but not on one item in the list.
    if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
        /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
      lblDesserts.value = `You picked ${s} -that is great choice!`
    }
}

/*
let pets = ["dog","cat","horse","hamster","mouse","guinea pig"]

dropdownActivity.onshow=function(){
  drpFavoriteAnimal.clear()
  for (i = 0; i < pets.length; i++)
        drpFavoriteAnimal.addItem(pets[i])
}

drpFavoriteAnimal.onclick=function(s){
  if (typeof(s) == "object"){  
    return                     
  } else {                     
    drpFavoriteAnimal.value = s     
    ChangeForm(radioButtonsDemo)
  }
}
*/


btnDessert.onclick=function(){
  ChangeForm(describeYou)
}
