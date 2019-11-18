var filesLoaded = 0;

var files = {
  img1: {
    url: "https://pdfkit.org/docs/images/test.jpeg"
  },
  img2: {
    url: "https://pbs.twimg.com/profile_images/519367942866104320/PB96rDH_.png"
  },
  img3: {
    url:
      "https://img.freepik.com/free-icon/github-character-silhouette_318-40485.jpg?size=338&ext=jpg"
  }
};

function loadedFile(xhr) {
  for (var file in files) {
    if (files[file].url === xhr.responseURL) {
      files[file].data = xhr.response;
    }
  }
  filesLoaded += 1;
  if (filesLoaded == Object.keys(files).length) {
    showPDF();
  }
}

for (var file in files) {
  files[file].xhr = new XMLHttpRequest();
  files[file].xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadedFile(this);
    }
  };
  files[file].xhr.responseType = "arraybuffer";
  files[file].xhr.open("GET", files[file].url);
  files[file].xhr.send(null);
}

function showPDF() {
  //obrazki
  doc.image(files.img1.data, 455, 80, { fit: [80, 80] });
  doc.image(files.img2.data, 455, 200, { fit: [80, 80] });
  doc.image(files.img3.data, 350, 200, { fit: [80, 80] });
}

var saveData = (function() {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  return function(blob, fileName) {
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
})();

stream.on("finish", function() {
  var blob = stream.toBlob("application/pdf");
  saveData(blob, "aa.pdf");
});
