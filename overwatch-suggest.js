var ViewModel = function() {
    this.Heroes = [
        {
            Id: "Winston"
        },
        {
            Id: "Tracer"
        },
        {
            Id: "Reaper"
        },
        {
            Id: "Soldier: 76"
        },
    ] 
};

$(document).ready(function() {
    ko.applyBindings(new ViewModel());
});