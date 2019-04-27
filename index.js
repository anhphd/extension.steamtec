
function start(){
    var data = {};

var eles = $(".mutilimg a img");
data.images = [];
for (let i = 0; i < eles.length; i++) {
    data.images.push(eles[i].src);
}

var href = $(location).attr("href");
data.id = href.substring(href.lastIndexOf('=') + 1, href.lastIndexOf('.html'));
data.product = {};



data.product.name = $(".basic .name1").text().replace("Product Name:", '').trim();
data.product.code = $(".basic .code").text().replace("Product ID:", '').trim();
data.product.brand = $(".basic .brand").text().replace("Size:", '').trim();


data.details = [];

var dteles = $(".detail tbody tr td");
for (var i = 0; i < dteles.length - 1; i += 2) {
    data.details.push({
        name: dteles[i].innerText,
        value: dteles[i + 1].innerText
    });
}


// console.log(data);

var blob = new Blob([JSON.stringify(data)], { type: "text/plain;charset=utf-8" });
saveAs(blob, data.id + ".json");
setTimeout(()=>{
    window.close();
},5000);
}

setTimeout(()=>{
    start();
},10000);
