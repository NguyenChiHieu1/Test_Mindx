document.getElementById("kq").addEventListener("click", function() {
    const a = parseInt(document.getElementById("so_a").value);
    const b = parseInt(document.getElementById("so_b").value);

    const show_kq = document.querySelector(".show_kq");
    const result = document.querySelector(".result");

    let sobe;
    let solon;
    let arr = [];
    if (a <= b) {
        sobe = a;
        solon = b;
    } else {
        sobe = b;
        solon = a;
    }

    for (let i = sobe; i <= solon; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            arr.push(i);
        }
    }

    if (arr.length == 0) {
        show_kq.innerHTML = "Không có số chính phương";
        result.innerHTML = "";
        console.log(arr);
    } else {
        show_kq.innerHTML = "Các số chính phương trong khoảng từ " + a + " đến " + b + " là:";
        result.innerHTML = arr.join(" ");
    }
});

