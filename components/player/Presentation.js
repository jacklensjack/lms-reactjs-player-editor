import React from 'react';

export default class Presentation extends React.Component {

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


    nextSlide(){

        let activeSlide = this.state.ActiveSlideId + 1;

        if(activeSlide <= this.state.NumberOfLessons){

            this.state.Slides.map(function(slide,index){
                if(slide.id <= this.state.ActiveSlideId){
                    this.state.Slides[index].status = 1;
                }
            }.bind(this));

            this.setState({ActiveSlideId: activeSlide});

        }

    }


    prevSlide(){

        let activeSlide = this.state.ActiveSlideId - 1;

        if(activeSlide <= this.state.NumberOfLessons){

            this.setState({ActiveSlideId: activeSlide});

        }

    }


    render() {


            return (
                <div className="MainPresentationContainer">
                    <PresentationProgress Slides={this.state.Slides} ActiveSlideId={this.state.ActiveSlideId}/>
                    <PresentationSlide Next={this.nextSlide.bind(this)} Slides={this.state.Slides}
                                       ActiveSlideId={this.state.ActiveSlideId}/>
                    <PresentationNavigation Next={this.nextSlide.bind(this)} Prev={this.prevSlide.bind(this)}/>
                </div>
            )


    }


}


class PresentationProgress extends React.Component {
    render(){
        return (
            <div className="PresentationProgressContainer">
                {

                    this.props.Slides.map(function(slide,index){

                        if(slide.id == this.props.ActiveSlideId){
                            return <i key={slide.id} data-slide={slide.id} className="fa fa-adjust" aria-hidden="true"></i>
                        }else if(slide.status == 1){
                            return <i key={slide.id} data-slide={slide.id} className="fa fa-check-circle" aria-hidden="true"></i>
                        }

                        return <i key={slide.id} data-slide={slide.id} className="fa fa-circle-thin" aria-hidden="true"></i>
                    }.bind(this))
                }

            </div>
        )
    }
}


class PresentationSlide extends React.Component {

    componentDidMount(){
        let slide = $.grep(this.props.Slides, function(e){ return e.id == this.props.ActiveSlideId;}.bind(this))[0];
        if(slide.type == "video") {
            this.playerSetup(slide);
        }else if(slide.type == "content" && slide.subtype == "canvas") {
            this.renderCanvas(slide);
        }
    }

    componentDidUpdate(){

        let slide = $.grep(this.props.Slides, function(e){ return e.id == this.props.ActiveSlideId;}.bind(this))[0];
        if(slide.type == "video") {
            this.playerSetup(slide);
        }else if(slide.type == "content" && slide.subtype == "canvas") {
            this.renderCanvas(slide);
        }


    }


    playerSetup(slide){

        let that = this;

        plyr.setup();

        document.querySelector('.js-plyr').addEventListener('ended', function(event) {
            that.props.Next();
        });
    }

    renderCanvas(slide){


        let canvas = new fabric.Canvas(`${this.props.ActiveSlideId}`,{stateful: false});

        canvas.setWidth($('.PresentationSlideContainer').width());
        canvas.setHeight('250');
        canvas.calcOffset();


        let content = slide.content.replace(/\n/g,'\\n');
        canvas.loadFromJSON(content, canvas.renderAll.bind(canvas), function (o, object) {
            fabric.log(o, object);
            object.selectable = false;

        });


    }

    render(){

        let slide = $.grep(this.props.Slides, function(e){ return e.id == this.props.ActiveSlideId;}.bind(this))[0];

        if(slide.type == "content" && slide.subtype == "canvas") {

            return (
                <div className="PresentationSlideContainer">
                    <Canvas id={slide.id} data-id={slide.id} data-status={slide.status}/>
                </div>
            )
        } else if(slide.type == "video"){

            return (
                <div className="PresentationSlideContainer">
                    <Video id={slide.id} data-id={slide.id} data-status={slide.status} videoType={slide.subtype} content={slide.content}/>
                </div>
            )

        } else if(slide.type == "audio"){

            return (
                <div className="PresentationSlideContainer">
                    <Audio id={slide.id} data-id={slide.id} data-status={slide.status} videoType={slide.subtype} content={slide.content}/>
                </div>
            )

        }
    }
}

class Canvas extends React.Component {
    render(){
        return (
            <div className="slide-wrapper" data-id={this.props.id} data-status={this.props.status}>
                <canvas id={this.props.id} data-id={this.props.id} data-status={this.props.status}></canvas>
            </div>
        )
    }
}


class Video extends React.Component {
    render(){

        if(this.props.videoType == "youtube") {
            return (
                <div className="slide-wrapper" data-id={this.props.id} data-status={this.props.status}>
                    <div className="js-plyr" data-type="youtube" data-video-id={this.props.content} id={this.props.id} data-id={this.props.id}
                         data-status={this.props.status}></div>
                </div>
            )
        }else if(this.props.videoType == "vimeo"){
            return (
                <div className="slide-wrapper" data-id={this.props.id} data-status={this.props.status}>
                    <div className="js-plyr" data-type="vimeo" data-video-id={this.props.content} id={this.props.id} data-id={this.props.id}
                         data-status={this.props.status}></div>
                </div>
            )

        }else if(this.props.videoType == "local"){
            return (
                <div className="slide-wrapper" data-id={this.props.id} data-status={this.props.status}>
                    <div className="slide-wrapper" data-id={this.props.id} data-status={this.props.status}>
                        <video poster={this.props.poster} controls>
                            <source src={this.props.content} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            )
        }
    }
}

class Audio extends React.Component {
    render(){
        return (
            <div className="slide-wrapper" data-id={this.props.id} data-status={this.props.status}>
                <center>
                    <audio controls>
                        <source src={this.props.content} type="audio/mp3"></source>
                    </audio>
                </center>
            </div>
        )
    }
}


class PresentationNavigation extends React.Component {

    render(){

        return (
            <div className="PresentationNavigationContainer">
                <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <button onClick={this.props.Prev} type="button" className="btn btn-default"><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                    <button type="button" className="btn btn-default"><i className="fa fa-question-circle" aria-hidden="true"></i></button>
                    <button onClick={this.props.Next} type="button" className="btn btn-default"><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}
