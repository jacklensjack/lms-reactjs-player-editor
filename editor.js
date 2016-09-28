
$.material.init();

// select all objects
function deleteObjects(canvas){
    var activeObject = canvas.getActiveObject(),
        activeGroup = canvas.getActiveGroup();
    if (activeObject) {
        if (confirm('Are you sure?')) {
            canvas.remove(activeObject);
        }
    }
    else if (activeGroup) {
        if (confirm('Are you sure?')) {
            var objectsInGroup = activeGroup.getObjects();
            canvas.discardActiveGroup();
            objectsInGroup.forEach(function(object) {
                canvas.remove(object);
            });
        }
    }
}


$('#AddSlide').on('submit',function(e){

    e.preventDefault();

    var data = {};

    $(this).serializeArray().map(function(x){
        data[x.name] = x.value;
    });

    var t = new Slide(data);
    t.Save();


    $(this).find('input,select').val('');

    $('#add-slide-dialog').modal('hide');

});

$("#color,#bg-color").spectrum({
    showPalette: true,
    preferredFormat: "rgb"
});


var canvas = new fabric.Canvas('c');

canvas.setWidth($('.canvasContainer').width());
canvas.setHeight($('body').height() - 150);
canvas.calcOffset();




var that = this;

$('#add-text').click(function(){

    var fabicText = new fabric.IText('Click to change Text', {
        left: 100,
        top: 100
    });
    canvas.add(fabicText);
    fabicText.set({ fill: 'blue' });
    canvas.setActiveObject(fabicText);
    fabicText.enterEditing();
    fabicText.hiddenTextarea.focus();

});

$('#add-image').click(function(){
    fabric.Image.fromURL('http://test/public/assets/test/images/test-logo.png', function(oImg) {
        canvas.add(oImg);
    });


    console.log(JSON.stringify(canvas));
});

$("#bold").click(function () {
    var el = this;

    var obj = canvas.getActiveObject();
    var isBold = that.getStyle(obj, 'fontWeight') === 'bold';
    setStyle(obj, 'fontWeight', isBold ? '' : 'bold');
    canvas.renderAll();


});



$("#italic").click(function () {
    var el = this;

    var obj = canvas.getActiveObject();
    var isItalic = that.getStyle(obj, 'fontStyle') === 'italic';
    setStyle(obj, 'fontStyle', isItalic ? '' : 'italic');
    canvas.renderAll();


});


$("#underline").click(function () {
    var el = this;

    var obj = canvas.getActiveObject();
    var isUnderline = (that.getStyle(obj, 'textDecoration') || '').indexOf('underline') > -1;
    setStyle(obj, 'textDecoration', isUnderline ? '' : 'underline');
    canvas.renderAll();


});

$("#line-through").click(function () {
    var el = this;

    var obj = canvas.getActiveObject();
    var isLinethrough = (that.getStyle(obj, 'textDecoration') || '').indexOf('line-through') > -1;
    setStyle(obj, 'textDecoration', isLinethrough ? '' : 'line-through');
    canvas.renderAll();


});



$(document).on('change', '#color', function() {
    var obj = canvas.getActiveObject();
    setStyle(obj, 'fill', this.value);
    canvas.renderAll();
});


$(document).on('change', '#bg-color', function() {
    var obj = canvas.getActiveObject();
    setStyle(obj, 'textBackgroundColor', this.value);
    canvas.renderAll();
});


$(document).on('change', '#size', function() {
    var obj = canvas.getActiveObject();
    setStyle(obj, 'fontSize', parseInt(this.value, 10));
    canvas.renderAll();
});

$(document).on('click','#delete', function() {
    deleteObjects(canvas);
    canvas.renderAll();
});


function setStyle(object, styleName, value) {

    if (object.setSelectionStyles && object.isEditing) {
        var style = { };
        style[styleName] = value;
        object.setSelectionStyles(style);
    }
    else {
        object[styleName] = value;
    }
}
function getStyle(object, styleName) {

    return (object.getSelectionStyles && object.isEditing)
        ? object.getSelectionStyles()[styleName]
        : object[styleName];
}

