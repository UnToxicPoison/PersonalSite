function onServiceClick(element) {
  if (element == "youtube") {
    window.open(
      "https://www.youtube.com/channel/UCpgj5uq0XvjLQ3oPdOCKTTQ",
      "_blank"
    );
  } else if (element == "freelance") {
    window.location.href = "portfolio";
  } else {
    window.open("https://www.instagram.com/sjoerd_coding/", "_blank");
  }
}
