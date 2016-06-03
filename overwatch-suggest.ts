/// <reference path="typings/globals/jquery/index.d.ts" />
/// <reference path="typings/globals/knockout/index.d.ts" />

module OverwatchSuggest {
    class HeroLibrary {
        Heroes = [
            {
                Id: "Winston",
                CounteredBy: [
                    {
                        Id: "Reaper",
                        Power: 1
                    }
                ],
                SynergizesWith: [
                    {
                        Id: "Hanzo",
                        Power: 1
                    }
                ]
            }
        ]
    }

    $(document).ready(() => {
        ko.applyBindings(new HeroLibrary());
    });
}