// menghasilkan nilai acak antara 1 dan 50

function dapatNilai() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
// membuat array dengan 100 nilai acak
  function buatArray() {
    const randomArray = [];
    for (let i = 0; i < 100; i++) {
      randomArray.push(dapatNilai());
    }
    return randomArray;
  }

// memecah array menjadi array genap dan ganjil
function bagiArray(array) {
  const evenArray = [];
  const oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) { 
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  return { evenArray, oddArray };
}

  
// menghitung min, max, total, dan rata-rata dari array
  function hitungArray(array) {
    let min = array[0];
    let max = array[0];
    let total = 0;
  
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      if (value < min) {
        min = value;
      }
      if (value > max) {
        max = value;
      }
      total += value;
    }
  
    const average = total / array.length;
    return { min, max, total, average };
  }
  
// membuat array acak
  const randomArray = buatArray();
  
// memecah array menjadi genap dan ganjil
  const { evenArray, oddArray } = bagiArray(randomArray);
  
// menghitung statistik untuk masing-masing array
  const evenStats = hitungArray(evenArray);
  const oddStats = hitungArray(oddArray);
  
// menampilkan output
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArray);
  console.log("Array ganjil dengan jumlah index 50:", oddArray);
  console.log("Array genap:", evenStats);
  console.log("Array ganjil:", oddStats);
  console.log("Panjang (length) Array genap:", evenArray.length); 
  console.log("Panjang (length) Array ganjil:", oddArray.length); 
  console.log("Total Array:", randomArray.length);
  
// perbandingan
  if (evenStats.min > oddStats.min) {
    console.log("Min lebih besar pada array genap");
  } else if (evenStats.min < oddStats.min) {
    console.log("Min lebih besar pada array ganjil");
  } else {
    console.log("Min memiliki nilai sama antara array genap dan ganjil");
  }
  
  if (evenStats.max > oddStats.max) {
    console.log("Max lebih besar pada array genap");
  } else if (evenStats.max < oddStats.max) {
    console.log("Max lebih besar pada array ganjil");
  } else {
    console.log("Max memiliki nilai sama antara array genap dan ganjil");
  }
  
  if (evenStats.total > oddStats.total) {
    console.log("Total lebih besar pada array genap");
  } else if (evenStats.total < oddStats.total) {
    console.log("Total lebih besar pada array ganjil");
  } else {
    console.log("Total memiliki nilai sama antara array genap dan ganjil");
  }
  
  if (evenStats.average > oddStats.average) {
    console.log("Rata-rata lebih besar pada array genap");
  } else if (evenStats.average < oddStats.average) {
    console.log("Rata-rata lebih besar pada array ganjil");
  } else {
    console.log("Rata-rata memiliki nilai sama antara array genap dan ganjil");
  }




