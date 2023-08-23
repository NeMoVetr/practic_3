function calculateIMT() {
    // Ввод данных
    let weight = parseInt(document.getElementById('weight').value);
    let height = parseInt(document.getElementById('height').value);
    height = (height / 100) ** 2;

    var message;

    // логика
    if (height == 0 || weight == 0) {
        return alert("Введено значение 0");
    } else {
        let result = weight / height;
        result = Math.round(result * 10) / 10;
        
        if (result <= 16) {
            message = result + " - Выраженный дефицит массы тела";
        } 
        if (result > 16 && result <= 18.5) {
            message = result + " - Недостаточная (дефицит) масса тела";
        } 
        if (result > 18.5 && result <= 25) {
            message = result + " - Норма";
        } 
        if (result > 25 && result <= 30) {
            message = result + " - Избыточная масса тела (предожирение)";
        } 
        if (result > 30 && result <= 35) {
            message = result + " - Ожирение первой степени";
        } 
        if (result > 35 && result <= 40) {
            message = result + " - Ожирение второй степени";
        } 
        if (result > 40) {
            message = result + " - Ожирение третьей степени (морбидное)";
        }
        
        // вывод данных
        if (message.trim() !== "") {
            document.getElementById('out').innerText = message;
        }
    }
}

