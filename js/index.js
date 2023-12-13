var btn = document.getElementById('btn');

var quoteList =[
    {name : '― Oscar Wilde' ,
    text :'“Be yourself; everyone else is already taken.”', 
    image:'./images/1_.jpg',
    },
    
    {name : '― Marilyn Monroe' ,
    text :'“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”',
     image:'./images/2.jpg'},

    {name : '― Albert Einstein' ,
    text :'“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
    image:'./images/3_.jpg'},

    {name : '― Frank Zappa' ,
    text :'“So many books, so little time.',
    image:'./images/4_.jpg'},

    {name : '― Marcus Tullius Cicero' ,
    text :'“A room without books is like a body without a soul.”',
     image:'./images/5_.jpg'},

    {name : '― Bernard M.Baruch' ,
    text :'“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.”',
    image:'./images/6.jpg'},

    {name : '― William W. Purkey' ,
    text :'“You have gotta dance like there is nobody watching, Love like you will never be hurt, Sing like there is nobody listening, And live like it is heaven on earth.”',
    image:'./images/7_.jpg'},

    {name : '― Dr. Seuss' ,
     text :'“You know you are in love when you can not fall asleep because reality is finally better than your dreams.”',
    image:'./images/8_.jpg'},

    {name : '― Mae West' ,
    text :'“You only live once, but if you do it right, once is enough.”',
    image:'./images/9_.jpg'},

    {name : '― Mahatma Gandhi ' ,
     text :'“Be the change that you wish to see in the world.”',
    image:'./images/10.jpg'},

    {name : '― Robert Frost' ,
    text :'“In three words I can sum up everything I have learned about life: it goes on.”',
    image:'./images/11_.jpg'},

    {name : '― J.K. Rowling Albert Camus' ,
    text :'“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.”',
    image:'./images/12_.jpg'},

    {name : '― Albert Camus Mark Twain' ,
     text :'“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”',
    image:'./images/13.jpg'},

    {name : '― Mark Twain ' ,
    text :'“If you tell the truth, you do not have to remember anything.”',
    image:'./images/14_.jpg'},

    {name : '― C.S. Lewis,The Four Loves ' ,
     text :'“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
    image:'./images/15.jpg'},

    {name : '― Maya Angelou ' ,
    text :'“I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
    image:'./images/16_.jpg'},

    {name : '― Elbert Hubbard  ' ,
    text :'“A friend is someone who knows all about you and still loves you.”',
    image:'./images/17.jpg'},

    {name : '― Oscar Wilde  ' ,
    text :'“To live is the rarest thing in the world. Most people exist, that is all.”',
    image:'./images/18_.jpg'},

    {name : '― Oscar Wilde' ,
    text :'“Always forgive your enemies; nothing annoys them so much.”',
    image:'./images/19_.jpg'},

    {name : '― Martin Luther King Jr. ' ,
    text :'“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
    image:'./images/20_.jpg'},

]


var previousNum = null; 
var num = null;

btn.onclick = function(){
   
document.getElementById('head').innerHTML = '';


do {
    num = Math.floor(Math.random() * quoteList.length);
} while (num === previousNum); 

previousNum = num; 

document.getElementById('quote-text').innerHTML = quoteList[num].text;
document.getElementById('quote-name').innerHTML = quoteList[num].name;
document.getElementById('img').innerHTML = `<img src='${quoteList[num].image}' alt='${quoteList[num].name}-image' class='rounded-circle w-100
 h-100 border border-3 shadow'/>` ;

console.log('text', quoteList[num].text);
console.log('name', quoteList[num].name);

}

