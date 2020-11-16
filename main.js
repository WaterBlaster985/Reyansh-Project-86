var canvas= new fabric.Canvas("SuperheroCanvas");
var block= {
    width:30,
    height:30
} 
var superhero= {
    x=10,
    y=10
}
var superhero_object;
function playerupdate(){
    fabric.Image.fromURL("player.png", function(img){
        superhero_object=img;
        superhero_object.scaleToWidth(150);
        superhero_object.scaleToHeight(140);
        superhero_object.set({
        top:superhero.y,
        left:superhero.x
        });
    });
    canvas.add(superhero_object);
}
var block_object;
function blockupdate(){
    fabric.Image.fromURL("player.png", function(img){
        superhero_object=img;
        superhero_object.scaleToWidth(150);
        superhero_object.scaleToHeight(140);
        superhero_object.set({
        top:superhero.y,
        left:superhero.x
        });
    });
    canvas.add(superhero_object);
}