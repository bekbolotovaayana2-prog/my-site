function order(foodName) {

    let phone = "996226323266";

    let message = "Саламатсызбы? Буйрутма берсек болобу?";

    let url = "https://wa.me/" + phone +
              "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}