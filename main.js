let times = document.querySelector(".times");
let sideImages = Array.from(
  document.querySelectorAll(".content .sideImages img")
);

document.querySelector(".menu").addEventListener("click", (e) => {
  document.querySelector(".nav-bar").classList.add("appear-scale");
});

document.querySelector(".close").onclick = function () {
  document.querySelector(".nav-bar").classList.remove("appear-scale");
};

document.querySelector(".plus").addEventListener("click", (e) => {
  times.textContent++;
});

document.querySelector(".minues").addEventListener("click", (e) => {
  if (times.textContent > "0") {
    times.textContent--;
  }
});

sideImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    sideImages.forEach((img) => {
      img.classList.remove("select");
    });
    e.target.classList.add("select");
    if (e.target.parentElement.getAttribute("class") == "img1") {
      document.querySelector(".mainImage img").src =
        "./images/image-product-1.jpg";
    } else if (e.target.parentElement.getAttribute("class") == "img2") {
      document.querySelector(".mainImage img").src =
        "./images/image-product-2.jpg";
    } else if (e.target.parentElement.getAttribute("class") == "img3") {
      document.querySelector(".mainImage img").src =
        "./images/image-product-3.jpg";
    } else {
      document.querySelector(".mainImage img").src =
        "./images/image-product-4.jpg";
    }
  });
});

document.querySelector(".cart img").onclick = function () {
  document.querySelector(".mineCart").classList.toggle("appear");
};

document.querySelector(".buyCar").addEventListener("click", (e) => {
  if (document.querySelector(".times").textContent > 0) {
    document.querySelector(".times").style.color = "black";
    document.querySelector(".wrong").style.display = "none";
    let div = document.createElement("div");
    let product = document.createElement("div");
    let prodImg = document.createElement("img");
    prodImg.src = document.querySelector(".src").src;
    let text = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.appendChild(
      document.createTextNode(document.querySelector(".main-title").textContent)
    );
    let price = document.createElement("p");
    let priceSpan = document.createElement("span");
    priceSpan.append(
      `$${
        document.querySelector(".price span").textContent *
        document.querySelector(".times").textContent
      }.00`
    );
    price.append(
      `$${document.querySelector(".price span").textContent}.00 X ${
        document.querySelector(".times").textContent
      }`
    );
    price.appendChild(priceSpan);
    text.appendChild(h3);
    text.appendChild(price);
    let trashImg = document.createElement("img");
    trashImg.src = "./images/icon-delete.svg";
    trashImg.className = "trash";
    product.appendChild(prodImg);
    product.appendChild(text);
    product.appendChild(trashImg);
    let checkoutBtn = document.createElement("button");
    checkoutBtn.textContent = "Checkout";
    div.appendChild(product);
    div.appendChild(checkoutBtn);
    document.querySelector(".purch-product").appendChild(div);
    trashImg.onclick = function () {
      div.remove();
      document.querySelector(".notifi").textContent =
        document.querySelector(".purch-product").children.length;
      if (document.querySelector(".notifi").textContent == "0") {
        document.querySelector(".notifi").style.display = "none";
      }
    };
  } else {
    document.querySelector(".wrong").style.display = "block";
    document.querySelector(".times").style.color = "red";
  }

  if (document.querySelector(".purch-product").textContent != "") {
    document.querySelector(".notifi").textContent =
      document.querySelector(".purch-product").children.length;
    document.querySelector(".notifi").style.display = "flex";
  } else {
    document.querySelector(".notifi").textContent =
      document.querySelector(".purch-product").children.length;
    document.querySelector(".notifi").style.display = "none";
  }
});
