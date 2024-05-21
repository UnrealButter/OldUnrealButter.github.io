window.onload = function() {
    alert('Welcome to my web page!');
   };
   
   
   function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue'; // Changes the background color to light blue


    function toggleText() {
        var paragraph = document.getElementById('toggleParagraph');
        if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        } else {
        paragraph.style.display = 'none';
        }
       }
       