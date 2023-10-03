const getAge = function(birth,death){
    if (!death){
        death = new Date().getFullYear();
    } return death - birth;

}



const findTheOldest = function(array) {
    return array.reduce((p,c)=> {
        const oldestAge = getAge(p.yearOfBirth, p.yearOfDeath);
        const currentAge = getAge(c.yearOfBirth,c.yearOfDeath);
        return oldestAge <currentAge ? c : p;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
