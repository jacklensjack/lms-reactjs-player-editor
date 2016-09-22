/**
 * Created by halnator on 8/3/16.
 */


function Slide(dataArray){

    var that = this;
    this.lesson_id = dataArray.lesson_id;
    this.course_id = dataArray.course_id;
    this.type = dataArray.type;
    this.subtype = dataArray.subtype;
    this.title_ar = dataArray.title_ar;
    this.title_en = dataArray.title_en;
    this.connector = new Connector("/slide",function(){
        that.AppendSlide();
    });

}

Slide.prototype.AppendSlide = function(){

    var source   = $("#slide-template").html();

    var template = Handlebars.compile(source);
    var context = {
        slides : [
            {
                id:this.id,
                lesson_id:this.lesson_id,
                course_id:this.course_id,
                type:this.type,
                subtype:this.subtype,
                title_ar:this.title_ar,
                title_enu:this.title_en

            },

        ]
    };
    var html    = template(context);

    $('.slides').append(html);
};

Slide.prototype.Save = function(){

    var data = {
        id:this.id,
        lesson_id:this.lesson_id,
        course_id:this.course_id,
        type:this.type,
        subtype:this.subtype,
        title_ar:this.title_ar,
        title_en:this.title_en
    };



    this.connector.SendToServer(data);

};
