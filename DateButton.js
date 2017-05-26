
function DateEntry() {

    var ThatDate = document.getElementById("DateInput1");{
    var dateString = textInput.value;
    var dateValue = Date.parse(dateString);
        if (!isNaN(ThatDate)) {
            alert("Please enter a date");
        } else {
            showOutput(DateOutput);
        }

        return false;

    }

    function init() {
        var button = document.getElementById("addButton");
        button.onclick = DateEntry;

    }



    window.onload = init;
}