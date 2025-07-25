  document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })
         function myFunction() {
            let a = document.getElementById("1input").value;
            let b = document.getElementById("2input").value;
            let c = document.getElementById("3input").value;
            let result;

            if (a < b || a < c) {

                if (b < a && b < c) {
                    result = `${b} is the smallest number than ${a} & ${c}`
                    document.getElementById("output").style.background = "red"
                }
                else {
                    result = `${a} is the smallest number than ${b} & ${c}`
                    document.getElementById("output").style.background = "brown"
                }
            }
            else {
                result = `${c} is the smallest number than ${a} & ${b}`
                document.getElementById("output").style.background = "green"
            }
            document.getElementById("output").style.display = "flex"
            document.getElementById("output").innerHTML = result;
        }    