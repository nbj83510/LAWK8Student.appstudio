rdoDescribe.onchange=function(){
  let personalityType = $("input[name=rdoDescribe]:checked").prop("value")
  
  if (rdoDescribe.value == 0)
    lblDescribe.value = (`I would agree that you are a ${personalityType} person too!`)
  else if (rdoDescribe.value == 1)
    lblDescribe.value = (`I would agree that you are a ${personalityType} person too!`)
  else if (rdoDescribe.value == 2)
    lblDescribe.value = (`I would agree that you are a ${personalityType} person too!`)
  else (rdoDescribe.value == 3)
    lblDescribe.value = (`I would agree that you are a ${personalityType} person too!`)
}

btnDescribe.onclick=function(){
  ChangeForm(favExercises)
}
