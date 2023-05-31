const ratingCard = document.getElementById('rating');
const resultCard = document.getElementById('thank-you');
const rates = document.getElementById('rates');
const submitBtn = document.getElementById('button');
const rateResult = document.getElementById('rate-result');
const buttons = Array.from(rates.children);

let rate = null;

rates.addEventListener('click', e => {
    if(e.target.classList.contains('rate')){
        
        buttons.forEach(button => {
            if(button != e.target)
                button.classList.remove("rate--selected");
            else{
                button.classList.add("rate--selected");
                rate = button.textContent;
            }
        });
    }
});

submitBtn.addEventListener('click', () => {
    if(rate != null){
        ratingCard.style.display = "none";
        resultCard.style.display = "grid";
        rateResult.textContent = rate;
    }
});