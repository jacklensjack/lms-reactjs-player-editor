
function Connector(url,callback){
    this.url = url;
    this.callback = callback;
}

Connector.prototype.SendToServer = function(requestData){

    var that = this;
    requestData._token = $('meta[name="csrf-token"]').attr("content");

    $.post( that.url, requestData)
        .done(function( data ) {

            that.callback(data);
        })
        .fail(function() {
            alert( "Connector error : SendToServer Failed " );
        });
};
