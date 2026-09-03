// "use server";

// export async function submitForm(_, formData) {
//   const name = formData.get("name");

//   const hour = new Date().getHours();
//   let greeting;

//   if (hour < 12) {
//     greeting = "Good morning";
//   } else if (hour < 18) {
//     greeting = "Good afternoon";
//   } else {
//     greeting = "Good evening";
//   }

//   return { message: `${greeting}, ${name}` };
// }

"use server"
export async function submitForm(_, formData) {
    const name = formData.get("name")

    const hour= new Date().getHours()
    let greeting;

    if (hour<12){
        greeting = "Good morning"
    }
    else if(hour<18){
        "Good Afternoon"
    }
    else {
        "Good evening"
    }

    return {message: `${greeting}, ${name}`}
}