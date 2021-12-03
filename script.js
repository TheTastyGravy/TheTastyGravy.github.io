const cardObjects = document.getElementsByClassName('card')
var cardArray = Object.values(cardObjects)
const buttonObjects = document.getElementsByClassName('portfolio-button')
var buttonArray = Object.values(buttonObjects)
var dropdown = document.getElementById('portfolioDropdownButton')


function showAllCards()
{
    for (let i = 0; i < cardArray.length; i++)
    {
        cardArray[i].style.display = 'flex';
        cardArray[i].parentElement.classList.remove('order-5');
    }
}

function filterCards(tag)
{
    for (let i = 0; i < cardArray.length; i++)
    {
        if (cardArray[i].classList.contains(tag))
        {
            cardArray[i].style.display = 'flex';
            cardArray[i].parentElement.classList.remove('order-5');
        }
        else
        {
            cardArray[i].style.display = 'none';
            cardArray[i].parentElement.classList.add('order-5');
        }
    }
}

function buttonClicked(name, tag)
{
    //reset all buttons
    buttonArray.forEach(button => {
        button.disabled = false;
    });

    document.getElementsByName(name).forEach(button => {
        button.disabled = true;
    });
    dropdown.innerHTML = name;

    //filter cards using tag
    if (tag == '')
        showAllCards();
    else
        filterCards(tag); 
}