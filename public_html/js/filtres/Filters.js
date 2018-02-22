app = angular.module("App");

app.filter("offset", function() {
    return function(input, start){
        s=parseInt(start,10)-1;
        s=(s*10);
        return input.slice(s,s+10);
    };
});