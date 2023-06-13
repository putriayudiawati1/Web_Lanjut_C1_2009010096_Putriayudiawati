$("#simpan").click(function(){
  var kode_produk = $("#kode_produk").val()
  console.log(kode_produk)
  if (kode_produk == "") {
    $("#lihat_kode_produk").text("Kode Produk Masih Kosong!")
  }else{
    $("#lihat_kode_produk").text("")
  }

  var nama_produk = $("#nama_produk").val()
  console.log(nama_produk)
  if (nama_produk == "") {
    $("#lihat_nama_produk").text("Produk Masih Kosong!")
  }else{
    $("#lihat_nama_produk").text("")
  } 

  var jenis_produk = $("#jenis_produk").val()
  console.log(jenis_produk)
  if (jenis_produk == "") {
    $("#lihat_jenis_produk").text("Produk Masih Kosong!")
  }else{
    $("#lihat_jenis_produk").text("")
  }  

  var harga_produk = $("#harga_produk").val()
  console.log(harga_produk)
  if (harga_produk == "") {
    $("#lihat_harga_produk").text("Produk Masih Kosong!")
  }else{
    $("#lihat_harga_produk").text("")
  } 

  var stock = $("#stock").val()
  console.log(stock)
  if (stock == "") {
    $("#lihat_stock").text("Stock Produk Masih Kosong!")
  }else{
    $("#lihat_stock").text("")
  } 

  var no = $("#no").val()
  if (no == "") {
    $("#lihat_no").text("Nomor Produk Masih Kosong!")
  }else{
    $("#lihat_no").text("")
  } 

if (kode_produk !="" && nama_produk !="" && jenis_produk !="" && harga_produk !="" && stock !="") {
  $("#notif").html(`
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Add Successfully!</strong> Data Berhasil Ditambahkan!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `)

  var tabel_produk = document.getElementById("tabel_produk")
  var baris = tabel_produk.insertRow(1)

  var kolom_no = baris.insertCell(0)
  var kolom_kode_produk = baris.insertCell(1)
  var kolom_nama_produk = baris.insertCell(2)
  var kolom_jenis_produk = baris.insertCell(3)
  var kolom_harga = baris.insertCell(4)
  var kolom_stock = baris.insertCell(5)

  var no = 0

  kolom_kode_produk.innerHTML = kode_produk
  kolom_nama_produk.innerHTML = nama_produk
  kolom_jenis_produk.innerHTML = jenis_produk
  kolom_harga.innerHTML = harga_produk
  kolom_stock.innerHTML = stock
  kolom_no = no+1

}
    
    
})
