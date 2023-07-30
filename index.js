
function saveApplication(event) {
    event.preventDefault();
    let y = 0;
    if (document.getElementById("name").value.length <= 0) {
        alert("Adınız bölümü boş bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("surname").value.length <= 0) {
        alert("Soyad bölümü boş bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("age").value.length <= 0) {
        alert("Doğum Tarihi bölümü Boş Bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("birthdate").value.length <= 0) {
        alert("Doğum Yeriniz bölümü Boş Bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("experiance").value.length <= 0) {
        alert("Tecrübeleriniz bölümü boş bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("homephone").value.length <= 0) {
        alert("Ev telefonu bölümü boş bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("workphone").value.length <= 0) {
        alert("İş telefonu bölümü boş bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("phone").value.length <= 0) {
        alert("Cep telefonu bölümü boş bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("Adress").value.length <= 0) {
        alert("Adres bölümü boş bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("workposition").value.length <= 0) {
        alert("İş pozisyonu boş bırakılamaz.")
        y = y + 1;
    }
    else if (document.getElementById("Languages").value.length <= 0){
        alert("Yabancı dilleriniz bölümü boş bırakılamaz")
        y = y + 1;
    }
    else if(y == 0) {
        alert("başarıyla kaydoldunuz.")
    }

}