function trinput(){
    var a=document.forms['biodata']['Nama'].value;
    var b=document.forms['biodata']['jeniskelamin'].value;
    var c=document.forms['biodata']['Tanggal Lahir'].value;
    var d=document.forms['biodata']['Alamat'].value;
    var e=document.forms['biodata']['No NIk'].value;
    var f=document.forms['biodata']['No Hp'].value;
    var g=document.forms['biodata']['Jumlah Anggota'].value;
    var h=document.forms['biodata']['Pemesanan Untuk Tanggal'].value;

    var tabel=document.getElementById("tabelinput");
    var row=tabel.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    
    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
    cell5.innerHTML = e;
    cell6.innerHTML = f;
    cell7.innerHTML = g;
    cell8.innerHTML = h;

    alert('data berhasil disimpan')
}