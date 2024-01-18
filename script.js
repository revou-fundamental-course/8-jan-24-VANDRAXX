function hitungLuas() {
    var sisi = document.getElementById("sisi").value;
    var hasilLuas = sisi * sisi;
    document.getElementById("hasilLuas").innerHTML = "Hasil: " + hasilLuas;
}

function hitungKeliling() {
    var sisi = document.getElementById("sisiKeliling").value;
    var hasilKeliling = 4 * sisi;
    document.getElementById("hasilKeliling").innerHTML = "Hasil: " + hasilKeliling;
}

function resetForm() {
    document.getElementById("sisi").value = "";
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}