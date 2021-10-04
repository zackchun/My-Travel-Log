//Data list
// let placeList = ["Buenos Aires", "Machu Pichu", "Uyuni", "Rio"]
// let memoList = ["My LATAM Home", "top of the world", "Photo King", "Carnival place"]

// let data1 = [1,"Buenos Aires","My home of LARAM"]
// let data2 = [2, "Machu Pichu","Top of the world"]
// let data3 = [3, "Uyuni Desert", "Best photo place in the world"]

// var trip = [
//   { 
//     place: "Buenos Aires",
//     memo: "My home of LATAM",
//     photo: "./1.jpg",
//     gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210146.68168877432!2d-58.573383207134555!3d-34.615743688997895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2skr!4v1632753753301!5m2!1sen!2skr"
//   },
//   {
//     place: "Machu Pichu",
//     memo: "Top of the world",
//     photo: "./2.jpg",
//     gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124130.91048587242!2d-72.0092895847323!3d-13.530009562330958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d826598431%3A0x2aa996cc2318315d!2sCusco%2C%20Peru!5e0!3m2!1sen!2skr!4v1633259543640!5m2!1sen!2skr"
//   },
//   {
//     place: "Uyuni Desert",
//     memo: "Best photo place in the world",
//     photo: "./3.jpg",
//     gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59809.74800026768!2d-66.86232156750717!3d-20.46070554493811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93ffbad958d3f2bd%3A0x1455841e2c4e6653!2sUyuni%2C%20Bolivia!5e0!3m2!1sen!2skr!4v1633259643321!5m2!1sen!2skr"  
//   },
//   {
//     place: "Rio de Janeiro",
//     memo: "Most crazy time & place in the world",
//     photo: "./4.jpg",
//     gmap:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470397.8752586788!2d-43.72776328370811!3d-22.91398309995505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997efe4224b50b%3A0xf988253c846c59ee!2sRio%20de%20Janeiro%20-%20State%20of%20Rio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2skr!4v1633259721507!5m2!1sen!2skr"
//   }

// ]

window.addEventListener("load", function () {
  console.log("page is loaded");

  //Load the json data file
  fetch("travel.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //Do something with 'data'
      travelData = data;
    })
    .catch((error) => {
      console.log("Error!!! : " + error);
    });
});

function display(n) {
  var tripData = travelData[n];
  document.getElementById("mapData").src = tripData.gmap;
  document.getElementById("placeData").innerHTML = tripData.place;
  document.getElementById("memoData").innerHTML = tripData.memo;
  document.getElementById("photoData").src = tripData.photo;
  //document.getElementById("colorData").innerHTML = tripData.color;

}


//Change travel data by click number

// function numberClick(n) {
//   var tripData = trip[n];
//   document.getElementById("mapData").src = tripData.gmap;
//   document.getElementById("placeData").innerHTML = tripData.place;
//   document.getElementById("memoData").innerHTML = tripData.memo;
//   document.getElementById("photoData").src = tripData.photo;
// }


// function no(n) {
//   document.getElementById("placeData").innerHTML = ["data" + n][1];
//   document.getElementById("memoData").innerHTML = ["data" + n][2];
//   document.getElementById("photoData").src = "./" + n + ".JPG";
// }

// function numbering(n) {
//   document.getElementById("placeData").innerHTML = placeList[n - 1];
//   document.getElementById("memoData").innerHTML = memoList[n - 1];
//   document.getElementById("photoData").src = "./" + n + ".JPG";
// }
