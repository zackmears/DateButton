
function DateEntry() {

    var ThatDate = document.getElementById("DateInput1");{
    var dateString = textInput.value;
    var dateValue = Date.parse(dateString);
        if (!isNaN(ThatDate)) {
            alert("Please enter a date");
        } else {
           showOutput(DateOutput);
        }

    

    }

    function init() {
        var button = document.getElementById("addButton");
        button.onclick = DateEntry;

    }

    function showOuput() {
        var DateInput1 = document.getElementById("DateOuput").value;
    }

    window.onload = init;
}