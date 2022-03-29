let totalSaleprice = 0.0;
        let difference = 0.0;

        document.getElementById("submit").addEventListener("click", submitData);
        document.addEventListener("keyup", function(e) {
            if (e.keyCode === 13){
                submitData();
            }
        });
        document.getElementById("reset").addEventListener("click", function(r){
            document.getElementById("reg").innerHTML = "";
            document.getElementById("totalprice").innerHTML = "";
            document.getElementById("difference").innerHTML = "";
            document.getElementById("total").innerHTML = "";
            document.getElementById("saleprice").value = "";
            document.getElementById("weight").value = "";
            document.getElementById("totalRegprice").value = "";
            document.getElementById("regprice").value = "";
        });

        function submitData(){
            let saleprice = Number(document.getElementById("saleprice").value);
            let weight = Number(document.getElementById("weight").value);
            let totalRegprice = Number(document.getElementById("totalRegprice").value);
            if(Number(document.getElementById("regprice").value) > 0){
                totalRegprice = Number(document.getElementById("regprice").value) * weight;
                totalRegprice =  Number(totalRegprice.toFixed(2));
            }
            calculate(saleprice, weight, totalRegprice);
        }

        function calculate(saleprice, weight, totalRegprice){
            totalSaleprice = Number((saleprice * weight).toFixed(2));
            difference = Number((totalRegprice - totalSaleprice).toFixed(2));
            document.getElementById("reg").innerHTML = "Regular price is : $" + totalRegprice.toFixed(2);
            if(saleprice > 0){
                document.getElementById("totalprice").innerHTML = "Sale price is : $" + totalSaleprice.toFixed(2);
                document.getElementById("difference").innerHTML = "Difference is : -$" + difference.toFixed(2);
                document.getElementById("total").innerHTML = "Store Coupon $" + difference.toFixed(2) + " from $" + totalRegprice.toFixed(2) + "<br><br>" +  "To make the price : $" + totalSaleprice.toFixed(2);
            }
            }