var stat = function(value){
    var _value = value;
    var _this = {
        value: function() { return _value; },
        bonus: function() {
            return Math.floor(_value/2)- 5;
        }
    };
    return _this;
};

var characters = [
    {
        name: "Percy Jackson",
        race: "Human",
        hit_points: 6,
        strength: stat(14),
        dexterity: stat(12),
        constitution: stat(11),
        wisdom: stat(9),
        intelligence: stat(11),
        charisma: stat(7)
    },
    {
        name: "Pilipili",
        race: "High Elf",
        hit_points: 3,
        strength: stat(9),
        dexterity: stat(11),
        constitution: stat(7),
        wisdom: stat(12),
        intelligence: stat(14),
        charisma: stat(10)
    },
    {
        name: "Anabeth",
        race: "Half-Eld",
        hit_points: 7,
        strength: stat(8),
        dexterity: stat(10),
        constitution: stat(12),
        wisdom: stat(11),
        intelligence: stat(13),
        charisma: stat(15)
    },
    {
        name: "Miraak",
        race: "Wood Elf",
        hit_points: 5,
        strength: stat(10),
        dexterity: stat(15),
        constitution: stat(10),
        wisdom: stat(9),
        intelligence: stat(7),
        charisma: stat(7)
    }
];