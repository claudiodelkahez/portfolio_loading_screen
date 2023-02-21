//modal loader
function contador(count) {
    if (count <= 100) {
        setTimeout(function() {
            document.getElementById("loader").innerHTML = count + "%";
            count++;
            contador(count);
        },26);
    }
    // el modal loader-container desaparece
}
contador(0);

