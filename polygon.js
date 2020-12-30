class POLYGON {
    constructor(name, type, coordinates) {
        this.name = name;
        this.type = type;
        this.coordinates = coordinates;
    }
  
    calcCentroid() {
      let sumOfXCoordinates = 0;
      let sumOfYCoordinates = 0;
      let n = 0;
      for(let i =0; i < this.coordinates.length; i++) {
        n++;
        sumOfXCoordinates += parseInt(this.coordinates[i][0]);
        sumOfYCoordinates += parseInt(this.coordinates[i][1]);
      }
      let x = sumOfXCoordinates/n;
      let y = sumOfYCoordinates/n
      return [x,y]
      }
    
  }
  module.exports = POLYGON;