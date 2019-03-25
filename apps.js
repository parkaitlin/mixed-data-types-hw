// 1. Data types
// A light switch that can be either on or off
    // data types: 
// A user's email address
    // data types:
// A spaceship with a hull, laser blasters, tractor beam, and warp drive
    // data types:
// A list of student names from our class
    // data types:
// A list of student names from our class, each with a location
    // data types:
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
    // data types: 

// 2. Take it Easy
    // 1.
    const theRainbow = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple'
    ];
    // 2. 
    console.log(theRainbow[4]);
    // 3.
    const khp = {
        name: 'Kaitlin H Park',
        faveFood: 'Fried Chicken & Beer',
        hobby: 'golf',
        currentHometown: 'Orange County, CA',
        faveDataType: 'Objects'
    };
    // 4.
    console.log(khp.hobby);

// 3. Crazy Object!
const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  };

  console.log(crazyObject.taco[1].salsa[5]);
  console.log(crazyObject.larry.quotes[0]);
  console.log(crazyObject.larry.characters[2].favourtieHobby);
  console.log(crazyObject.larry.characters[1]);
  




