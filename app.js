const preview = document.querySelector(".preview");
const mypicture = document.querySelector("#mypicture");

mypicture.addEventListener("change", function () {
    const file = mypicture.files[0];
    const image = document.createElement("img");

    if (!file) {
        return;
    }
    if (!file.name.endsWith(".jpg")) {
        alert("Hình ảnh phải có đuôi là jpeg");
        return;
    }
    if (file.size / (1024 * 1024) > 5) {
        alert("Hình ảnh không được có dung lượng quá 5MB");
        return;
    }
    const imgURL = URL.createObjectURL(file);
    image.src = imgURL;
    //c2
    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(file);
    // fileReader.onloadend = function(e) {
    //     image.src = e.target.result;
    // };
    preview.appendChild(image);
});
