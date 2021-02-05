const modifier = (text) => {
let quotedText = text
  
// This script replaces `"Quoted"` text with `― Quoted text.`
// Use the test phrase "You are a big guy!" he mumbled, "I am a big guy too, unlike those "coomers" you mentioned."
// The script relies on you using the correct punctuation for it to work, like the above example.
   if(text.includes('"')) {
    quotedText = quotedText.split(/\n"/).join('\n― ');
    quotedText = quotedText.split(/"$/).join('');
    quotedText = quotedText.split(/(?<=\W)"(?=\s)(?!$)/).join(' ―');
    quotedText = quotedText.split(/(?<=\W\s)"(?=\w)/).join('― ');
    console.log('Quotes replaced with ―')
  return { text: quotedText }
   }
   
}


// Don't modify this part
modifier(text) 
