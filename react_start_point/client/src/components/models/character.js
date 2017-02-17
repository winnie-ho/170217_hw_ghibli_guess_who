var Character = function(name, glasses, hair, gender){
  this.name = name;
  this.glasses = boolean;
  this.hair = hair;
  this.gender = boolean;


  Character.prototype = {
    getName: function(){
      return this.name;
    },

    getGlasses: function(){
      return this.glasses;
    }
  }

}

module.exports = Character;
