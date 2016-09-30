var characters = [
  {
    "name": "Frodo",
    "class": "Thief",
    "race": "Halfling",
    "abilities": {
      "str": 12,
      "dex": 16,
      "con": 14,
      "int": 14,
      "wis": 14,
      "cha": 13
    },
    "armorClass": 12,
    "hitPoints" : {
      "total": 12,
      "current": 12
    }
  },
  {
    "name": "Samwise",
    "class": "Cleric",
    "race": "Halfling",
    "abilities": {
      "str": 15,
      "dex": 12,
      "con": 18,
      "int": 11,
      "wis": 15,
      "cha": 9
    },
    "armorClass": 13,
    "hitPoints" : {
      "total": 10,
      "current": 10
    }
  }
];

function createTableRow(values) {
  var rowHTML = '<tr>';
  for(var i in values) {
    rowHTML += '<td>' + values[i] + '</td>';
  }
  rowHTML += '</tr>';
  return rowHTML;
}

function render() {
  var el = document.querySelector('table');
  var tbody = el.querySelector('tbody');
  for(var c in characters) {
    var character = characters[c];
    tbody.innerHTML += createTableRow([
      character.name,
      character.class,
      character.race,
      character.abilities.str,
      character.abilities.dex,
      character.abilities.con,
      character.abilities.int,
      character.abilities.wis,
      character.abilities.cha,
      character.armorClass,
      character.hitPoints.total,
      character.hitPoints.current
      ]);
  }
}

render();
