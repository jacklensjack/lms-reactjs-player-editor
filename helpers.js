
Handlebars.registerHelper('isEqual', function(v1, v2, options) {
    if(v1 == v2) {
        return true;
    }
    return false;
});
