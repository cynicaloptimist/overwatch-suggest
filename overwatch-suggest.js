var HeroViewModel = function (hero) {
    this.Id = hero.Id;

    this.AddEnemy = function (enemy) {
        console.log("adding " + JSON.stringify(enemy) + "as enemy");
    }

    this.AddAlly = function (ally) {
        console.log("adding " + JSON.stringify(ally) + "as ally");
    }
}

var ViewModel = function () {
    var Heroes = [
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
    ];

    this.HeroViewModels = Heroes.map(function (hero) {
        return new HeroViewModel(hero);
    });
};

$(document).ready(function() {
    ko.applyBindings(new ViewModel());
});