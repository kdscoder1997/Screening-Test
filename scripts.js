const boxes = document.querySelectorAll(".box")
const ex_box = document.querySelectorAll(".expanded-box")
boxes.forEach((item) => console.log(item.id)
)

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        var id = this.id
        boxes.forEach(element => {
            element.classList.add("show")
            element.classList.remove("hidden")
        })
        ex_box.forEach(element => {
            element.classList.remove("show")
            element.classList.add("hidden")
        })
        if (this.classList.contains("show")) {
            this.classList.add("hidden")
            this.classList.remove("show")
        }
        if (id === "box1") {
            var exbox = document.getElementById("expanded-box1")
            console.log(exbox);

            // if (exbox.classList.contains("hidden")) {


            exbox.classList.remove("hidden")
            exbox.classList.add("show")

            // }
            // else {


            //     exbox.classList.remove("show")
            //     exbox.classList.add("hidden")

            // }
            console.log(exbox.classList);
        }
        if (id === "box2") {
            var exbox = document.getElementById("expanded-box2")
            console.log(exbox);
            exbox.classList.remove("hidden")
            console.log(exbox.classList);
            exbox.classList.add("show")
        }
        if (id === "box3") {
            var exbox = document.getElementById("expanded-box3")
            console.log(exbox);
            exbox.classList.remove("hidden")
            console.log(exbox.classList);
            exbox.classList.add("show")
        }
    })
    // ex_box[i].addEventListener('click', function () {
    //     var id = this.id
    //     if (this.classList.contains("show")) {
    //         this.classList.add("hidden")
    //         this.classList.remove("show")
    //     }
    //     if (id === "expanded-box1") {
    //         var exbox = document.getElementById("box1")
    //         console.log(exbox);
    //         exbox.classList.remove("hidden")
    //         console.log(exbox.classList);
    //         exbox.classList.add("show")
    //     }
    //     if (id === "expanded-box2") {
    //         var exbox = document.getElementById("box2")
    //         console.log(exbox);
    //         exbox.classList.remove("hidden")
    //         console.log(exbox.classList);
    //         exbox.classList.add("show")
    //     }
    //     if (id === "expanded-box3") {
    //         var exbox = document.getElementById("box3")
    //         console.log(exbox);
    //         exbox.classList.remove("hidden")
    //         console.log(exbox.classList);
    //         exbox.classList.add("show")
    //     }
    // })
}
console.log(boxes);
