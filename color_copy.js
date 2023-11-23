function copyToClipBoard(color_code) {
  navigator.clipboard.writeText(color_code);

  alert("복사완료\n내용:" + color_code);
}
