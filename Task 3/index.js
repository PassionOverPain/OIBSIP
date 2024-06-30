const radio = document.getElementsByName("radios");
const numberbox = document.getElementById("number");
const lblresult = document.getElementById("lblresult");
let cut=true;
function cutNum()
{
    if(cut==true)
        {
            cut=false;
        }
    else
        {
         cut=true;
        }
}
function convert()
{
    let number = Number(numberbox.value);
    let answer;
    let temp;
if(numberbox.value=="")
    {
        window.alert("Please Enter a temperature before proceeding.")
        return;
    }
switch(true)
{
    case radio[0].checked : answer = (number*9/5)+32;
                            temp="°F";
                            break;
    case radio[1].checked : answer = number+273.15;
                            temp="K";
                            break;
    case radio[2].checked : answer = (number-32)*5/9;
                            temp="°C";
                            break; 
    case radio[3].checked : answer = (number - 32)*5/9 +273.15;
                            temp="K";
                            break;
    case radio[4].checked :  answer = number-273.15;
                            temp="°C";
                            break;
    case radio[5].checked :  answer = (number - 273.15)*9/5 +32;
                            temp="°F";
                            break;               
    default: 
    window.alert("Please Select a conversion before proceeding.");
    break;
}
if(cut==true)
{
lblresult.textContent = `The result is ${Math.floor(answer)} ${temp} `;
}
else
{
lblresult.textContent = `The result is ${answer} ${temp}`;
}

}