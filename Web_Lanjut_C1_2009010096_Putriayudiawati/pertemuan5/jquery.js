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
})
