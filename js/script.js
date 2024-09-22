
// common function
// function inputValue(id){
//     const input = parseFloat(document.getElementById(id).value);
//     document.getElementById('donationCount-1').innerText =  input;
//     console.log('hello')
// }

// function donateNow(id) {
//     document.getElementById(id).addEventListener('click', function () {
//         const balance = parseFloat(document.getElementById('balance').innerText);
//         inputValue('input-1');

//     })
// }

// donateNow('donateBtn-1');
// donateNow('donateBtn-2');how 
// donateNow('donateBtn-3');

// reusable function 1
function donateNow(inputId, donationCountId, balanceId){
    document.getElementById('my_modal_1').classList.add('hidden');
    const inputValue = parseFloat(document.getElementById(inputId).value);
    const donationCount = parseFloat(document.getElementById(donationCountId).innerText);
    const balance = parseFloat(document.getElementById(balanceId).innerText);
    if (isNaN(inputValue) || inputValue < 0 || inputValue > balance) {
        alert('Invalid Input');
        window.location.reload();
        return;
    }else{

        document.getElementById(donationCountId).innerText =donationCount + inputValue;
        document.getElementById(balanceId).innerText = balance - inputValue;
        document.getElementById('my_modal_1').classList.remove('hidden');
    }
}

// reusable function 2
function historyCard(inputId, titleId){
    const inputValue = parseFloat(document.getElementById(inputId).value);
    const title = document.getElementById(titleId).innerText;

    const historyList = document.getElementById('history-list');
    historyList.innerHTML += `
    
    <div class="p-8 border border-gray-200 rounded-3xl mb-3">
        <h2 class="text-xl font-bold mb-2">${inputValue} Taka is ${title}</h2>
        <span class="text-secondary">${new Date()}</span>
    </div>
    
    `
}

document.getElementById('donateBtn-1').addEventListener('click', function () {
    // document.getElementById('my_modal_1').classList.add('hidden');
    // const inputValue = parseFloat(document.getElementById('input-1').value);
    // const donationCount = parseFloat(document.getElementById('donationCount-1').innerText);
    // const balance = parseFloat(document.getElementById('balance').innerText);
    // if (isNaN(inputValue) || inputValue < 0 || inputValue > balance) {
    //     alert('Invalid Input');
    //     window.location.reload();
    //     return;
    // }else{

    //     document.getElementById('donationCount-1').innerText =donationCount + inputValue;
    //     document.getElementById('balance').innerText = balance - inputValue;
    //     document.getElementById('my_modal_1').classList.remove('hidden');
    // }
    donateNow('input-1', 'donationCount-1', 'balance')
    historyCard('input-1', 'title-1')
})

document.getElementById('donateBtn-2').addEventListener('click', function () {
    donateNow('input-2', 'donationCount-2', 'balance');
    historyCard('input-2', 'title-2')
})

document.getElementById('donateBtn-3').addEventListener('click', function() {
    donateNow('input-3', 'donationCount-3', 'balance');
    historyCard('input-3', 'title-3')
})

// switching between donation and history
document.getElementById('historyBtn').addEventListener('click', function(){
    document.getElementById('historyBtn').classList.add('bg-primary');
    document.getElementById('donationBtn').classList.remove('bg-primary');
    document.getElementById('donation-container').classList.add('hidden')
    document.getElementById('history-container').classList.remove('hidden')
    
})

document.getElementById('donationBtn').addEventListener('click', function(){
    document.getElementById('donationBtn').classList.add('bg-primary');
    document.getElementById('historyBtn').classList.remove('bg-primary');
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById('donation-container').classList.remove('hidden')
})


// document.getElementById('donateBtn-2').addEventListener('click', function () {
    
// })
// document.getElementById('donateBtn-3').addEventListener('click', function () {
    
// })


// blog
function goToBlogPage(){
    window.location.href = './blog.html';
}
function goToHomePage(){
    window.location.href = './index.html';
}

