<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
  let alas = 10;
  let tinggi = 5;
  alert("Luas Segitiga: " + (0.5 * alas * tinggi));
</script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
  let input = prompt("Masukkan angka yang ingin dicek:");
  let angka = parseFloat(input);

  if (isNaN(angka)) {
    alert("Harap masukkan angka yang valid!");
  } else if (angka > 0) {
    alert("Angka " + angka + " adalah POSITIF");
  } else if (angka < 0) {
    alert("Angka " + angka + " adalah NEGATIF");
  } else {
    alert("Angka bernilai NOL");
  }
 </script>
</body>
</html>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
  let hasil = [];

  for (let i = 1; i <= 10; i++) {
    // Mengecek apakah sisa bagi dengan 2 adalah 0 (ciri bilangan genap)
    if (i % 2 === 0) {
      hasil.push(i);
    }
  }

  alert("Bilangan genap 1 sampai 10:\n" + hasil.join(", "));
</script>
</body>
</html>
