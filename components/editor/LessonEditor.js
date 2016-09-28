import React from 'react';

export default class LessonEditor extends React.Component {

    constructor(args) {
        super(args);

        this.state = {
            LessonName: 'First Lesson',
            CourseName: 'Introduction',
            Slides: [

            
            ],
            ActiveLessonId: 1,
            ActiveSlideId: 1,
            NumberOfLessons: 7
        }
    }

    render(){
        return (
            <div className="row">

                    <Slides slides={this.state.Slides}/>

                    <Editor activeId={this.state.ActiveLessonId} slide={$.grep(this.state.Slides, function(e){ return e.id == this.state.ActiveSlideId;}.bind(this))[0]}/>

            </div>
        )
    }

}

class Slides extends React.Component {
    constructor(args){
        super(args);
    }

    render(){
        return (
            <div className="col-md-2">
                <div className="btn-group-vertical">
                {
                    this.props.slides.map(function(slide,index){
                        return <Slide key={slide.id} data={slide} index={index}/>
                    })
                }
                </div>
            </div>
        )
    }
}

class Slide extends React.Component {


    render(){

        let type = this.props.data.type;
        let subtype = this.props.data.subtype;

        if(type == "content"){

            return <a href="javascript:void(0)" className="btn btn-raised btn-primary"><span className="badge"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span> {this.props.index + 1} - {this.props.data.title_ar}</a>

        } else if(type == "video"){
            
            if(subtype == "youtube"){
                return <a href="javascript:void(0)" className="btn btn-raised btn-info"><span className="badge"><i className="fa  fa-youtube-square" aria-hidden="true"></i></span> {this.props.index + 1} - {this.props.data.title_ar}</a>
            }
            
            return <a href="javascript:void(0)" className="btn btn-raised btn-info"><span className="badge"><i className="fa fa-video-camera" aria-hidden="true"></i></span> {this.props.index + 1} - {this.props.data.title_ar}</a>

        } else if(type == "audio"){

            return <a href="javascript:void(0)" className="btn btn-raised btn-danger"><span className="badge"><i className="fa fa-volume-up" aria-hidden="true"></i></span> {this.props.index + 1} - {this.props.data.title_ar}</a>


        } else if(type == "quiz"){

            return <a href="javascript:void(0)" className="btn btn-raised btn-success"><span className="badge"><i className="fa fa-wpforms" aria-hidden="true"></i></span> {this.props.index + 1} - {this.props.data.title_ar}</a>


        } else if(type == "exam"){

            return <a href="javascript:void(0)" className="btn btn-raised btn-warning"><span className="badge"><i className="fa fa-leanpub" aria-hidden="true"></i></span> {this.props.index + 1} - {this.props.data.title_ar}</a>

        }
    }
}


class Editor extends React.Component {
    constructor(args){
        super(args);
    }

    render(){
        return (
            <div className="col-md-10 main-area">
                <Content slide={this.props.slide} />
            </div>
        )
    }

}


class Content extends React.Component {

    constructor(args){
        super(args);
        this.state = {
            canvas:''
        }
    }


    componentDidMount(){
        this.FabricateCanvas();
    }

    componentDidUpdate(){
        //this.FabricateCanvas();
    }

    FabricateCanvas(){

        var canvas = new fabric.Canvas('c');

        canvas.setWidth($('.canvasContainer').width());
        canvas.setHeight($('body').height() - 150);
        canvas.calcOffset();

        this.setState({canvas});

    }

    addText(){

        var canvas = this.state.canvas;
        var fabicText = new fabric.IText('Click to change Text', {
            left: 100,
            top: 100
        });
        canvas.add(fabicText);
        fabicText.set({ fill: 'blue' });
        canvas.setActiveObject(fabicText);
        fabicText.enterEditing();
        fabicText.hiddenTextarea.focus();
    }
    render(){
        return (
        <div>
            <div className="btn-group btn-group-justified btn-group-raised">

                <a id="add-text" onClick={this.addText.bind(this)} href="javascript:void(0)" className="btn "><i className="fa fa-text-width" aria-hidden="true"></i> Add Text<div className="ripple-container"></div></a>
                <a id="add-image" href="javascript:void(0)" className="btn "><i className="fa fa-picture-o" aria-hidden="true"></i> Add Image</a>
                <a id="bold" href="javascript:void(0)" className="btn "><i className="fa fa-bold" aria-hidden="true"></i> Bold</a>
                <a id="italic" href="javascript:void(0)" className="btn "><i className="fa fa-italic" aria-hidden="true"></i> italic</a>
                <a id="underline" href="javascript:void(0)" className="btn "><i className="fa fa-underline" aria-hidden="true"></i> underline</a>
                <a id="line-through" href="javascript:void(0)" className="btn ">line-through</a>
                <a id="delete" href="javascript:void(0)" className="btn "><i className="fa fa-eraser" aria-hidden="true"></i> Delete</a>

            </div>

            <div className="btn-group btn-group-justified btn-group-raised">
                <a  href="javascript:void(0)" className="btn ">color &nbsp;&nbsp;<input type="text" id="color" /></a>
                <a  href="javascript:void(0)" className="btn ">background &nbsp;&nbsp;<input type="text" id="bg-color" /></a>
                <a  href="javascript:void(0)" className="btn "><input type="range" min="5" max="150"  id="size"/></a>
            </div>


            <div className="canvasContainer well infobox">
                <canvas id="c"></canvas>
            </div>
        </div>
        )
    }
}
