const canvas = document.getElementById('sortingCanvas');
$(canvas).ready(function(){
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    ctx.fillstyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
});