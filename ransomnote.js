function ransomNote(sentence,paragraph){
  
  var sentenceArray = sentence.split(' ');
  
  var paragraphArray = paragraph.split(' ');
  
  var paragraphObj ={};
  
  var result=true;
  
  paragraphArray.forEach(i=>{
    
    if(!paragraphObj[i]) {
      
      paragraphObj[i] = 0;
      
    }
    
    paragraphObj[i]++;
  
  });
    
  sentenceArray.forEach(i=>{
    
    if(paragraphObj[i]){
      
      paragraphObj[i] --;
      
        if(paragraphObj[i] < 0){
          
          result=false;
          
        }
        
    }else {
      
      result=false;
      
    }
    
  });
  
  return result;
  
}

ransomNote('love this word','the word key is the word i love in this paragraph');
