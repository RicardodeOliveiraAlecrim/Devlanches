
const anotedButton = document.querySelector(".note-button")



const orderFood = document.querySelector(".select-food")

const orderDrink = document.querySelector(".select-drinks")

const orderExtra = document.querySelector(".select-extras")

const money = document.querySelector(".money")




function values() {


  const plusMoney = orderFood.value + orderDrink.value + orderExtra.value

  money.innerHTML = plusMoney.value


  console.log(orderFood)



}

anotedButton.addEventListener("click", values)

