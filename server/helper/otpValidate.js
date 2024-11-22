// export const otpVerificationn = async(otpTime) =>{
//     try {
//         console.log("milliseconds is : "+otpTime);
//         let cDateTime  = new Date();
//         let differenceValue = (otpTime - cDateTime.getTime())/1000;
//         differenceValue /= 60;

//         let minutes = Math.abs(differenceValue);

//         console.log(`Expired minutes :- `+ differenceValue)

//         if(minutes > 2){
//             return true;
//         }

//         return false

//     } catch (error) {
//         console.log(error.message)
//     }
// }

export const otpVerificationn = (otpExpiration) => {
    const currentTime = new Date().getTime();
    const expirationTime = new Date(otpExpiration).getTime();
  
    return currentTime > expirationTime; // True if OTP has expired
  };
  