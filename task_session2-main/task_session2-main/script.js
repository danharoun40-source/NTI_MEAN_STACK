
// // 1- Booking an Appointment
// const bookedSlots = ["a1", "b3", "c2"];

// function bookAppointment(slot) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             if (bookedSlots.includes(slot)) {
//                 reject("This slot is already booked.");
//             } else {
//                 resolve("Appointment booked successfully.");
//             }

//         }, 2000);

//     });
// }

// async function makeBooking(slot) {
//     try {
//         const result = await bookAppointment(slot);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// makeBooking("a1");
// makeBooking("a2");


// // 2- Check Server Status with Retry
// function pingServer() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             const serverOnline = Math.random() > 0.5;

//             if (serverOnline) {
//                 resolve("Server is online.");
//             } else {
//                 reject("Server is offline.");
//             }

//         }, 1000);

//     });
// }

// async function checkServer() {

//     for (let i = 1; i <= 5; i++) {

//         try {
//             const result = await pingServer();
//             console.log("Attempt " + i + ": " + result);
//             return;

//         } catch (error) {
//             console.log("Attempt " + i + ": " + error);
//         }
//     }

//     console.log("Server failed after 5 attempts.");
// }

// checkServer();


// 3- Meal Search by Ingredient
async function searchMeal() {

    const mealName =
        document.getElementById("searchInput").value;

    const response =
        await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
        );

    const data = await response.json();

    const mealsDiv =
        document.getElementById("meals");

    mealsDiv.innerHTML = "";

    if (data.meals) {

        data.meals.forEach(meal => {

            mealsDiv.innerHTML += `
                <div class="card">
                    <img src="${meal.strMealThumb}">
                    <h3>${meal.strMeal}</h3>
                </div>
            `;
        });

    } else {

        mealsDiv.innerHTML =
            "<h2>No meals found.</h2>";
    }
}