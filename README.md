# Learning Managment System / Player / Editor 
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
![Image Editor ](https://s21.postimg.org/kejjmc86f/video.png)

* video / vimeo
```
{id:<ID>,status:<STATUS>,type:"video",subtype:"vimeo",content:"<Video ID>"}

```
![Image Editor ](https://s21.postimg.org/kejjmc86f/video.png)
* Audio / Audio
```
{id:<ID>,status:<STATUS>,type:"audio",subtype:"audio",path:"<Path>"}

```
![Image Editor ](https://s21.postimg.org/hlqc2b7tz/voice.png)
* Text / Images / Canvas
```
{id:<ID>,status:<STATUS>,type:"content",subtype:"canvas",content:"<Canvas Object>"}

```
![Image Editor ](https://s21.postimg.org/tihyms9rb/Text.png)

Editor Screenshots :

![Image Editor ](https://s21.postimg.org/hunws8kmf/text_minipulation.png)
![Image Editor ](https://s21.postimg.org/66tuxovhj/toolsbar.png)
![Image Editor ](https://s21.postimg.org/59iub2ulj/colors.png)
![Image Editor ](https://s21.postimg.org/nqd91wajr/editor_component.png)
![Image Editor ](https://s21.postimg.org/vx9u77q07/interactive_text.png)
![Image Editor ](https://s21.postimg.org/5dh952pgn/progress.png)
