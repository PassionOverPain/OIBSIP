const screen = document.getElementById('screen');
function appendDisplay(input)
{
 screen.value += input;
}
function calculate()
{
    try
    {
        screen.value = eval(screen.value); // Not a good coding Practice, just for this basic calculator 😃//
    }
    catch(error)
    {
        screen.value = "Error.";
    }
}
function clearDisplay()
{
    screen.value = "";
}