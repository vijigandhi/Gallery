"use strict"

let Arr_in_Images = ["nature-1.jpeg", "nature-2.jpeg", "nature-3.jpeg", "city-1.jpeg", "city-2.jpeg",
    "city-3.jpeg", "city-4.jpeg", "city-5.jpeg"];

let img_title = document.getElementById("img_title");
let container_1 = document.querySelector(".container");
let container_2 = document.querySelector(".main_container1")
let container_1_img = document.querySelectorAll(".img_9");
let Focus_img = document.getElementById("focus_img")

let bottom_hide_img = document.querySelector(".bottom_hide_img");

let img_1 = document.createElement("img");
img_1.className = "img_hide";

let img_2 = document.createElement("img");
img_2.className = "img_hide";

let img_3 = document.createElement("img");
img_3.className = "img_hide";

let img_4 = document.createElement("img");
img_4.className = "img_hide";

let img_5 = document.createElement("img");
img_5.className = "img_hide";

let count = 0;
let arr_1 = [];
arr_1[0] =img_1;
arr_1[1] = img_2;
arr_1[2] = img_3;
arr_1[3] = img_4;
arr_1[4] = img_5;

let opacity_add_to_img = 0;
container_1_img.forEach((img, index) => {

    img.addEventListener("click", () => {

        container_1.classList.toggle("container_1_none");
        container_2.classList.toggle("main_container1_block");
        document.body.classList.toggle("body_color");
        Focus_img.src = Arr_in_Images[index];
        count = index;
        if (opacity_add_to_img != 0) {
            opacity_add_to_img.classList.remove("opacity");

        }

        if (index > 2 && index != 8) {
            img_title.innerHTML = "Cites";

            img_1.src=Arr_in_Images[3];
            img_2.src=Arr_in_Images[4];
            img_3.src=Arr_in_Images[5];
            img_4.src=Arr_in_Images[6];
            img_5.src=Arr_in_Images[7];
            bottom_hide_img.append(img_1,img_2,img_3,img_4,img_5);

            opacity_add_to_img = arr_1[count-3];
            opacity_add_to_img.classList.add("opacity");
        }
        else if (index != 8 && index < 3) {
            img_title.innerHTML = "Nature";
            if(bottom_hide_img.children.length==5){
             bottom_hide_img.lastElementChild.remove();
             bottom_hide_img.lastElementChild.remove();

            }
            img_1.src=Arr_in_Images[0];
            img_2.src=Arr_in_Images[1];
            img_3.src=Arr_in_Images[2];

            bottom_hide_img.append(img_1,img_2,img_3);
            opacity_add_to_img = arr_1[count];
            opacity_add_to_img.classList.add("opacity");


        }
    })
});

let rigth_left_btn = document.querySelectorAll(".two_btn");
rigth_left_btn.forEach((btn,) => {

    btn.addEventListener("click", (event) => {

        if (opacity_add_to_img != 0) {
            opacity_add_to_img.classList.remove("opacity");
        }

        if (bottom_hide_img.children.length < 5) {
            console.log("count_1= "+count);

            if (event.target.id == "left_btn") {

                if (count == 0) {
                    count = 3;
                }
                count--;
                Focus_img.src = Arr_in_Images[count];

            }
            else {

                if (count == 2) {
                    count = -1;
                }
                count++;
                Focus_img.src = Arr_in_Images[count];
            }
            console.log("count= "+count);
            opacity_add_to_img = arr_1[count];
            opacity_add_to_img.classList.add("opacity");

        }

        else {

            if (event.target.id == "left_btn") {
                if (count == 3) {
                    count = 8;
                }
                count--;
                Focus_img.src = Arr_in_Images[count];
            }

            else {

                if (count == 7) {
                    count = 2;
                }
                count++;
                Focus_img.src = Arr_in_Images[count];
            }

            opacity_add_to_img = arr_1[count - 3];
            opacity_add_to_img.classList.add("opacity");

        }
    })
});

arr_1.forEach((img, index_1) => {
    img.addEventListener("click", () => {
console.log(index_1);
       count=index_1;
        if (opacity_add_to_img != 0) {
            opacity_add_to_img.classList.remove("opacity");
        }
        opacity_add_to_img = img;
        opacity_add_to_img.classList.add("opacity");

        if (bottom_hide_img.children.length < 5) {

            Focus_img.src = Arr_in_Images[index_1];
        }

        else {
            count = index_1 + 3;
            Focus_img.src = Arr_in_Images[count];
        }
    })
});

