function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
document.addEventListener("DOMContentLoaded", () => {
    // Select all increment and decrement buttons
    const incrementButtons = document.querySelectorAll(".increment");
    const decrementButtons = document.querySelectorAll(".decrement");
  
    incrementButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        // Find the sibling span with class 'ding' and update the count
        const countDisplay = event.target.closest(".container").querySelector(".ding");
        let count = parseInt(countDisplay.innerText, 10);
        count++;
        countDisplay.innerText = count;
      });
    });
  
    decrementButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        // Find the sibling span with class 'ding' and update the count
        const countDisplay = event.target.closest(".container").querySelector(".ding");
        let count = parseInt(countDisplay.innerText, 10);
        if (count > 0) count--;
        countDisplay.innerText = count;
      });
    });
  });
  let smthng=[{
    'Roti':230,'Naan':270,'Paratha':500,'Puri':130,'Idli':70,'Dosa':350,'Uttapam':420,'Upma':290,'Khichdi':420,'Biryani':900,'pBM':300 ,'palakPaneer':220,'alooGobi':150,'Bharta':150,'Chole':250,'Rajma':270,'Bhindi':140,'malaiKofta':350,'Sambar':150,'Dosa':200,'butterChicken':350,'cTM':300,'fishCurry':220,'mRJ':400,'Keema':300,'tandooriChicken':250,'Prawn':200,'eggCurry':180,'chickenBiryani':300,'Korma':350,'Samosa':150,'Pakora':100,'bhelPuri':200,'paniPuri':50,'vadaPav':300,'Dhokla':80,'alooTikki':180,'pavBhaji':350,'Kachori':200,'Chaat':250,'Chips':170,'gulabJamun':180,'Rasgulla':120,'Jalebi':150,'Laddu':200,'Kheer':250,'Barfi':180,'Rasmalai':220,'Halwa':250,'Payasam':230,'mysorePak':220
  }]