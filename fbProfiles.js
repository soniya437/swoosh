const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //


// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

function profileLookup(name, property) {
    for (let index = 0; index < facebookProfiles.length; index++) {
        const profile = facebookProfiles[index];

        if (profile.firstName === name) {
            console.log(profile[property] ? profile[property] : "no such property");
            break
        }

    }
}
profileLookup("Jay", "emails")
// ================================== 1 ====================================== //


//complete the above functin such that it returns the list of full names of all people of gurgaon.
//ex = ['Jay ', 'Pritesh Kumar']

function person(place) {
    for (let i = 0; i < facebookProfiles.length; i++) {
        const people = facebookProfiles[i]
        if (people.address.location === place) {
            console.log(`${people.firstName} lives in ${place}`)
        }
    }
}
person("lucknow")

// ==================================2 ====================================== //

// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents
function findName(stateName) {
    let name = " "
    for (let index = 0; index < facebookProfiles.length; index++) {
        const person = facebookProfiles[index];
        const { address, firstName, lastName } = person;
        if (address.state == stateName) {
            name = firstName + " " + lastName
            console.log(name)
            break;
        } 
    }
}


findName("haryana")


//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

 function findName(place) {
    for(let i=0; i<facebookProfiles.length;i++){
        const people = facebookProfiles[i]
        if (people.address.location === place){
            console.log( people.firstName+ " "+ people.lastName +" " + people.hasDrivingLicense)
        }
    }

     }
findName("gurgaon")


// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]

function printNamesUpdated() {
    const nameArr = []
    for (let i = 0; i < facebookProfiles.length; i++) {
        const { firstName, lastName } = facebookProfiles[i];
        const fullName = firstName + " " + lastName;
        nameArr.push(fullName);
    }
    console.log(nameArr)
}
printNamesUpdated()

// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

function printLikesUpdated() {
    let likesArr = [];
    for (let i = 0; i < facebookProfiles.length; i++) {

        const likes = facebookProfiles[i].likes || [];
        // we can use push as well
        likesArr = [...likesArr, ...likes];

    }
    console.log(likesArr);
}
printLikesUpdated()

// ====================================== 6 ================================== //
//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"


function problemSix(place) {
    let name = "not found"
    for (let index = 0; index < facebookProfiles.length; index++) {
        const person = facebookProfiles[index];
        if (person.address.location === place && person.hasDrivingLicense === true) {
            name = person.firstName + " " + (person.lastName || "");

        }
    }
    console.log(name);
}
problemSix("delhi")

//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh



function problemSeven() {
    let Name = "not found"
    for (let index = 0; index < facebookProfiles.length; index++) {
        const person = facebookProfiles[index];
        if (person.likes.includes("driving") && person.hasDrivingLicense === false) {
            Name = person.firstName + " " + (person.lastName || "");
            break
        }
    }
    console.log(Name);
}
problemSeven()