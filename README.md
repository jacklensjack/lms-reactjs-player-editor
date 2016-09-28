# Learning Managment Sysytem / Player / Editor 
React.js Player and Editor React Components for Learning management systems , it contains the following components :

* Connector 
* Helpers 
* Lesson Slider 
* Lesson Builder / Power Point Like
* Drag & Drop Canvas
* Lesson Navigation
* Lesson Progress Items


# Data Structure

Date is structured as json requests , you can use any service hub or restful api .

#### Example :

```
{id:1,status:1,type:"video",subtype:"youtube",content:"bTqVqk7FSmY"},
{id:2,status:0,type:"content",subtype:"canvas",content:'{"objects":[{"type":"i-text","originX":"left","originY":"top","left":100,"top":100,"width":334.34,"height":45.2,"fill":"blue","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Click to change Text","fontSize":40,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{}},{"type":"i-text","originX":"left","originY":"top","left":108.99,"top":150,"width":334.34,"height":45.2,"fill":"blue","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.49,"scaleY":0.49,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Click to change Text","fontSize":40,"fontWeight":"normal","fontFamily":"Times New Roman","fontStyle":"","lineHeight":1.16,"textDecoration":"","textAlign":"left","textBackgroundColor":"","styles":{}}],"background":""}'},
{id:3,status:0,type:"video",subtype:"vimeo",content:"143418951"},
```

# Data Types :

* video / youtube
```
{id:<ID>,status:<STATUS>,type:"video",subtype:"youtube",content:"<Video ID>"}

```

* video / vimeo
```
{id:<ID>,status:<STATUS>,type:"video",subtype:"vimeo",content:"<Video ID>"}

```

* Audio / Audio
```
{id:<ID>,status:<STATUS>,type:"audio",subtype:"audio",path:"<Path>"}

```

* Text / Images / Canvas
```
{id:<ID>,status:<STATUS>,type:"content",subtype:"canvas",content:"<Canvas Object>"}

```

