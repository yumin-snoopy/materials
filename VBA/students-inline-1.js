function initializePageQr() {
      const target = document.getElementById("pageQr");
      const pageUrl = "https://yumin-snoopy.github.io/materials/VBA/students.html";
      if (!target || target.childElementCount) return;
      if (typeof QRCode === "undefined") {
        document.getElementById("qr-status").innerHTML =
          '<a href="' + pageUrl + '">このページを開く</a><br>開いたらブックマークしてください。';
        return;
      }
      new QRCode(target, {
        text: pageUrl,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
      });
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializePageQr);
    } else {
      initializePageQr();
    }
